import ButtonComponent from "@/globalElements/Button";
import Input from "@/globalElements/FormikForm/Input";
import Icons from "@/public/assets/icons/Icons";
import { Form, Formik } from "formik";
import { object, string, date } from "yup";

export let formSchema = object({
  name: string()
    .min(5, "Minimum 5 harften oluşur.")
    .max(20, "Maximum 20 karakter!")
    .required("Name zorunlu"),
  email: string()
    .email()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Lütfen doğru bir Email Adresi Giriniz"
    )
    .required("Email Zorunlu"),
  createdOn: date().default(() => new Date()),
});

const FormArea = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl lg:rounded-3xl bg-custom-gradient">
      <div className="flex flex-col py-4 xl:py-8 px-3 xl:px-9 max-w-full gap-8">
        <h1 className="text-center font-Inter font-semibold md:font-bold text-base md:text-xl lg:text-2xl text-tertiary400">
          Yeni İçeriklerimiz
          <span className="text-black"> için Bizi Takip Edin</span>
        </h1>

        <div className="flex flex-col justify-center items-start">
          <Formik
            initialValues={{
              name: "",
              email: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              console.log(values, actions, "onSubmit kısmı burası");
            }}
          >
            {(props) => (
              <Form action="" className="flex flex-col w-full gap-3">
                <Input
                  name="name"
                  label="Ad"
                  placeholder="Ad & surname"
                  labelClassName="block text-sm text-tertiary-800 md:font-semibold font-medium"
                  className="bg-white-default outline-0 w-full rounded-md border-[1px] border-[#E6E8EC] p-3 max-h-[47px]"
                />
                <Input
                  name="email"
                  label="E-posta"
                  placeholder="eposta"
                  labelClassName="block text-sm text-tertiary-800 md:font-semibold font-medium"
                  className="bg-white-default outline-0 w-full rounded-md border-[1px] border-[#E6E8EC] p-3 max-h-[47px]"
                />
                <ButtonComponent
                  type="submit"
                  style={{
                    cursor: !(props.isValid && props.dirty)
                      ? "not-allowed"
                      : "pointer",
                  }}
                  disabled={!(props.isValid && props.dirty)}
                  className="bg-tertiary-900 gap-3 rounded-[7px] max-h-[44px] md:max-h-[56px] w-full text-white-default font-Inter font-medium text-[17px]"
                >
                  <span>Bize Katıl</span>
                  <Icons.ArrowRight className="text-white-default" />
                </ButtonComponent>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FormArea;
