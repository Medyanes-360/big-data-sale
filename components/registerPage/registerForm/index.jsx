"use client";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Input from "@/globalElements/FormikForm/Input";
import ButtonComponent from "@/globalElements/Button";
import Icons from "@/public/assets/icons/Icons";
import Link from "next/link";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  lastname: Yup.string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters long"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .min(10, "Phone number should be at least 10 digits"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

const RegisterForm = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-full z-40  md:max-w-[600px]  m-auto flex flex-col gap-3 bg-white-default md:gap-10 shadow-blog rounded-3xl p-3 md:p-8">
      {/* header */}
      <h2 className="font-Inter font-bold text-2xl text-terirary-900 text-center">
        Sign up
      </h2>
      {/* formaAlanı */}
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          phone: "",
          password: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          console.log(values, actions, "onSubmit kısmı burası");
        }}
      >
        {({ values, touched, errors, setFieldValue, isValid, dirty }) => (
          <Form action="" className="space-y-3">
            <div className="md:grid grid-cols-2 gap-5  ">
              <div className="">
                <Input
                  name="name"
                  label="First name"
                  placeholder="First name"
                  labelClassName="text-gray-600 text-xs font-Inter font-normal"
                  errorClassName="text-red-600 text-xs"
                  className={
                    "bg-white-default outline-0 w-full rounded-md border-[1px] border-[#E6E8EC] p-3 max-h-[47px] "
                  }
                />
              </div>
              <div className="">
                <Input
                  name="lastname"
                  label="Last name"
                  placeholder="Last name"
                  labelClassName="text-gray-600 text-xs font-Inter font-normal"
                  errorClassName="text-red-600 text-xs"
                  className={
                    "bg-white-default outline-0 w-full rounded-md border-[1px] border-[#E6E8EC] p-3 max-h-[47px]"
                  }
                />
              </div>
            </div>
            <div className="md:grid grid-cols-2 gap-5 space-y-2">
              <div>
                <Input
                  name="email"
                  label="Email"
                  placeholder="email"
                  labelClassName="text-gray-600 text-xs font-Inter font-normal "
                  errorClassName="text-red-600 text-xs"
                  className={
                    "bg-white-default outline-0 w-full rounded-md border-[1px] border-[#E6E8EC] p-3 max-h-[47px]"
                  }
                />
              </div>

              <div
                className={`flex w-full max-h-fit flex-col rounded-md ${
                  touched.phone && errors.phone ? "border-red-600 border" : ""
                }`}
              >
                <label className="text-gray-600 text-xs font-Inter font-normal">
                  Phone number
                </label>
                <Field
                  component={PhoneInput}
                  name="phone"
                  defaultCountry="TR"
                  placeholder="201-555-0123"
                  value={values.phone}
                  onChange={(value) => setFieldValue("phone", value)}
                  className="bg-white-default outline-0 w-full rounded-md border-[1px] border-[#E6E8EC] p-3 max-h-[47px]"
                />
              </div>
            </div>
            <div className="relative">
              <div>
                <Input
                  name="password"
                  label="Password"
                  type={visible ? "text" : "password"}
                  placeholder="8+ characters"
                  labelClassName="text-gray-600 text-xs font-Inter font-normal"
                  errorClassName="text-red-600 text-xs"
                  className="outline-0 w-full rounded-md border-[1px] border-[#E6E8EC] p-3 max-h-[56px]"
                  right={() => (
                    <button
                      type="button"
                      onClick={() => setVisible(!visible)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {visible ? <Icons.EyeIcon /> : <Icons.EyeOffIcon />}
                    </button>
                  )}
                />
              </div>
            </div>
            <div className="text-right">
              <Link
                href="#"
                className="text-sm text-tertiary-900 underline font-normal font-Inter"
              >
                Forgot password?
              </Link>
            </div>
            <div className="items-center justify-center flex">
              <ButtonComponent
                type="submit"
                style={{
                  cursor: !(isValid && dirty) ? "not-allowed" : "pointer",
                }}
                disabled={!(isValid && dirty)}
                className="bg-tertiary-400 gap-2 rounded-lg max-h-[48px] md:max-w-[312px] w-full text-white-default font-Inter font-bold text-base"
              >
                <span>Create account</span>
              </ButtonComponent>
            </div>
          </Form>
        )}
      </Formik>
      {/* linkAlanı */}
      <div className="flex flex-col gap-5">
        <p className="text-center text-gray-600 text-xs font-Inter font-medium">
          By signing up you agree to Snov.io
          <a href="#" className="text-tertiary-400">
            {" "}
            Terms and Conditions{" "}
          </a>
          and
          <a href="#" className="text-tertiary-400">
            {" "}
            Privacy Policy
          </a>
        </p>
        <p className="text-center text-gray-600 text-sm font-Inter font-medium">
          New user?
          <a href="#" className="text-tertiary-400">
            {" "}
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
