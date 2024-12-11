import Logo from "@/globalElements/Logo";

const FooterExplanation = () => {
  return (
    <div className="flex flex-col">
      <Logo
        white={true}
        className="w-[110px] h-[43px] text-[16px] leading-[24px] "
      />
      <p className="w-[250px] text-customPink font-lexend mt-6">
        Veri hizmetlerinde lider konumdayız. İşletmenizi büyütmek için en güncel
        ve doğrulanmış verileri sunuyoruz. Sektörünüze uygun çözümlerle, hedef
        kitlenize kolayca ulaşmanıza yardımcı oluyoruz
      </p>
      
    </div>
  );
};
export default FooterExplanation;
