import React from "react";
import { Archives, Delete } from "../../__atoms";

const Aside = () => {
  return (
    // <div className="min-h-screen w-[24.82%]  pl-4 py-[20px] bg-white border-l border-l-[#CACFD8] flex flex-col gap-3">
    <div className="hidden min-h-screen lg:w-[24.82%] pl-4 py-[20px] lg:flex flex-col gap-3 pr-8         bg-yellow-300">
      <button className="w-full rounded-lg border border-[#CACFD8] text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
        <Archives width={"20px"} height={"20px"} />
        <p className="text-sm text-[#0E121B] font-medium">Archive Note</p>
      </button>
      <button className="w-full rounded-lg border border-[#CACFD8] text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
        <Delete width={"20px"} height={"20px"} />
        <p className="text-sm text-[#0E121B] font-medium">Delete Note</p>
      </button>
    </div>
  );
};

export default Aside;
