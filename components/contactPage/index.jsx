"use client";
import PageContainer from "@/containers/PageContainers";
import Icons from "@/public/assets/icons/Icons";
import React from "react";
import { Formik, Form } from "formik";
import Input from "@/globalElements/FormikForm/Input";
import Textarea from "@/globalElements/FormikForm/TextArea";
import { object, string, date } from "yup";

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
function Contact() {
  return (
    <PageContainer className="mb-4 md:!px-0 pt-5">
      <div className="flex flex-col items-center bg-white gap-[20px] rounded-[24px] px-3 md:p-[48px] md:gap-[48px] shadow-concatForm">
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
          }}
        >
          {(props) => (
            <Form className="w-full flex flex-col gap-[30px]">
              <div className="flex gap-[20px]">
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
                <div className="flex flex-col  flex-1 gap-[6px] relative">
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
                <button
                  type="file"
                  className="flex items-center justify-center rounded-[5px] h-[43px] border  border-lightMist bg-white-default pt-[11px] pr-[20px] pb-[11px] pl-[20px]"
                >
                  Upload File
                </button>
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
    </PageContainer>
  );
}

export default Contact;
