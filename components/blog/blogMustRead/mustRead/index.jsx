import React from 'react';

const MustRead = () => {
  return (
    <div className="flex flex-col h-auto px-[26px] py-[47px] gap-8 rounded-[32px] border-t-[8px] border-purple-500 shadow-lg">
      <h2 className="text-[18px] font-lexend font-medium leading-[24px] tracking-[-0.015em] text-gray-800 text-left">
        Mutlaka okumalısınız
      </h2>
      <ul className="flex flex-col gap-8">
        <li className="text-[18px] font-inter font-normal leading-[24px] tracking-[-0.015em] text-gray-700 text-left">
          <span className="text-purple-500 font-medium">1:</span> Veri Tabanlı Pazarlama Stratejileri ile Satışlarınızı Nasıl Artırabilirsiniz?
        </li>
        <li className="text-[18px] font-inter font-normal leading-[24px] tracking-[-0.015em] text-gray-700 text-left">
          <span className="text-purple-500 font-medium">2:</span> Hedef Kitlenizi Belirlemenin ve Doğru Kitleye Ulaşmanın Önemi
        </li>
        <li className="text-[18px] font-inter font-normal leading-[24px] tracking-[-0.015em] text-gray-700 text-left">
          <span className="text-purple-500 font-medium">3:</span> Başarıya Giden Yolda Verinin Gücü: Müşteri Dönüşümünü Artırmak
        </li>
        <li className="text-[18px] font-inter font-normal leading-[24px] tracking-[-0.015em] text-gray-700 text-left">
          <span className="text-purple-500 font-medium">4:</span> Veri Paketleri ile Küçük İşletmenizi Nasıl Hızla Büyütebilirsiniz?
        </li>
        <li className="text-[18px] font-inter font-normal leading-[24px] tracking-[-0.015em] text-gray-700 text-left">
          <span className="text-purple-500 font-medium">5:</span> Dijital Çağda Veri Güvenliği: İşletmeler İçin En İyi Uygulamalar
        </li>
      </ul>
    </div>
  );
};

export default MustRead;
