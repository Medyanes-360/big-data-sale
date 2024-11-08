// src/components/Card.jsx

const CardBrand = ({ className, children }) => {
  return (
    <div className="text-white custom-shape absolute top-0 left-[-10px]">
      {children}
    </div>
  );
};

const CardRecommend = () => {
  return (
    <div
      className={` absolute text-white font-lexend   -top-11 left-1/2 -translate-x-1/2 text-center font-bold rounded-tl-[11.43px] rounded-tr-[11.43px] py-[8.57px] px-[15.24px] bg-[#5AC519] `}
    >
      RECOMMENDED
    </div>
  );
};

const Card = ({
  children,
  className,
  width = "268px",
  height = "571px",
  recommendBorder,
}) => (
  <div
    className={`bg-cardBackground px-[11px] my-[40px]  relative   border-1 rounded-[25px]  ${
      width ? `w-[${width}]` : "w-[268px]"
    } ${height ? `h-[${height}]` : "h-[571px]"} ${className}
    ${recommendBorder ? "border-t-4 border-[#5AC519]" : " "}
    
    `}
  >
    <div className="flex flex-col justify-center">
      <div className="">{children}</div>
    </div>
  </div>
);

Card.Brand = CardBrand;
Card.Recommend = CardRecommend;

export default Card;
