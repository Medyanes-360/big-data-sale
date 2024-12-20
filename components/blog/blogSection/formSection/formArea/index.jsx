import ButtonComponent from "@/globalElements/Button";
import Input from "@/globalElements/Input";
import Icons from "@/public/assets/icons/Icons";

const FormArea = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl lg:rounded-3xl bg-custom-gradient">
      <div className="flex flex-col py-4 xl:py-8 px-3 xl:px-9 max-w-full gap-8">
        <h1 className="text-center font-Inter font-semibold md:font-bold text-base md:text-xl lg:text-2xl text-tertiary400">
          Yeni İçeriklerimiz
          <span className="text-black"> için Bizi Takip Edin</span>
        </h1>

        <div className="flex flex-col justify-center items-start">
          <form action="" className="flex flex-col w-full gap-5">
            <label
              htmlFor="name"
              className="block text-sm text-tertiary-800 md:font-semibold font-medium"
            >
              Ad
              <Input
                id="name"
                type="text"
                placeholder="Ad & surname"
                className="bg-white-default w-full rounded-md border-[1px] border-[#E6E8EC] p-3 max-h-[47px]"
              />
            </label>
            <label
              htmlFor="email"
              className="block text-sm text-tertiary-800 md:font-semibold font-medium"
            >
              E-posta
              <Input
                id="email"
                type="email"
                placeholder="eposta"
                className="bg-white-default w-full rounded-md border-[1px] border-[#E6E8EC] p-3 max-h-[47px]"
              />
            </label>
          </form>
        </div>
        <ButtonComponent className="bg-tertiary-900 gap-3 rounded-[7px] max-h-[44px] md:max-h-[56px] w-full text-white-default font-Inter font-medium text-[17px]">
          <span>Bize Katıl</span>
          <Icons.ArrowRight className="text-white-default" />
        </ButtonComponent>
      </div>
    </div>
  );
};

export default FormArea;
