import Input from "@/globalElements/FormikForm/Input";
import Icons from "@/public/assets/icons/Icons";
import { Form, Formik } from "formik";
import React from "react";

function LoginForm() {
  return (
    <div className="flex flex-1 items-center justify-center w-full h-full">
      <div className="w-[343px] h-[475px] lg:w-[588px] relative">
        {/* Arka plan öğesini burada daha düşük z-index ile ayarlıyoruz */}
        <span className="bg-[#915DFF52] block blur-2xl md:blur-custom w-[87px] h-[87px] md:w-[256px] md:h-[256px] md:-top-32 md:-right-20 -top-20 -right-10 rounded-full absolute z-[-10]" />
        <span className="bg-[#FBF4F5] none md:block blur-custommobile md:blur-custom md:w-[231px] md:h-[231px] md:-bottom-32 md:-left-20 -bottom-20 -left-10 rounded-full absolute z-[-10]" />

        <Formik
          initialValues={{
            email: "",
            firstName: "red",
            lastName: "",
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form className="flex flex-col h-full w-full items-center justify-between rounded shadow-supportCard gap-2 p-3 rounded-3xl md:gap-10 md:p-8 z-50 bg-white-default">
              <h1 className="font-Inter font-bold text-2xl text-tertiary-900">
                Sign in
              </h1>
              <div className="flex flex-col w-full relative z-10">
                <Input
                  name="email"
                  className="w-full h-[56px] rounded-lg flex gap-2 border border-loginInputBorder placeholder:text-tertiary-900 py-4 px-[14px]"
                  labelClassName="font-Inter font-normal text-xs text-raven-700 absolute top-[-7px] left-[10px] bg-white-default px-1 z-10"
                  errorClassName="form-error"
                  type="email"
                  placeholder="demo@minimals.cc"
                  label="Email address"
                />
              </div>
              <div className="flex flex-col justify-center w-full relative z-10">
                <Input
                  name="password"
                  className="h-[56px] w-full rounded-lg flex border border-loginInputBorder gap-2 placeholder:text-raven-700 py-4 px-[14px]"
                  labelClassName="font-Inter font-normal text-xs text-raven-700"
                  errorClassName="form-error"
                  type="password"
                  placeholder="Password"
                  label=""
                />
                <Icons.EyeIcon
                  className="absolute top-[18px] right-[12px]"
                  color="#838E9E"
                  stroke="#fff"
                />
              </div>
              <a
                href="#"
                className="w-full font-Inter font-normal text-sm text-right text-tertiary-900 underline underline-offset-1"
              >
                Forgot Password?
              </a>
              <button
                type="submit"
                disabled={!(props.isValid && props.dirty)}
                className="flex items-center gap-2 cursor-pointer w-full h-[48px] lg:w-[312px] justify-center bg-tertiary400 px-[22px] py-[11px] rounded-[8px] text-white-default font-Inter font-medium text-sm"
              >
                Login
              </button>

              <a
                href="#"
                className="flex  items-end md:items-center gap-x-1 font-Inter font-medium text-sm text-gray700"
              >
                New user? <p className="text-tertiary400">Create an account</p>
              </a>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
