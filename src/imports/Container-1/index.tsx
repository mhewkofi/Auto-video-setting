function TextMargin() {
  return (
    <div className="relative shrink-0" data-name="Text (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d4cfcd] text-[22px] tracking-[0.3691px] whitespace-nowrap">arrow-up-from-bracket</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[18px] relative shrink-0 w-[200.203px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-0 text-[#848a95] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 9' }}>
        or click to browse · max 30 seconds
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#192025] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14' }}>
          Drop your video here
        </p>
        <Paragraph />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#f9f6f2] h-[150px] relative rounded-[8px] shrink-0 w-full" data-name="Label">
      <div aria-hidden className="absolute border border-[#c8bfb6] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center p-px relative size-full">
        <TextMargin />
        <Frame />
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