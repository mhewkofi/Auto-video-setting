import svgPaths from "./svg-q2w0kmjt3n";

function Text() {
  return (
    <div className="h-[27px] relative shrink-0 w-[13.984px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#202020] text-[18px] top-[0.5px] tracking-[-0.4395px] whitespace-nowrap">▶</p>
    </div>
  );
}

function TextMargin() {
  return (
    <div className="relative shrink-0" data-name="Text (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[3px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <TextMargin />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#202020] h-[168px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#202020] h-[168.75px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[271px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#192025] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[22.86px]">All Supporter</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full">
      <div className="bg-[#edebea] content-stretch flex items-start p-[2px] relative rounded-[6px] shrink-0 size-[12px]" data-name="Component 7">
        <div aria-hidden className="absolute border border-[#8c8582] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
        <div className="relative shrink-0 size-[8px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #42D6AA)" id="Ellipse 34" r="4" />
          </svg>
        </div>
      </div>
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-[271px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#192025] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14' }}>
        <p className="leading-[22.86px]">Membership Tires</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[12px]" data-name="Component 7">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <circle cx="7" cy="7" fill="var(--fill-0, #EDEBEA)" id="Ellipse 32" r="6.5" stroke="var(--stroke-0, #8C8582)" />
          </svg>
        </div>
      </div>
      <Container5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[9px] items-start min-w-px relative">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[15px] relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#efedec] flex-[146_0_0] h-[44px] min-w-px relative rounded-[10px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#192025] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Re-upload
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#202020] flex-[146_0_0] h-[44px] min-w-px relative rounded-[10px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Add
        </p>
      </div>
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-[301px]" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d="M1.625 3.25H11.375" id="Vector" stroke="var(--stroke-0, #A19792)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p35588d00} id="Vector_2" stroke="var(--stroke-0, #A19792)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p1ca4b600} id="Vector_3" stroke="var(--stroke-0, #A19792)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M5.41667 5.95833V9.20833" id="Vector_4" stroke="var(--stroke-0, #A19792)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M7.58333 5.95833V9.20833" id="Vector_5" stroke="var(--stroke-0, #A19792)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon />
        <p className="[word-break:break-word] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#a19792] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          Remove
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[13px] relative rounded-[10px] size-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e8dfd5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container1 />
      <Frame />
      <ContainerMargin />
      <Container6 />
    </div>
  );
}