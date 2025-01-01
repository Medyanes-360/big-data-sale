import Logo from "@/globalElements/Logo";
import React from "react";

function ChooseUs() {
  return (
    <div className="flex flex-col justify-center items-center w-[300px] h-[500px] rounded-xl bg-lavanta">
      <Logo
        white={false}
        border={false}
        className="w-[110px] h-[44px] mb-6 border-0"
      />
      <h2 className="text-lg font-medium font-lexend text-tertiary900">
        Bizi Tercih Edenler
      </h2>

      <div className="card">
        <h2>card</h2>
      </div>
    </div>
  );
}

export default ChooseUs;
