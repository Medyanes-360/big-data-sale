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
    <div className="flex flex-row justify-between items-center">
      {/* Sol Bilgi  */}
      <div className="absolute top-3 left-0 mb-1 items-center sm:relative flex px-4">
        <div className="w-[48px] h-[48px] rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={avatarSrc}
            alt="Avatar"
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
        <span className="ml-2 text-[14px] sm:text-[18px] font-normal">{sector}</span>
      </div>


      {/* Ok Butonları */}
      <div className="absolute bottom-[-32px] left-0 mb-2 sm:mb-6 sm:relative flex gap-3 px-4">
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
