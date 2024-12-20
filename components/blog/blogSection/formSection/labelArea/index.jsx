const LabelArea = () => {
  const label = [
    "Motivasyon",
    "VeriOdaklıPazarlama",
    "DijitalPazarlama",
    "Verimlilik",
    "ZamanYönetimi",
    "DoğrulanmışVeri",
    "ZamanıİyiKullan",
    "VeriOdaklıPazarlama",
    "İşBüyütme",
    "Motivasyon",
  ];
  return (
    <div className="flex flex-col rounded-md gap-[10px] p-[10px]">
      <div className="text-tertiary-800 font-medium text-[18px] md:text-2xl flex items-start">
        Daha Fazla Kaynağı Keşfedin
      </div>

      <div className="flex flex-wrap gap-2 md:gap-5">
        {label?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center bg-tertiary-50 rounded-[5.08px] md:rounded-[7px] px-4 gap-2 md:px-4 md:gap-3 h-[41px] md:h-[56px] w-fit"
            >
              <span className="text-tertiary-400 text-xs md:text-lg">
                #{item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LabelArea;
