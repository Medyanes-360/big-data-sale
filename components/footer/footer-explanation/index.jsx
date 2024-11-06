import Logo from "@/globalElements/Logo";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
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
          <FacebookIcon />
        </Link>
        <Link href="/">
          <LinkedinIcon />
        </Link>
        <Link href="/">
          <InstagramIcon />
        </Link>
        <Link href="/">
          <WhatsappIcon />
        </Link>
      </div>
    </div>
  );
};
export default FooterExplanation;
