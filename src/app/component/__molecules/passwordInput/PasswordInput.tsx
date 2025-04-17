import React from "react";
import { Eye, InfoCircle } from "../../__atoms";

const PasswordInput = () => {
  return (
    <div className="w-full flex flex-col gap-[6px]">
      <label className="text-sm font-medium text-darkest">Email Address</label>
      <div className="w-full relative">
        <input
          type="text"
          className="w-full border border-[#CACFD8] rounded-lg p-3 outline-none text-neutral"
          placeholder=""
        />
        <Eye />
      </div>
      <div className="flex items-center gap-2">
        <InfoCircle />
        <p className="text-[#525866] font-normal text-xs">At least 8 characters</p>
      </div>
    </div>
  );
};

export default PasswordInput;
