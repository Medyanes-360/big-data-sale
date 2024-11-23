import React from "react";
import GetStartFree from "./get-free";
import InformationFrame from "./information-frame";

const Content = () => {
  return (
    <div className="flex flex-col gap-y-4 lg:gap-y-8">
      <GetStartFree />
      <InformationFrame />
    </div>
  );
};

export default Content;
