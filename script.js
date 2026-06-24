/* ─── Compose state ─── */
const C = { text:'', isPublic:false, expanded:false, media:null, audience:['all'] };

/* ─── Multi-video state ─── */
let videos = [];      // saved video items
let editingIdx = -1;  // -1 = new item

const ta      = document.getElementById('compose-ta');
const abar    = document.getElementById('action-bar');
const saveBtn = document.getElementById('save-btn');
const chk     = document.getElementById('chk');
const chkIcon = document.getElementById('chk-icon');
const pubTag  = document.getElementById('pub-tag');

ta.addEventListener('focus', () => {
  C.expanded=true; abar.style.display='flex';
  document.getElementById('audience-row').style.display='flex'; ta.rows=4;
  applyAudienceConstraints();
});
ta.addEventListener('input', () => { C.text=ta.value; updSave(); });

function togPriv() {
  C.isPublic = !C.isPublic;
  chk.classList.toggle('on', C.isPublic);
  chkIcon.style.display = C.isPublic ? 'block' : 'none';
  pubTag.style.display  = C.isPublic ? 'inline-flex' : 'none';
}

function updSave() {
  const can = C.text.trim() || C.media;
  saveBtn.style.background = can ? '#202020' : '#c8c2be';
  saveBtn.classList.toggle('on', !!can);
}

function onFile(inp) {
  const f = inp.files[0]; if (!f) return;
  const url = URL.createObjectURL(f);
  const type = f.type.startsWith('video/') ? 'video' : f.type.startsWith('image/') ? 'image' : 'file';
  setMedia({ url, type, name: f.name });
  inp.value = '';
}

function setMedia(m) {
  C.media = m;
  const mwrap = document.getElementById('cmp-media-wrap');
  const vw    = document.getElementById('cmp-vid-wrap');
  const iw    = document.getElementById('cmp-img-wrap');
  const fw    = document.getElementById('cmp-file-row');
  mwrap.style.display='none'; vw.style.display='none';
  iw.style.display='none'; fw.style.display='none';
  const audRow = document.getElementById('audience-row');
  if (m.type==='video') {
    mwrap.style.display='block'; vw.style.display='block';
    if (m.url) document.getElementById('cmp-vid').src=m.url;
    audRow.style.display='flex';
  } else if (m.type==='image') {
    audRow.style.display='none'; mwrap.style.display='block'; iw.style.display='block';
    document.getElementById('cmp-img').src=m.url;
  } else {
    fw.style.display='flex';
    document.getElementById('cmp-fname').textContent=m.name;
  }
  updSave();
}

function clearMedia() {
  C.media = null;
  ['cmp-media-wrap','cmp-vid-wrap','cmp-img-wrap','cmp-file-row'].forEach(id =>
    document.getElementById(id).style.display='none');
  document.getElementById('audience-row').style.display='none';
  C.audience=['all']; resetAudChips(); updSave();
}

function togAudMain(which) {
  const opt = document.querySelector('[data-aud="'+which+'"]');
  if (opt.classList.contains('taken')) return;
  document.querySelectorAll('.aud-option').forEach(c=>c.classList.remove('sel'));
  opt.classList.add('sel');
  const tl = document.getElementById('tier-list');
  if (which==='all') {
    C.audience=['all']; tl.style.display='none';
    document.querySelectorAll('.tier-opt').forEach(t=>t.classList.remove('sel'));
  } else {
    tl.style.display='flex';
    // Auto-select only tiers that are NOT taken
    if (!document.querySelector('.tier-opt.sel:not(.taken)')) {
      document.querySelectorAll('.tier-opt:not(.taken)').forEach(t=>t.classList.add('sel'));
    }
    C.audience=Array.from(document.querySelectorAll('.tier-opt.sel')).map(t=>t.dataset.tier);
    if (!C.audience.length) { togAudMain('all'); return; }
  }
}

function togTier(btn) {
  if (btn.classList.contains('taken')) return;
  btn.classList.toggle('sel');
  C.audience=Array.from(document.querySelectorAll('.tier-opt.sel')).map(t=>t.dataset.tier);
  if (!C.audience.length) togAudMain('all');
}

function resetAudChips() {
  document.querySelectorAll('.aud-option').forEach(c=>c.classList.toggle('sel',c.dataset.aud==='all'));
  document.getElementById('tier-list').style.display='none';
  document.querySelectorAll('.tier-opt').forEach(t=>t.classList.remove('sel'));
  C.audience=['all'];
}

/* ─── Audience constraint enforcement ─── */
function getUsedAudiences() {
  const used = new Set();
  videos.forEach((v, idx) => {
    if (idx === editingIdx) return;
    (v.audience || []).forEach(a => used.add(a));
  });
  return used;
}

function applyAudienceConstraints() {
  const used = getUsedAudiences();

  // All Supporters radio
  const allOpt = document.querySelector('[data-aud="all"]');
  const allTaken = used.has('all');
  allOpt.classList.toggle('taken', allTaken);
  // If currently selected and now taken, deselect
  if (allTaken && allOpt.classList.contains('sel')) {
    allOpt.classList.remove('sel');
    document.querySelector('[data-aud="tiers"]').classList.add('sel');
    document.getElementById('tier-list').style.display='flex';
    C.audience=[];
  }

  // Tier checkboxes
  document.querySelectorAll('.tier-opt').forEach(t => {
    const isTaken = used.has(t.dataset.tier);
    t.classList.toggle('taken', isTaken);
    // Remove from selection if now taken
    if (isTaken) t.classList.remove('sel');
    // In-use tag
    let tag = t.querySelector('.in-use-tag');
    if (isTaken && !tag) {
      tag = document.createElement('span');
      tag.className = 'in-use-tag'; tag.textContent = 'In use';
      t.appendChild(tag);
    } else if (!isTaken && tag) {
      tag.remove();
    }
  });

  C.audience = Array.from(document.querySelectorAll('.tier-opt.sel')).map(t=>t.dataset.tier);
  if (!C.audience.length && !document.querySelector('[data-aud="all"].sel')) {
    const tiersOpt = document.querySelector('[data-aud="tiers"]');
    if (!tiersOpt.classList.contains('taken')) {
      // keep tiers selected, just no sub-tiers chosen yet
    } else {
      C.audience=['all'];
      resetAudChips();
    }
  }
}

/* ─── Open compose for new / edit ─── */
function startNewVideo() {
  editingIdx = -1;
  resetCompose();
  document.getElementById('compose-wrap').style.display='block';
  document.getElementById('add-vid-btn').style.display='none';
  applyAudienceConstraints();
  ta.focus();
}

function resetCompose() {
  ta.value=''; C.text=''; C.isPublic=false; C.expanded=false; C.media=null; C.audience=['all'];
  chk.classList.remove('on'); chkIcon.style.display='none'; pubTag.style.display='none';
  abar.style.display='none'; document.getElementById('audience-row').style.display='none';
  ta.rows=2; clearMedia(); updSave();
}

function closeCompose() {
  document.getElementById('compose-wrap').style.display='none';
  document.getElementById('add-vid-btn').style.display='flex';
  resetCompose();
}

/* ─── Save / update ─── */
function doSave() {
  if (!saveBtn.classList.contains('on')) return;
  const item = { text: C.text.trim(), media: C.media, isPublic: C.isPublic, audience: [...C.audience] };
  if (editingIdx >= 0) {
    videos[editingIdx] = item;
  } else {
    videos.push(item);
  }
  renderVideoList();
  closeCompose();
}

/* ─── Render list ─── */
const AUD_LABELS = { all:'All Supporters', tier1:'Tier 1', tier2:'Tier 2', tier3:'Tier 3' };

function audSummary(audience) {
  if (!audience || audience.includes('all')) return 'All Supporters';
  return audience.map(a => AUD_LABELS[a]||a).join(', ');
}

function renderVideoList() {
  const list = document.getElementById('video-list');
  list.innerHTML = '';
  videos.forEach((v, idx) => {
    const div = document.createElement('div');
    div.className = 'vid-item';

    // Thumbnail
    let thumbHtml = '';
    if (v.media?.type==='video' && v.media.url) {
      thumbHtml = `<video src="${v.media.url}" class="vid-thumb-vid" muted></video>`;
    } else {
      thumbHtml = `<svg width="22" height="18" viewBox="0 0 24 20" fill="none" stroke="#A19792" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="14" height="14" rx="2"/><path d="M15 8l5-3v10l-5-3V8z"/></svg>`;
    }

    // Audience
    const aud = audSummary(v.audience);

    // Message preview
    const msgDisplay = v.text || (v.media ? `[${v.media.type}]` : '—');

    div.innerHTML = `
      <div class="vid-item-top">
        <div class="vid-thumb">${thumbHtml}</div>
        <div class="vid-item-body">
          <p class="vid-msg${v.text ? '' : ' placeholder'}">${msgDisplay}</p>
          <div class="vid-audience-row">
            <span class="vid-aud-label">Send to</span>
            <span style="display:inline-flex;align-items:center;gap:3px;background:#e9dfd2;border-radius:20px;padding:2px 8px;font-size:10px;font-weight:600;color:#202020">
              ${aud}
            </span>
          </div>
        </div>
      </div>
      <div class="vid-item-actions">
        <button class="vid-act-btn" onclick="editVideoItem(${idx})">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Edit
        </button>
        <button class="vid-act-btn del" onclick="deleteVideoItem(${idx})">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          Delete
        </button>
      </div>`;
    list.appendChild(div);
  });
}

function editVideoItem(idx) {
  editingIdx = idx;
  const v = videos[idx];
  ta.value = v.text; C.text = v.text;
  C.isPublic = v.isPublic;
  chk.classList.toggle('on', C.isPublic);
  chkIcon.style.display = C.isPublic ? 'block' : 'none';
  pubTag.style.display  = C.isPublic ? 'inline-flex' : 'none';
  C.audience = [...(v.audience || ['all'])];
  if (v.media) {
    setMedia(v.media);
    if (v.media.type==='video') {
      resetAudChips();
      if (!C.audience.includes('all')) {
        togAudMain('tiers');
        document.querySelectorAll('.tier-opt').forEach(t=>t.classList.remove('sel'));
        C.audience.forEach(a => {
          const t = document.querySelector('[data-tier="'+a+'"]');
          if (t) t.classList.add('sel');
        });
      }
    }
  }
  C.expanded=true; ta.rows=4; abar.style.display='flex';
  document.getElementById('audience-row').style.display='flex';
  document.getElementById('compose-wrap').style.display='block';
  document.getElementById('add-vid-btn').style.display='none';
  applyAudienceConstraints();
  updSave(); ta.focus();
}

function deleteVideoItem(idx) {
  videos.splice(idx, 1);
  renderVideoList();
  if (editingIdx === idx) closeCompose();
  else if (editingIdx > idx) editingIdx--;
}

/* ─── Tab switch ─── */
function swTab(el) {
  document.querySelectorAll('.s-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
}

/* ─── Tip mode ─── */
function pickMode(m) {
  document.getElementById('r-coffee').classList.toggle('on', m==='coffee');
  document.getElementById('r-simple').classList.toggle('on', m==='simple');
}

/* ─── Webcam ─── */
let wcStream=null, wcRec=null, wcChunks=[], wcTimer=null;
let wcPhase='pre', wcDemo=false, wcReady=false, wcSecs=0, wcUrl=null;

function openWc() {
  wcPhase='pre'; wcSecs=0; wcReady=false; wcDemo=false; wcUrl=null;
  const ol = document.getElementById('wc-overlay');
  ol.classList.add('open');
  document.getElementById('wc-loading').style.display='flex';
  document.getElementById('wc-live').style.display='none';
  document.getElementById('wc-review').style.display='none';
  document.getElementById('wc-rec-ind').classList.remove('show');
  document.getElementById('wc-demo').style.display='none';
  renderWcBtns();

  navigator.mediaDevices.getUserMedia({ video:true, audio:true })
    .then(s => {
      wcStream=s;
      const v=document.getElementById('wc-live');
      v.srcObject=s; v.style.display='block';
      document.getElementById('wc-loading').style.display='none';
      wcReady=true; renderWcBtns();
    })
    .catch(()=>{
      wcDemo=true; wcReady=true;
      document.getElementById('wc-loading').style.display='none';
      document.getElementById('wc-demo').style.display='block';
      renderWcBtns();
    });
}

function closeWc() {
  stopWcTracks(); clearWcTimer();
  document.getElementById('wc-overlay').classList.remove('open');
  const lv=document.getElementById('wc-live');
  lv.srcObject=null; lv.style.display='none';
  const rv=document.getElementById('wc-review');
  rv.style.display='none'; rv.src='';
  document.getElementById('wc-rec-ind').classList.remove('show');
  document.getElementById('wc-demo').style.display='none';
  document.getElementById('wc-loading').style.display='flex';
}

function stopWcTracks() {
  if (wcStream) { wcStream.getTracks().forEach(t=>t.stop()); wcStream=null; }
  if (wcRec && wcRec.state!=='inactive') { try{wcRec.stop()}catch(e){} }
}
function clearWcTimer() { if (wcTimer) { clearInterval(wcTimer); wcTimer=null; } }

function renderWcBtns() {
  const btns=document.getElementById('wc-btns');
  btns.innerHTML='';
  if (wcPhase==='pre') {
    const b=document.createElement('button');
    b.className='wc-btn wc-dark'; b.innerHTML='<div class="r-ball"></div> Record';
    if (!wcReady) b.disabled=true;
    b.onclick=wcStart; btns.appendChild(b);
  } else if (wcPhase==='recording') {
    const b=document.createElement('button');
    b.className='wc-btn wc-red'; b.innerHTML='<div class="r-sq"></div> Stop';
    b.onclick=wcStop; btns.appendChild(b);
  } else {
    const r=document.createElement('button');
    r.className='wc-btn wc-outline'; r.textContent='Re-record'; r.onclick=wcReRecord;
    const u=document.createElement('button');
    u.className='wc-btn wc-dark'; u.textContent='Use Video'; u.onclick=wcUse;
    btns.appendChild(r); btns.appendChild(u);
  }
}

function wcStart() {
  wcPhase='recording'; wcSecs=0;
  document.getElementById('wc-rec-ind').classList.add('show');
  document.getElementById('wc-secs').textContent='0s / 30s';
  renderWcBtns();
  wcTimer=setInterval(()=>{
    wcSecs++; document.getElementById('wc-secs').textContent=`${wcSecs}s / 30s`;
    if (wcSecs>=30) wcStop();
  },1000);
  if (wcDemo || !wcStream) return;
  wcChunks=[];
  wcRec=new MediaRecorder(wcStream,{mimeType:'video/webm'});
  wcRec.ondataavailable=e=>{ if(e.data.size>0) wcChunks.push(e.data); };
  wcRec.onstop=()=>{ wcUrl=URL.createObjectURL(new Blob(wcChunks,{type:'video/webm'})); wcGoReview(); };
  wcRec.start();
}

function wcStop() {
  clearWcTimer();
  document.getElementById('wc-rec-ind').classList.remove('show');
  if (wcDemo||!wcRec) { wcUrl=null; wcGoReview(); }
  else if (wcRec.state!=='inactive') wcRec.stop();
}

function wcGoReview() {
  wcPhase='review';
  document.getElementById('wc-live').style.display='none';
  document.getElementById('wc-demo').style.display='none';
  const rv=document.getElementById('wc-review');
  if (wcUrl) { rv.src=wcUrl; rv.style.display='block'; }
  renderWcBtns();
}

function wcReRecord() {
  wcPhase='pre'; wcSecs=0; wcUrl=null;
  document.getElementById('wc-review').style.display='none';
  document.getElementById('wc-review').src='';
  document.getElementById('wc-loading').style.display='none';
  if (!wcDemo) {
    stopWcTracks();
    navigator.mediaDevices.getUserMedia({video:true,audio:true})
      .then(s=>{wcStream=s;const v=document.getElementById('wc-live');v.srcObject=s;v.style.display='block';wcReady=true;renderWcBtns();})
      .catch(()=>{wcDemo=true;wcReady=true;document.getElementById('wc-demo').style.display='block';renderWcBtns();});
  } else {
    document.getElementById('wc-demo').style.display='block';
    wcReady=true; renderWcBtns();
  }
}

function wcUse() {
  const url=wcUrl;
  closeWc();
  if (url) {
    setMedia({url,type:'video',name:'recorded-video.webm'});
  } else {
    // Demo: show placeholder block
    C.media={type:'video',url:'',name:'recorded-video.webm',demo:true};
    document.getElementById('cmp-media-wrap').style.display='block';
    const vw=document.getElementById('cmp-vid-wrap');
    vw.style.cssText='display:flex;align-items:center;justify-content:center;border-radius:8px;background:#202020;aspect-ratio:16/9;width:100%;position:relative;';
    vw.innerHTML=`<svg width="22" height="22" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)"><path d="M7 4v16l13-8z"/></svg><button class="rm-btn" style="position:absolute;top:5px;right:5px" onclick="clearMedia()">✕</button>`;
    updSave();
  }
  C.expanded=true; abar.style.display='flex'; ta.rows=4;
}

/* init */
updSave();
renderVideoList();
