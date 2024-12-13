import ButtonComponent from "../Button";
import CardListContent from "../../components/home/sectionPackages/sectionCardListContent";
import Icons from "@/public/assets/icons/Icons";

const CardBrand = ({ children, bgColor, partner }) => (
  <div
    className={`text-white  custom-shape absolute  top-0 left-[-10px] ${
      partner && "!w-[264px]"
    }`}
    style={{ backgroundColor: bgColor }}
  >
    {children}
  </div>
);

const CardRecommend = () => (
  <div
    className="absolute text-white border-b font-lexend -top-11 left-1/2 -translate-x-1/2 text-center font-normal rounded-tl-[11.43px] rounded-tr-[11.43px] py-[8.57px] px-[15.24px] bg-[#5AC519]"
    style={{ color: "white" }}
  >
    RECOMMENDED
  </div>
);

const Card = ({
  packageName,
  totalData,
  bgColor,
  price,
  frequency,
  recommendBorder,
  partner,
  items,
}) => (
  <div
    className={`bg-card-background px-[11px] my-[40px] relative border-1 rounded-[25px] ${
      recommendBorder ? "border-t-4 border-[#5AC519]" : ""
    } w-[295px] md:w-[300px] h-[571px]`}
  >
    {recommendBorder && <CardRecommend />}

    <CardBrand bgColor={bgColor} partner={partner}>
      <span
        className="text-[15.24px] text-white font-Inter font-medium"
        style={{ color: "white" }}
      >
        {packageName}
      </span>
    </CardBrand>

    {!partner && (
      <div className="text-tertiary-800 mb-[40px] mt-[22px] font-lexend font-medium text-[15.24px] leading-[22.86px]">
        Toplam Veri: {totalData}
      </div>
    )}

    <div className="mx-[11.43px] mb-[11px] flex items-center space-x-3">
      <span className="font-bold text-tertiary-800 text-[30.48px] leading-[51.43px]">
        {price}
      </span>
      <span className="font-Inter text-gray-700 font-medium text-[10.45px] leading-[15.67px]  md:text-[13.3px] md:leading-[20px]">
        {frequency && "|" + frequency}
      </span>
    </div>

    <ButtonComponent
      className={`!py-0 flex !items-center h-[46px] gap-[11px] !px-[30px] w-full bg-tertiary-500 rounded-[9.52px] ${
        partner && "mt-8"
      }`}
    >
      <span className="text-card-textColor font-medium text-[12.69px] leading-[41.8px] font-lexend md:text-[16.9px]  md:leading-[53.33px] ">
        Get Started
      </span>
      <Icons.ArrowRight className="text-white-default" />
    </ButtonComponent>

    <div className="my-[11.45px] bg-[#fff] h-[0.5px] w-full"></div>

    <CardListContent items={items} />
  </div>
);

Card.Brand = CardBrand;
Card.Recommend = CardRecommend;

export default Card;
