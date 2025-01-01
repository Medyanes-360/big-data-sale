import Logo from "@/globalElements/Logo";
import React from "react";

function ChooseUs() {
  return (
    <div className="flex flex-col justify-center items-center w-[480px] h-full rounded-xl bg-lavanta py-[30px]">
      <Logo
        white={false}
        border={false}
        className="w-[110px] h-[44px] mb-6 border-0"
      />
      <h3 className="text-lg font-medium font-lexend text-tertiary900">
        Bizi Tercih Edenler
      </h3>

      <div className="card bg-tertiary-900 w-[384px] signCard h-[475px] rounded-2xl	p-6 gap-2">
        <div>
          <img src="" alt="logo" />
          <div className="flex flex-col">
            <span className="text-white-default">Amanda</span>
            <span className="text-white-default">Amanda Test</span>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ChooseUs;
