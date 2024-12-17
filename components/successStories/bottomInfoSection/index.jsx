import Image from "next/image";

export default function BottomInfoSection({
  avatarSrc,
  sector,
  onPrevious,
  onNext,
  disablePrevious,
  disableNext,
}) {
  return (
    <div className="absolute bottom-12 px-8 left-[50%] right-0 flex justify-between items-center">
      {/* Sector Bilgisi */}
      <div className="flex items-center">
        <Image
          src={avatarSrc}
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span
          className="font-inter text-[18px] font-normal leading-[24px] tracking-[-0.015em] text-left ml-2"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          {sector}
        </span>
      </div>

      {/* Next/Previous İşaretleri */}
      <div className="flex items-center gap-3">
        <button onClick={onPrevious} disabled={disablePrevious}>
          <Image
            src="/assets/icons/success-arrow-left.svg"
            alt="Previous"
            width={24}
            height={24}
          />
        </button>
        <button onClick={onNext} disabled={disableNext}>
          <Image
            src="/assets/icons/success-arrow-right.svg"
            alt="Next"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
