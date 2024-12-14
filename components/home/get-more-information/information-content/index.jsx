import React from "react";
import GetStartFree from "./get-free";
import InformationFrame from "./information-frame";

const Content = () => {
  return (
    <div className="flex flex-col gap-3 items-start  lg:gap-y-[72px]">
      <GetStartFree />
      <InformationFrame />
    </div>
  );
};

export default Content;
