import Input from "@/globalElements/FormikForm/Input";
import { Form, Formik } from "formik";
import React from "react";

function LoginForm() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center h-full">
      <h1>Login Form</h1>
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
          <Form className="flex flex-col items-center w-[588px] h-[475px] rounded shadow-supportCard rounded-3xl gap-10 p-8">
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
            <div className="flex flex-col w-full">
              <Input
                name="password"
                className="h-[56px] w-full rounded-lg flex border border-loginInputBorder gap-2 placeholder:text-raven-700 py-4 px-[14px]"
                labelClassName="font-Inter font-normal text-xs text-raven-700"
                errorClassName="form-error"
                type="password"
                placeholder="Password"
                label=""
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
