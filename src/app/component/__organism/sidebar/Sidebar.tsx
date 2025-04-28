import React from "react";
import { Archives, Home, Logo, Tag } from "../../__atoms";

const Sidebar = () => {
  return (
    // <div className="w-full min-h-screen bg-white py-3 px-4 flex flex-col gap-4">
    <div className="hidden w-full min-h-screen bg-white py-3 px-4 lg:flex flex-col gap-4">
      <div className="w-full py-4">
        <Logo />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <button className="w-full rounded-lg hover:bg-[#F3F5F8] duration-300 easy-in-out text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
            <Home />
            <p className="text-sm text-[#0E121B]">All Notes</p>
          </button>
          <button className="w-full rounded-lg hover:bg-[#F3F5F8] duration-300 easy-in-out text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
            <Archives />
            <p className="text-sm text-[#0E121B]">Archived Notes</p>
          </button>
        </div>

        <div className="border-t border-t-[#E0E4EA]">
          <button className="w-full rounded-lg hover:bg-[#F3F5F8] duration-300 easy-in-out text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
            <Tag />
            <p className="text-sm text-[#0E121B]">Dev</p>
          </button>
          <button className="w-full rounded-lg hover:bg-[#F3F5F8] duration-300 easy-in-out text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
            <Tag />
            <p className="text-sm text-[#0E121B]">Fitness</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
