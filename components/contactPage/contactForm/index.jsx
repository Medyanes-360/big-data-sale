"use client";
import PageContainer from "@/containers/PageContainers";
import Icons from "@/public/assets/icons/Icons";
import React from "react";
import { Formik, Form } from "formik";
import Input from "@/globalElements/FormikForm/Input";
import Textarea from "@/globalElements/FormikForm/TextArea";
import { object, string, date } from "yup";
import FileUpload from "@/globalElements/FormikForm/FileUpload";

export let contactSchema = object({
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
  company: string()
    .min(5, "Minimum 5 Karakter")
    .max(30, "Maximum 30 Karakter")
    .required("Company Name zorunlu"),
  message: string()
    .min(10, "Minimum 10 karakter")
    .max(50, "Maximum 50 karakter")
    .required("Message zorunlu"),
  createdOn: date().default(() => new Date()),
});

/*form-input - form-label - form-error tailwind pluginde hazır classlar ekstra özellik değiştirmek istersen kaldırıp classname props olarak geçebilirsin direk */
function ContactForm() {
  return (
    <>
      <div className="flex flex-col w-full items-center bg-white gap-[20px] rounded-[24px] px-3 md:p-[48px] lg:w-[1200px] md:gap-[48px] shadow-concatForm">
        <div className="font-Inter font-semibold text-base lg:text-4xl text-deepAbyss">
          contact{" "}
          <span className="text-tertiary400 text-base lg:text-4xl font-Inter font-semibold">
            us
          </span>
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            company: "",
            message: "",
          }}
          validationSchema={contactSchema}
          onSubmit={(values, actions) => {
            console.log(values, actions, "onSubmit kısmı burası");
            actions.resetForm();
          }}
        >
          {(props) => (
            <Form className="w-full flex flex-col gap-[25px]">
              <div className="flex justify-between w-full gap-[20px]">
                <div className="flex flex-col flex-1 gap-[6px] relative">
                  <Input
                    name="name"
                    className="form-input"
                    labelClassName="form-label"
                    errorClassName="form-error"
                    type="text"
                    placeholder="Full Name"
                    label="Name"
                  />
                </div>
                <div className="flex flex-col flex-1 gap-[6px] relative">
                  <Input
                    name="email"
                    className="form-input"
                    labelClassName="form-label"
                    errorClassName="form-error"
                    type="email"
                    label="Email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px] relative">
                <Input
                  name="company"
                  type="text"
                  className="outline-0 h-[47px] border border-lightMist rounded-[5px] px-4"
                  labelClassName="form-label"
                  errorClassName="form-error"
                  label="Company Name"
                  placeholder="Brand/Company/Product Name"
                />
              </div>
              <div className="flex flex-col gap-[6px] relative">
                <Textarea
                  name="message"
                  type="text"
                  className="outline-0 p-2 resize-none text-start h-[102px] border  border-lightMist rounded-[5px] px-4"
                  labelClassName="form-label"
                  errorClassName="form-error"
                  label="Message"
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="w-full flex justify-between items-center bg-attachFile-gradient h-[68px] rounded-[7px] px-4">
                <h1 className="font-lexend font-medium text-lg text-gray-700">
                  Attach File
                </h1>
                <FileUpload
                  className="file-btn transition-all duration-500"
                  errorClassName="form-error"
                  name="file"
                />
              </div>
              <button
                type="submit"
                style={{
                  opacity: !(props.isValid && props.dirty) ? 0.5 : 1,
                  cursor: !(props.isValid && props.dirty)
                    ? "not-allowed"
                    : "pointer",
                }}
                disabled={!(props.isValid && props.dirty)}
                className="flex items-center w-full h-[44px] lg:h-[56px] lg:w-[312px] justify-center ml-auto bg-tertiary400 px-8 rounded-[7px] gap-[12px] text-white-default font-Inter font-medium text-[17px] leading-[56px]"
              >
                Send message <Icons.ArrowRight className="text-white-default" />
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default ContactForm;
