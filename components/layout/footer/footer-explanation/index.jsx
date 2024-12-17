import Logo from "@/globalElements/Logo";

const FooterExplanation = () => {
  return (
    <div className="flex flex-col lg:items-start lg:text-left items-center px-2 md:px-0 w-full">
      <Logo
        white={true}
        className="w-[110px] h-[43px] text-[16px] leading-[24px] mb-6"
      />
      <p className="text-customPink font-lexend mt-6 lg:w-[250px] w-full">
        Veri hizmetlerinde lider konumdayız. İşletmenizi büyütmek için en güncel
        ve doğrulanmış verileri sunuyoruz. Sektörünüze uygun çözümlerle, hedef
        kitlenize kolayca ulaşmanıza yardımcı oluyoruz.
      </p>
    </div>
  );
};

export default FooterExplanation;
