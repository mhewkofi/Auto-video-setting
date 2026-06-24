function TextMargin() {
  return (
    <div className="relative shrink-0" data-name="Text (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[54px] not-italic relative shrink-0 text-[#d4cfcd] text-[36px] tracking-[0.3691px] whitespace-nowrap">video</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#192025] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Drop your video here
        </p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[200.203px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-0 text-[#848a95] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
          or click to browse · max 30 seconds
        </p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[168px] relative rounded-[8px] shrink-0 w-full" data-name="Label">
      <div aria-hidden className="absolute border border-[#c8bfb6] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-px relative size-full">
        <TextMargin />
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[13px] relative rounded-[10px] size-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e8dfd5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Label />
    </div>
  );
}