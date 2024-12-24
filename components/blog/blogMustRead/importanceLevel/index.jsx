import React from 'react';

const ImportanceLevel = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      {/* İlk Eleman */}
      <div className="flex items-center gap-6">
        <div className="w-10 h-10 rounded-lg bg-purple-500"></div>
        <span className="text-[18px] font-medium leading-6 tracking-[-0.015em] text-left text-[#2F1566] font-lexend">
          Mutlaka okumalısınız
        </span>
      </div>
      {/* İkinci Eleman */}
      <div className="flex items-center gap-6">
        <div
          className="w-10 h-10 rounded-lg"
          style={{
            background: 'linear-gradient(97.83deg, #FFB31D 3.46%, #FF3784 106.92%)',
          }}
        ></div>
        <span className="text-[18px] font-medium leading-6 tracking-[-0.015em] text-left text-[#2F1566] font-lexend">
          En beğenilenler
        </span>
      </div>
      {/* Üçüncü Eleman */}
      <div className="flex items-center gap-6">
        <div className="w-10 h-10 rounded-lg bg-purple-800"></div>
        <span className="text-[18px] font-medium leading-6 tracking-[-0.015em] text-left text-[#2F1566] font-lexend">
          En son eklenenler
        </span>
      </div>
    </div>
  );
};

export default ImportanceLevel;
