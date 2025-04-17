import React from "react";

const EmailInput = () => {
  return (
    <div className="w-full flex flex-col gap-[6px]">
      <label className="text-sm font-medium text-darkest">Email Address</label>
      <input
        type="text"
        className="border border-[#CACFD8] rounded-lg p-3 outline-none text-neutral"
        placeholder="email@example.com"
      />
    </div>
  );
};

export default EmailInput;
