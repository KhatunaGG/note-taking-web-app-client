import React from "react";
import { Archives, Delete } from "../../__atoms";

const Aside = () => {
  return (
    // <div className="min-h-screen w-[22.08%]  pl-4 py-[20px] bg-white border-l border-l-[#CACFD8] flex flex-col gap-3">
    <div className="hidden min-h-screen w-[22.08%]  pl-4 py-[20px] bg-white border-l border-l-[#CACFD8] lg:flex flex-col gap-3">
      <button className="w-full rounded-lg border border-[#CACFD8] text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
        <Archives />
        <p className="text-sm text-[#0E121B] font-medium">Archive Note</p>
      </button>
      <button className="w-full rounded-lg border border-[#CACFD8] text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
        <Delete />
        <p className="text-sm text-[#0E121B] font-medium">Delete Note</p>
      </button>
    </div>
  );
};

export default Aside;
