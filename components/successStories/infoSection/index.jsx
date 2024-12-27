export default function InfoSection({ name, sector, goal, solution, comment }) {
  return (
    <div className="flex flex-col gap-3 md:px-8 w-full md:ml-0 ml-4">
      {/* Başlık */}
      <h1 className="font-inter text-[24px] md:text-[32px] font-bold leading-8 md:leading-[54px] tracking-[-0.015em] text-left">
        {name}
      </h1>

      {/* Alt Bilgi */}
      <p className="font-inter text-[16px] md:text-[18px] font-normal leading-6 md:leading-[24px] tracking-[-0.015em] text-left">
        {sector}
      </p>

      {/* Detaylı Bilgi */}
      <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
        <p className="font-inter text-[16px] md:text-[18px] font-normal leading-6 md:leading-[24px] text-left">
          <strong className="text-tertiary-400 font-lexend font-medium leading-6">
            Sektör:
          </strong>{" "}
          {sector}
        </p>
        <p className="font-inter text-[16px] md:text-[18px] font-normal leading-6 md:leading-[24px] text-left">
          <strong className="text-tertiary-400 font-lexend font-medium leading-6">
            Hedef:
          </strong>{" "}
          {goal}
        </p>
        <p className="font-inter text-[16px] md:text-[18px] font-normal leading-6 md:leading-[24px] text-left">
          <strong className="text-tertiary-400 font-lexend font-medium leading-6">
            Çözüm:
          </strong>{" "}
          {solution}
        </p>
        <p className="font-inter text-[16px] md:text-[18px] font-normal leading-6 md:leading-[24px] text-left">
          <strong className="text-tertiary-400 font-lexend font-medium leading-6">
            Yorum:
          </strong>{" "}
          {comment}
        </p>
      </div>
    </div>
  );
}
