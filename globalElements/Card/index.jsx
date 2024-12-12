import ButtonComponent from "../Button";
import CardListContent from "../../components/home/sectionPackages/sectionCardListContent";
import Icons from "@/public/assets/icons/Icons";

const CardBrand = ({ children }) => (
  <div className="text-white custom-shape absolute  top-0 left-[-10px]">
    {children}
  </div>
);

const CardRecommend = () => (
  <div className="absolute text-white font-lexend -top-11 left-1/2 -translate-x-1/2 text-center font-bold rounded-tl-[11.43px] rounded-tr-[11.43px] py-[8.57px] px-[15.24px] bg-[#5AC519]">
    RECOMMENDED
  </div>
);

const Card = ({
  packageName,
  totalData,
  price,
  frequency,
  recommendBorder,
}) => (
  <div
    className={`bg-card-background px-[11px] my-[40px] relative border-1 rounded-[25px] ${
      recommendBorder ? "border-t-4 border-[#5AC519]" : ""
    } w-[295px] md:w-[300px] h-[571px]`}
  >
    {recommendBorder && <CardRecommend />}

    <CardBrand>
      <span
        className="text-[15.24px] text-white font-Inter font-medium"
        style={{ color: "white" }}
      >
        {packageName}
      </span>
    </CardBrand>

    <div className="text-cardTextColor1 mb-[40px] mt-[22px] font-lexend font-medium text-[15.25px] leading-[22.86px]">
      Toplam Veri: {totalData}
    </div>

    <div className="mx-[11.43px] mb-[11px] flex items-center space-x-3">
      <span className="font-bold text-tertiary-800 text-[30.48px] leading-[51px]">
        {price}
      </span>
      <span className="font-medium text-[13.3px] leading-[20px] font-Inter">
        | {frequency}
      </span>
    </div>

    <ButtonComponent className="!py-0 flex items-center gap-[11px] !px-[30px] w-full bg-tertiary-500 rounded-[9.52px]">
      <span className="text-card-textColor text-[16.9px] font-lexend leading-[43px] font-medium">
        Get Started
      </span>
      <Icons.ArrowRight color="#FFF" />
    </ButtonComponent>

    <div className="my-[11.45px] bg-card-cardLineBackground h-[0.5px] w-full"></div>

    <CardListContent />
  </div>
);

Card.Brand = CardBrand;
Card.Recommend = CardRecommend;

export default Card;
