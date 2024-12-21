import PageContainer from "@/containers/PageContainers";
import Icons from "@/public/assets/icons/Icons";
import React from "react";

function ConcatPage() {
  return (
    <PageContainer className="mb-4 md:!px-0 ">
      <div class="flex flex-col items-center bg-white gap-[20px] rounded-[24px] px-3 md:p-[48px] md:gap-[48px] shadow-concatForm">
        <div className="font-Inter font-semibold text-base lg:text-4xl text-deepAbyss">
          concat{" "}
          <span className="text-tertiary400 text-base lg:text-4xl font-Inter font-semibold">
            us
          </span>
        </div>

        <form action="#" className="w-full flex flex-col gap-[20px]">
          <div className="flex gap-[20px]">
            <div className="flex flex-col flex-1 gap-[6px]">
              <label
                htmlFor="name"
                className="font-Inter font-medium text-sm text-midnight"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Full name"
                id="name"
                className="outline-0 h-[47px]  w-full lg:w-full  border border-1 border-lightMist rounded-[5px] px-2"
              />
            </div>
            <div className="flex flex-col  flex-1 gap-[6px]">
              <label
                htmlFor="email"
                className="font-Inter font-medium text-sm text-midnight"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeHolder="Email adress"
                className="outline-0 h-[47px] w-full lg:w-full border border-1 border-lightMist rounded-[5px] px-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="company"
              className="font-Inter font-medium text-sm text-midnight"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              className="outline-0 h-[47px] border border-1 border-lightMist rounded-[5px] px-2"
              placeholder="Brand/Company/Product Name"
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="message"
              className="font-Inter font-medium text-sm text-midnight"
            >
              Message
            </label>
            <textarea
              type="text"
              id="message"
              className="outline-0 p-2 resize-none text-start h-[102px] border border-1 border-lightMist rounded-[5px] px-2"
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
        </form>
        <button className="flex items-center w-full h-[44px] lg:h-[56px] lg:w-[312px] justify-center ml-auto bg-tertiary400 px-8 rounded-[7px] gap-[12px] text-white-default font-Inter font-medium text-[17px] leading-[56px]">
          Send message <Icons.ArrowRight className="text-white-default" />
        </button>
      </div>
    </PageContainer>
  );
}

export default ConcatPage;
