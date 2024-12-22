"use client";
import PageContainer from "@/containers/PageContainers";
import Icons from "@/public/assets/icons/Icons";
import React from "react";
import { useField, Form, Formik } from "formik";
import Input from "@/globalElements/FormikForm/Input";

function Contact() {
  return (
    <PageContainer className="mb-4 md:!px-0 pt-5">
      <div className="flex flex-col items-center bg-white gap-[20px] rounded-[24px] px-3 md:p-[48px] md:gap-[48px] shadow-concatForm">
        <div className="font-Inter font-semibold text-base lg:text-4xl text-deepAbyss">
          concat{" "}
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
            file: "",
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form className="w-full flex flex-col gap-[20px]">
              <div className="flex gap-[20px]">
                <div className="flex flex-col flex-1 gap-[6px]">
                  <Input
                    name="fullname"
                    className="outline-0 h-[47px]  w-full lg:w-full  border border-1 border-lightMist rounded-[5px] px-2"
                    labelClassName="font-Inter font-medium text-sm text-midnight"
                    type="text"
                    placeholder="FullName"
                    label="First Name"
                  />
                </div>
                <div className="flex flex-col  flex-1 gap-[6px]">
                  <Input
                    name="email"
                    className="outline-0 h-[47px] w-full lg:w-full border border-1 border-lightMist rounded-[5px] px-2"
                    labelClassName="font-Inter font-medium text-sm text-midnight"
                    type="email"
                    label="Email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <Input
                  name="company"
                  type="text"
                  className="outline-0 h-[47px] border border-1 border-lightMist rounded-[5px] px-2"
                  labelClassName="font-Inter font-medium text-sm text-midnight"
                  label="Company Name"
                  placeholder="Brand/Company/Product Name"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <Input
                  name="message"
                  type="text"
                  className="outline-0 p-2 resize-none text-start h-[102px] border border-1 border-lightMist rounded-[5px] px-2"
                  labelClassName="font-Inter font-medium text-sm text-midnight"
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
                  className="flex items-center justify-center rounded-[5px] h-[43px] border border-1 border-lightMist bg-white-default pt-[11px] pr-[20px] pb-[11px] pl-[20px]"
                >
                  Upload File
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <button
          type="submit"
          className="flex items-center w-full h-[44px] lg:h-[56px] lg:w-[312px] justify-center ml-auto bg-tertiary400 px-8 rounded-[7px] gap-[12px] text-white-default font-Inter font-medium text-[17px] leading-[56px]"
        >
          Send message <Icons.ArrowRight className="text-white-default" />
        </button>
      </div>
    </PageContainer>
  );
}

export default Contact;
