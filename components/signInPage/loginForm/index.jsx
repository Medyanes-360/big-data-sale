import Input from "@/globalElements/FormikForm/Input";
import Icons from "@/public/assets/icons/Icons";
import { Form, Formik } from "formik";
import React from "react";

function LoginForm() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center h-full">
      <div className="w-[588px] h-[475px]">
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
            <Form className="flex flex-col items-center  rounded shadow-supportCard rounded-3xl gap-10 p-8">
              <h1 className="font-Inter font-bold text-2xl text-tertiary-900">
                Sign in
              </h1>
              <div className="flex flex-col w-full relative">
                <Input
                  name="email"
                  className="w-full h-[56px] rounded-lg flex gap-2 border border-loginInputBorder placeholder:text-tertiary-900 py-4 px-[14px]"
                  labelClassName="font-Inter font-normal text-xs text-raven-700 absolute top-[-8px] left-[10px] bg-white-default px-1"
                  errorClassName="form-error"
                  type="email"
                  placeholder="demo@minimals.cc"
                  label="Email address"
                />
              </div>
              <div className="flex flex-col justify-center w-full relative">
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
                />
              </div>
              <a
                href="#"
                className="w-full font-Inter font-normal text-sm text-right text-tertiary-900 underline  underline-offset-1"
              >
                Forgot Password?
              </a>
              <button
                type="submit"
                disabled={!(props.isValid && props.dirty)}
                className="flex items-center cursor-pointer w-full h-[44px] lg:h-[56px] lg:w-[312px] justify-center bg-tertiary400 px-8 rounded-[8px] gap-[12px] text-white-default font-Inter font-medium text-[17px] leading-[56px]"
              >
                Login
              </button>

              <a
                href="#"
                className="flex items-center gap-x-1 font-Inter font-medium text-sm text-gray700"
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
