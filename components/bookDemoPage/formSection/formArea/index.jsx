"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Input from "@/globalElements/FormikForm/Input";
import ButtonComponent from "@/globalElements/Button";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .min(10, "Phone number should be at least 10 digits"),
});

const FormArea = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          console.log(values, actions, "onSubmit kısmı burası");
        }}
      >
        {({
          values,
          touched,
          errors,
          setFieldValue,
          isValid,
          dirty,
        }) => (
          <Form action="" className="flex flex-col w-full gap-3 md:pb-32">
            <Input
              name="name"
              label="First name"
              placeholder="First name"
              labelClassName="text-gray-600 text-xs font-Inter font-normal"
              errorClassName="text-red-600"
              className={`bg-white-default outline-0 w-full rounded-md border-[1px] border-[#E6E8EC] p-3 max-h-[47px] ${
                touched.name && errors.name ? "border-red-600" : ""
              }`}
            />
            <Input
              name="email"
              label="Email"
              placeholder="email"
              labelClassName="text-gray-600 text-xs font-Inter font-normal "
              errorClassName="text-red-600"
              className={`bg-white-default outline-0 w-full rounded-md border-[1px] border-[#E6E8EC] p-3 max-h-[47px] ${
                touched.email && errors.email ? "border-red-600" : ""
              }`}
            />

            <div>
              <label className="text-gray-600 text-xs font-Inter font-normal">
                Phone number
              </label>
              <div
                className={`flex w-full h-fit flex-col rounded-md ${
                  touched.phone && errors.phone ? "border-red-600 border" : ""
                }`}
              >
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
              <div className="text-red-600 flex w-full mt-1 min-h-6">
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600"
                />
              </div>
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
                <span>Get a free demo</span>
              </ButtonComponent>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormArea;
