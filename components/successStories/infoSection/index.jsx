export default function InfoSection({ name, sector, goal, solution, comment }) {
    return (
      <div
        className="absolute flex flex-col gap-3 px-8"
        style={{
          top: "117px",
          left: "598px",
        }}
      >
        {/* Başlık */}
        <h1
          className="font-inter text-[32px] font-bold leading-[54px] tracking-[-0.015em] text-left"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          {name}
        </h1>
  
        {/* Alt Bilgi */}
        <p
          className="font-inter text-[18px] font-normal leading-[24px] tracking-[-0.015em] text-left"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          {sector}
        </p>
  
        {/* Detaylı Bilgi */}
        <div className="mt-6 space-y-4">
          <p className="font-inter text-[18px] font-normal leading-[24px] tracking-[-0.015em] text-left">
            <strong className="text-tertiary-400 font-lexend font-medium leading-6 text-[18px]">
              Sektör:
            </strong>{" "}
            {sector}
          </p>
          <p className="font-inter text-[18px] font-normal leading-[24px] tracking-[-0.015em] text-left">
            <strong className="text-tertiary-400 font-lexend font-medium leading-6 text-[18px]">
              Hedef:
            </strong>{" "}
            {goal}
          </p>
          <p className="font-inter text-[18px] font-normal leading-[24px] tracking-[-0.015em] text-left">
            <strong className="text-tertiary-400 font-lexend font-medium leading-6 text-[18px]">
              Çözüm:
            </strong>{" "}
            {solution}
          </p>
          <p className="font-inter text-[18px] font-normal leading-[24px] tracking-[-0.015em] text-left">
            <strong className="text-tertiary-400 font-lexend font-medium leading-6 text-[18px]">
              Yorum:
            </strong>{" "}
            {comment}
          </p>
        </div>
      </div>
    );
  }
  