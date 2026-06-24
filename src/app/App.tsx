import React, { useState, useRef, useEffect } from "react";
import {
  Bell, Mail, Home, AlignJustify, Send, Image, Video,
  X, ArrowLeft, MoreHorizontal, Smile, Paperclip, Globe2, Lock,
  Square, CheckSquare,
} from "lucide-react";
import imgImage from "@/imports/KoFiYourSettings/76b4d5a6af50697a0ad3a263a0314a5fc1db852d.png";
import imgImageKoFiLogo from "@/imports/KoFiYourSettings/6072d41000b86b34338637a89021ff7eb5adc95e.png";

// ─── Types ────────────────────────────────────────────────────────────────────
const DM = "'DM Sans', sans-serif";

// Alax buyer avatar (inline base64 from HTML prototype)
const ALAX_AVATAR = "data:image/png;base64,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";

interface AttachedMedia { url: string; type: "video" | "image" | "file"; name: string; }
interface SentMessage {
  id: string; text: string; videoUrl: string | null;
  file: { url: string; name: string; type: "image" | "file" } | null;
  isPublic: boolean; time: string;
}

// ─── Banner Canvas ─────────────────────────────────────────────────────────────
function BannerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const EMOJIS = ["☕️", "👏", "❤️", "🎉", "💌"];
    const COLS = 11, SIZE = 26;
    let raf: number;
    const logo = new window.Image();
    logo.src = imgImageKoFiLogo;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    function makeParticle(col: number) {
      const laneW = canvas.offsetWidth / COLS;
      return {
        x: laneW * col + laneW * 0.5,
        y: -SIZE - Math.random() * (canvas.offsetHeight * 1.5),
        speed: 0.32 + Math.random() * 0.22,
        type: Math.random() > 0.5 ? "emoji" : "cup",
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        opacity: 0, col,
      };
    }

    const particles = Array.from({ length: COLS }, (_, i) => makeParticle(i));

    function draw() {
      const W = canvas.offsetWidth, H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.y += p.speed;
        const fz = 18;
        if (p.y < fz) p.opacity = Math.max(0, p.y / fz);
        else if (p.y > H - fz) p.opacity = Math.max(0, (H - p.y) / fz);
        else p.opacity = 1;
        if (p.y > H + SIZE + 4) {
          const laneW = W / COLS;
          p.x = laneW * p.col + laneW * 0.5;
          p.y = -SIZE - Math.random() * 60;
          p.speed = 0.32 + Math.random() * 0.22;
          p.type = Math.random() > 0.5 ? "emoji" : "cup";
          p.emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
          p.opacity = 0;
        }
        ctx.save(); ctx.globalAlpha = p.opacity;
        if (p.type === "cup" && logo.complete && logo.naturalWidth) {
          const ratio = logo.naturalWidth / logo.naturalHeight;
          const dw = ratio >= 1 ? SIZE : SIZE * ratio, dh = ratio >= 1 ? SIZE / ratio : SIZE;
          ctx.drawImage(logo, Math.round(p.x - dw / 2), Math.round(p.y - dh / 2), dw, dh);
        } else {
          ctx.font = "18px serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
          ctx.fillText(p.emoji, Math.round(p.x), Math.round(p.y));
        }
        ctx.restore();
      });
      raf = requestAnimationFrame(draw);
    }
    logo.onload = draw;
    if (logo.complete && logo.naturalWidth) draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />;
}

// ─── Webcam Modal ──────────────────────────────────────────────────────────────
type WebcamPhase = "pre" | "recording" | "review";
const DEMO_VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4";

function WebcamModal({ onClose, onUseVideo }: { onClose: () => void; onUseVideo: (url: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mrRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [phase, setPhase] = useState<WebcamPhase>("pre");
  const [ready, setReady] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
        setReady(true);
      })
      .catch(() => { setIsDemoMode(true); setReady(true); });
    return () => { streamRef.current?.getTracks().forEach(t => t.stop()); if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const startRec = () => {
    setPhase("recording"); setSeconds(0);
    timerRef.current = setInterval(() => setSeconds(s => { if (s >= 29) { stopRec(); return 30; } return s + 1; }), 1000);
    if (isDemoMode) return;
    if (!streamRef.current) return;
    chunksRef.current = [];
    const mr = new MediaRecorder(streamRef.current, { mimeType: "video/webm" });
    mr.ondataavailable = e => { if (e.data.size > 0) chunksRef.current.push(e.data); };
    mr.onstop = () => { setRecordedUrl(URL.createObjectURL(new Blob(chunksRef.current, { type: "video/webm" }))); setPhase("review"); };
    mr.start(); mrRef.current = mr;
  };

  const stopRec = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    if (isDemoMode) { setRecordedUrl(DEMO_VIDEO_URL); setPhase("review"); }
    else mrRef.current?.stop();
  };

  const handleClose = () => { streamRef.current?.getTracks().forEach(t => t.stop()); onClose(); };

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 32px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(3px)" }}>
      <div style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.25)", width: "100%", maxWidth: 310, fontFamily: DM }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 16px 12px" }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: "#192025" }}>Record Video</p>
          <button onClick={handleClose} style={{ width: 28, height: 28, borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <X size={18} color="#848a95" />
          </button>
        </div>
        <div style={{ padding: "0 16px 18px" }}>
          {/* Preview */}
          {phase !== "review" && (
            <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", background: "#111", height: 200 }}>
              {isDemoMode
                ? <video src={DEMO_VIDEO_URL} autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                : <video ref={videoRef} autoPlay muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: "scaleX(-1)" }} />
              }
              {!ready && <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13 }}>Starting camera…</div>}
              {phase === "recording" && (
                <div style={{ position: "absolute", top: 10, left: 10, display: "flex", alignItems: "center", gap: 6, background: "rgba(0,0,0,0.55)", borderRadius: 20, padding: "4px 10px" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444", animation: "pulse 1s infinite" }} />
                  <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
                  <span style={{ fontSize: 12, color: "white", fontWeight: 600 }}>{seconds}s / 30s</span>
                </div>
              )}
              {isDemoMode && <div style={{ position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.55)", color: "white", fontSize: 10, fontWeight: 600, padding: "2px 9px", borderRadius: 20, whiteSpace: "nowrap" }}>📹 Demo mode</div>}
            </div>
          )}
          {phase === "review" && recordedUrl && (
            <div style={{ borderRadius: 12, overflow: "hidden", background: "#111", marginBottom: 0 }}>
              <video src={recordedUrl} controls playsInline style={{ width: "100%", display: "block" }} />
            </div>
          )}

          {/* Controls */}
          <div style={{ paddingTop: 12, display: "flex", justifyContent: "center", gap: 10 }}>
            {phase === "pre" && (
              <button onClick={startRec} disabled={!ready}
                style={{ height: 40, padding: "0 20px", borderRadius: 10, border: "none", cursor: ready ? "pointer" : "default", fontSize: 13, fontWeight: 700, color: "white", background: ready ? "#202020" : "#c8c2be", fontFamily: DM, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", flexShrink: 0, display: "inline-block" }} />
                Record
              </button>
            )}
            {phase === "recording" && (
              <button onClick={stopRec}
                style={{ height: 40, padding: "0 20px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 700, color: "white", background: "#ef4444", fontFamily: DM, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: "white", flexShrink: 0, display: "inline-block" }} />
                Stop
              </button>
            )}
            {phase === "review" && (
              <>
                <button onClick={() => { setRecordedUrl(null); setPhase("pre"); setSeconds(0); }}
                  style={{ height: 40, padding: "0 16px", borderRadius: 10, border: "1.5px solid #e0d9d0", background: "white", cursor: "pointer", fontSize: 13, fontWeight: 700, color: "#192025", fontFamily: DM }}>
                  Re-record
                </button>
                <button onClick={() => recordedUrl && onUseVideo(recordedUrl)}
                  style={{ height: 40, padding: "0 20px", borderRadius: 10, border: "none", background: "#202020", cursor: "pointer", fontSize: 13, fontWeight: 700, color: "white", fontFamily: DM }}>
                  Upload Video
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Nav Bar ──────────────────────────────────────────────────────────────────
function NavBar({ onMailClick }: { onMailClick: () => void }) {
  return (
    <div style={{ height: 62, background: "#f4efe7", borderBottom: "0.5px solid #e0d9d0", flexShrink: 0, display: "flex", alignItems: "center", padding: "0 16px", fontFamily: DM }}>
      <img src={imgImageKoFiLogo} alt="Ko-fi" style={{ height: 30, width: "auto", objectFit: "contain" }} />
      <div style={{ flex: 1 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", overflow: "hidden", flexShrink: 0, margin: "0 2px" }}>
          <img src={imgImage} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "50%" }} />
        </div>
        {([<Bell key="b" size={20} />, <Mail key="m" size={20} />, <Home key="h" size={20} />] as React.ReactNode[]).map((icon, i) => (
          <button key={i} onClick={i === 1 ? onMailClick : undefined} style={{ width: 38, height: 38, borderRadius: "50%", background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#192025" }}>
            {icon}
          </button>
        ))}
        <button style={{ width: 38, height: 38, borderRadius: "50%", background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#192025" }}>
          <svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="2.4" rx="1.2" fill="#192025"/><rect y="5.8" width="20" height="2.4" rx="1.2" fill="#192025"/><rect y="11.6" width="20" height="2.4" rx="1.2" fill="#192025"/></svg>
        </button>
      </div>
    </div>
  );
}

// ─── Thank You Screen ─────────────────────────────────────────────────────────
function ThankYouScreen({ onShowChat }: { onShowChat: (msgs: SentMessage[]) => void }) {
  const [composeText, setComposeText] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [media, setMedia] = useState<AttachedMedia | null>(null);
  const [isPublic, setIsPublic] = useState(false);
  const [showWebcam, setShowWebcam] = useState(false);
  const [sentMessages, setSentMessages] = useState<SentMessage[]>([]);
  const [lastSent, setLastSent] = useState<SentMessage | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const canSend = !!(composeText.trim() || media);

  const handleFocus = () => { if (!expanded) { setExpanded(true); } };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]; if (!f) return;
    const url = URL.createObjectURL(f);
    setMedia({ url, type: f.type.startsWith("video/") ? "video" : f.type.startsWith("image/") ? "image" : "file", name: f.name });
    e.target.value = "";
  };

  const handleSend = () => {
    if (!canSend) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const msg: SentMessage = {
      id: crypto.randomUUID(),
      text: composeText.trim(),
      videoUrl: media?.type === "video" ? media.url : null,
      file: (media?.type === "image" || media?.type === "file") ? { url: media.url, name: media.name, type: media.type as "image" | "file" } : null,
      isPublic,
      time,
    };
    setSentMessages(prev => [...prev, msg]);
    setLastSent(msg);
    setComposeText(""); setMedia(null); setIsPublic(false); setExpanded(false);
  };

  const handleWebcamVideo = (url: string) => {
    setShowWebcam(false);
    setMedia({ url, type: "video", name: "recorded-video.webm" });
    setExpanded(true);
  };

  return (
    <>
      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none" }}>
        {/* Card */}
        <div style={{ background: "white", borderRadius: 14, margin: "16px 8px 0", overflow: "hidden" }}>
          {/* Banner */}
          <div style={{ height: 120, background: "#e9dfd2", borderRadius: "14px 14px 0 0", position: "relative", overflow: "hidden" }}>
            <BannerCanvas />
          </div>

          {/* Avatar ring */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: -37, position: "relative", zIndex: 1 }}>
            <div style={{ background: "white", borderRadius: "50%", padding: 2, width: 75, height: 75 }}>
              <img src={ALAX_AVATAR} alt="Alax" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" }} />
            </div>
          </div>

          {/* Card title */}
          <p style={{ textAlign: "center", padding: "12px 64px 0", fontSize: 20, fontWeight: 800, color: "#192025", lineHeight: 1.25, fontFamily: DM }}>
            Alax bought you a <span style={{ textTransform: "lowercase" }}>Coffee!</span>
          </p>

          {/* Buyer section */}
          <div style={{ padding: "16px 24px 12px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, paddingBottom: 12 }}>
              <img src={ALAX_AVATAR} alt="Alax" style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 16, fontWeight: 600, color: "#192025", lineHeight: 1.4, fontFamily: DM }}>Alax</p>
                <p style={{ fontSize: 14, color: "#848a95", lineHeight: 1.4, fontFamily: DM }}>5 min ago</p>
              </div>
            </div>
            <div style={{ border: "1px solid #d4cfcd", borderRadius: 18, padding: 17, marginBottom: 4, fontSize: 16, color: "#192025", fontFamily: DM, lineHeight: 1.5 }}>
              I just grabbed you a coffee ☕ Loved your latest post 💛
            </div>
            <p style={{ fontSize: 14, color: "#192025", opacity: 0.6, padding: "8px 0", fontFamily: DM }}>
              Only visible to you
            </p>
          </div>

          {/* Say thank you section */}
          <div style={{ padding: "0 24px 24px" }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#192025", marginBottom: 10, fontFamily: DM }}>Say thank you</p>

            {/* Sent preview */}
            {lastSent && (
              <div style={{ marginBottom: 14 }}>
                <div style={{ border: "1px solid #e0d9d0", borderRadius: 14, padding: "12px 14px", background: "#fafaf9" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <img src={imgImage} alt="You" style={{ width: 24, height: 24, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#192025", fontFamily: DM }}>You</span>
                    <span style={{ fontSize: 12, color: "#b0a89e", fontFamily: DM }}>{lastSent.time}</span>
                    {lastSent.isPublic
                      ? <span style={{ display: "inline-flex", alignItems: "center", gap: 3, background: "#e6f8f4", borderRadius: 20, padding: "1px 6px", fontSize: 10, color: "#3ac89e", fontWeight: 600 }}><Globe2 size={9} /> Public</span>
                      : <span style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 10, color: "#b0a89e" }}><Lock size={9} /> Private</span>
                    }
                  </div>
                  {lastSent.text && <p style={{ fontSize: 14, color: "#192025", lineHeight: 1.5, marginBottom: 8, fontFamily: DM }}>{lastSent.text}</p>}
                  {lastSent.videoUrl && <div style={{ borderRadius: 10, overflow: "hidden", background: "#202020" }}><video src={lastSent.videoUrl} controls playsInline style={{ width: "100%", height: "auto", display: "block" }} /></div>}
                  {lastSent.file?.type === "image" && <div style={{ borderRadius: 10, overflow: "hidden", height: 100 }}><img src={lastSent.file.url} alt={lastSent.file.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>}
                  {lastSent.file?.type === "file" && <div style={{ display: "flex", alignItems: "center", gap: 7, background: "#f0ede9", borderRadius: 8, padding: "7px 10px" }}><span style={{ fontSize: 12, color: "#192025", fontFamily: DM }}>{lastSent.file.name}</span></div>}
                </div>
                <button onClick={() => onShowChat([...sentMessages])} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", padding: "8px 2px 0", fontFamily: DM, fontSize: 13, color: "#848a95", textDecoration: "underline" }}>
                  <Mail size={13} color="#848a95" /> See private message
                </button>
              </div>
            )}

            {/* Compose card */}
            <div style={{ border: "1.5px solid #e0d9d0", borderRadius: 16, background: "white", overflow: "hidden" }}>
              <textarea
                value={composeText}
                onChange={e => setComposeText(e.target.value)}
                onFocus={handleFocus}
                rows={expanded ? 3 : 2}
                placeholder="Add a personal thank you..."
                style={{ width: "100%", background: "transparent", border: "none", outline: "none", resize: "none", fontSize: 15, color: "#192025", fontFamily: DM, lineHeight: 1.5, padding: "14px 14px 8px", boxSizing: "border-box" }}
              />

              {/* Media preview */}
              {media && (
                <div style={{ padding: "0 12px 8px" }}>
                  {media.type === "video" && (
                    <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", background: "#202020", aspectRatio: "16/9" }}>
                      <video src={media.url} controls playsInline style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                      <button onClick={() => setMedia(null)} style={{ position: "absolute", top: 6, right: 6, width: 24, height: 24, borderRadius: "50%", background: "rgba(0,0,0,0.55)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={12} color="white" /></button>
                    </div>
                  )}
                  {media.type === "image" && (
                    <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", height: 110 }}>
                      <img src={media.url} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      <button onClick={() => setMedia(null)} style={{ position: "absolute", top: 6, right: 6, width: 24, height: 24, borderRadius: "50%", background: "rgba(0,0,0,0.55)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={12} color="white" /></button>
                    </div>
                  )}
                  {media.type === "file" && (
                    <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f5f3f1", borderRadius: 10, padding: "8px 12px", border: "1px solid #e0d9d0" }}>
                      <span style={{ fontSize: 13, color: "#192025", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: DM }}>{media.name}</span>
                      <button onClick={() => setMedia(null)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex" }}><X size={13} color="#848a95" /></button>
                    </div>
                  )}
                </div>
              )}

              {/* Action bar */}
              {expanded && (
                <div style={{ borderTop: "1px solid #f0ede9", padding: "8px 10px", display: "flex", gap: 8 }}>
                  <input ref={fileInputRef} type="file" accept="*/*" onChange={handleFile} style={{ display: "none" }} />
                  <button onClick={() => fileInputRef.current?.click()} style={{ flex: 1, height: 38, borderRadius: 10, border: "1px solid #e0d9d0", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 600, color: "#192025", fontFamily: DM, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <Image size={14} /> Media
                  </button>
                  <button onClick={() => setShowWebcam(true)} style={{ flex: 1, height: 38, borderRadius: 10, border: "1px solid #e0d9d0", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 600, color: "#192025", fontFamily: DM, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <Video size={14} /> Record Video
                  </button>
                </div>
              )}
            </div>

            {/* Bottom row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10, gap: 8 }}>
              <div onClick={() => setIsPublic(v => !v)} style={{ display: "flex", alignItems: "center", gap: 7, cursor: "pointer", userSelect: "none", fontSize: 13, color: "#192025", fontFamily: DM }}>
                {isPublic
                  ? <CheckSquare size={17} color="#3ac89e" />
                  : <Square size={17} color="#c8c2be" />
                }
                Make this public
                {isPublic && <span style={{ display: "inline-flex", alignItems: "center", gap: 3, background: "#e6f8f4", borderRadius: 20, padding: "1px 6px", fontSize: 10, color: "#3ac89e", fontWeight: 600 }}>
                  <Globe2 size={9} /> Public
                </span>}
              </div>
              <button onClick={handleSend} disabled={!canSend} style={{ height: 36, padding: "0 18px", borderRadius: 10, border: "none", cursor: canSend ? "pointer" : "default", fontSize: 14, fontWeight: 700, color: "white", fontFamily: DM, background: canSend ? "#202020" : "#c8c2be", display: "flex", alignItems: "center", gap: 6, flexShrink: 0, transition: "background 0.15s" }}>
                <Send size={13} /> Send
              </button>
            </div>
          </div>
        </div>

        {/* Payment info block */}
        <div style={{ background: "#E9DFD2", borderRadius: 14, padding: "14px 18px", margin: "12px 8px 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#848a95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            <span style={{ fontSize: 12, color: "#848a95", fontWeight: 500, fontFamily: DM }}>Only visible to you</span>
          </div>
          <p style={{ fontSize: 15, fontWeight: 700, color: "#192025", marginBottom: 4, fontFamily: DM }}>Alex paid $3.00</p>
          <p style={{ fontSize: 14, color: "#848a95", marginBottom: 2, fontFamily: DM }}>10 days ago</p>
          <p style={{ fontSize: 14, color: "#848a95", marginBottom: 2, fontFamily: DM }}>The payment went to your Stripe account.</p>
          <button style={{ fontSize: 14, color: "#192025", fontWeight: 500, textDecoration: "underline", background: "none", border: "none", padding: 0, cursor: "pointer", marginTop: 6, display: "inline-block", fontFamily: DM }}>
            View details
          </button>
        </div>
      </div>

      {showWebcam && <WebcamModal onClose={() => setShowWebcam(false)} onUseVideo={handleWebcamVideo} />}
    </>
  );
}

// ─── Chat Screen ──────────────────────────────────────────────────────────────
function ChatScreen({ sentMessages, onBack }: { sentMessages: SentMessage[]; onBack: () => void }) {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [sentMessages]);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: "#f4efe7", fontFamily: DM }}>
      {/* Chat header */}
      <div style={{ height: 79, background: "#f4efe7", borderBottom: "0.5px solid #d5cfcd", flexShrink: 0, display: "flex", alignItems: "center", padding: "0 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={onBack} style={{ width: 45, height: 45, borderRadius: "50%", background: "#e0dad9", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ArrowLeft size={16} color="black" />
            </button>
            <span style={{ fontSize: 20, fontWeight: 700, color: "black" }}>Alax</span>
          </div>
          <MoreHorizontal size={18} color="#818181" />
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", padding: "24px 23px", gap: 15, scrollbarWidth: "none" }}>
        {/* Base messages */}
        {[
          { avatar: ALAX_AVATAR, name: "Alax", time: "7 Oct at 11:26", text: "I just grabbed you a coffee ☕ Loved your latest post 💛" },
          { avatar: imgImage, name: "You", time: "7 Oct at 11:33", text: "Thank you so much!! 🥺💖" },
          { avatar: ALAX_AVATAR, name: "Alax", time: "7 Oct at 11:35", text: `The "morning light" pixel art was my favorite, so calming.` },
          { avatar: imgImage, name: "You", time: "7 Oct at 11:38", text: "I might release a wallpaper version next week if people are interested." },
        ].map((m, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <img src={m.avatar} alt={m.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center", padding: "5px 0" }}>
                <span style={{ fontWeight: 700, fontSize: 15.7, color: "black" }}>{m.name}</span>
                <span style={{ fontSize: 13, color: "#afb0b1" }}>{m.time}</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <p style={{ flex: 1, fontSize: 16, color: "black", lineHeight: 1.45 }}>{m.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 9, padding: 5, flexShrink: 0 }}>
                  <Smile size={16} color="#818181" style={{ cursor: "pointer" }} />
                  <MoreHorizontal size={16} color="#818181" style={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Sent messages */}
        {sentMessages.map(msg => (
          <div key={msg.id} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <img src={imgImage} alt="You" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center", padding: "5px 0" }}>
                <span style={{ fontWeight: 700, fontSize: 15.7, color: "black" }}>You</span>
                <span style={{ fontSize: 13, color: "#afb0b1" }}>{msg.time}</span>
                {msg.isPublic
                  ? <span style={{ display: "inline-flex", alignItems: "center", gap: 3, background: "#e6f8f4", borderRadius: 20, padding: "1px 6px", fontSize: 10, color: "#3ac89e", fontWeight: 600 }}><Globe2 size={9} /> Public</span>
                  : <span style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 10, color: "#b0a89e" }}><Lock size={9} /> Private</span>
                }
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {msg.text && <p style={{ fontSize: 16, color: "black", lineHeight: 1.45 }}>{msg.text}</p>}
                {msg.videoUrl && <div style={{ borderRadius: 14, overflow: "hidden", background: "#202020", flex: 1 }}><video src={msg.videoUrl} controls style={{ width: "100%", display: "block" }} /></div>}
                {msg.file?.type === "image" && <div style={{ borderRadius: 14, overflow: "hidden", maxHeight: 180 }}><img src={msg.file.url} style={{ width: "100%", display: "block", objectFit: "cover" }} alt={msg.file.name} /></div>}
                {msg.file?.type === "file" && <a href={msg.file.url} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "white", borderRadius: 10, padding: "8px 12px", border: "1px solid #e0d9d0", textDecoration: "none", fontSize: 13, color: "#192025" }}>{msg.file.name}</a>}
                <div style={{ display: "flex", justifyContent: "flex-end", gap: 9, padding: 5 }}>
                  <Smile size={16} color="#818181" style={{ cursor: "pointer" }} />
                  <MoreHorizontal size={16} color="#818181" style={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Chat input bar */}
      <div style={{ background: "rgba(244,239,231,0.7)", borderTop: "0.5px solid #d4cfcd", minHeight: 62, padding: "6px 4px 6px 0", display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", background: "rgba(192,182,179,0.5)", borderRadius: 100, height: 46, padding: 4 }}>
          <button style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Paperclip size={16} color="#192025" />
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(192,182,179,0.5)", borderRadius: 100, height: 46, minWidth: 48, padding: "4px 8px", fontSize: 14, fontWeight: 600, color: "#192025", fontFamily: DM }}>GIF</div>
        <div style={{ flex: 1, padding: "0 8px" }}>
          <div style={{ display: "flex", alignItems: "center", background: "white", border: "0.5px solid #d4cfcd", borderRadius: 24, padding: "10px 20px", height: 47, fontSize: 16, color: "#a19792", fontFamily: DM }}>
            Type a message...
          </div>
        </div>
        <button style={{ width: 46, height: 46, borderRadius: "50%", background: "#202020", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}>
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<"thankyou" | "chat">("thankyou");
  const [chatMessages, setChatMessages] = useState<SentMessage[]>([]);

  return (
    <div style={{ width: "100%", height: "100%", background: "#f4efe7", position: "relative", overflow: "hidden", fontFamily: DM }}>
      {/* Nav (only on thank you screen) */}
      {screen === "thankyou" && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}>
          <NavBar onMailClick={() => setScreen("chat")} />
        </div>
      )}

      {/* Thank you screen */}
      {screen === "thankyou" && (
        <div style={{ position: "absolute", inset: 0, paddingTop: 62, display: "flex", flexDirection: "column" }}>
          <ThankYouScreen onShowChat={(msgs) => { setChatMessages(msgs); setScreen("chat"); }} />
        </div>
      )}

      {/* Chat screen */}
      {screen === "chat" && (
        <ChatScreen sentMessages={chatMessages} onBack={() => setScreen("thankyou")} />
      )}
    </div>
  );
}
