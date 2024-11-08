import Logo from "@/globalElements/Logo";
import Icons from "@/public/assets/icons/Icons";

import Link from "next/link";
const FooterExplanation = () => {
  return (
    <div>
      <Logo
        white={true}
        className="w-[110px] h-[43px] text-[16px] leading-[24px] "
      />
      <p className="max-w-[424px] text-customPink font-lexend mt-6">
        Veri hizmetlerinde lider konumdayız. İşletmenizi büyütmek için en güncel
        ve doğrulanmış verileri sunuyoruz. Sektörünüze uygun çözümlerle, hedef
        kitlenize kolayca ulaşmanıza yardımcı oluyoruz
      </p>
      <div className="ml-4 mt-10 flex items-center  space-x-10">
        <Link href="/">
          <Icons.Facebook />
        </Link>
        <Link href="/">
          <Icons.Linkedin />
        </Link>
        <Link href="/">
          <Icons.Instagram />
        </Link>
        <Link href="/">
          <Icons.Whatsapp />
        </Link>
      </div>
    </div>
  );
};
export default FooterExplanation;
