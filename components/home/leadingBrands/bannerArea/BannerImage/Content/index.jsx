import React from "react";

const Content = () => {
  return (
    <div className="flex items-center flex-col gap-y-[24px] lg:gap-y-[35px] w-full lg:w-[calc(100% - 140px)] ">
      <h4 className="text-[14px] leading-5  md:text-2xl font-Inter  font-semibold text-blackHaze-50">
        Doğrulanmış İşletme Bilgileriyle Binlerce Potansiyel Müşteri Verilerine
        Erişin
      </h4>
      <p className="font-Inter font-normal  text-[12px] leading-[14px] sm:text-sm text-blackHaze-50">
        Güncel ve doğrulanmış işletme bilgileri sayesinde, potansiyel
        müşterilere hızlıca ulaşın. İşletmenizi büyütecek binlerce fırsat sizi
        bekliyor.”
      </p>
    </div>
  );
};

export default Content;
