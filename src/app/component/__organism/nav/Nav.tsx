"use client";
import { Archives, Home, Search, Setting, Tag } from "../../__atoms";

const Nav = () => {
  const isNav = true;

  return (
    // <div className="w-full h-[56px] md:h-[74px] lg:hidden px-4 md:px-8 py-3 flex items-center justify-between">
    <div
      style={{
        boxShadow: "0 -4px 6px 0 #F0F0F099",
      }}
      className="w-full h-[56px] md:h-[74px] lg:hidden   py-3 grid grid-cols-5 border-t border-t-[#E0E4EA] shadow-t-lg      mt-auto"
    >
      <button className="flex flex-col items-center justify-center gap-1 rounded-sm   bg-[#EBF1FF]">
        <Home width={"24px"} height={"24px"} />
        <p className="text-[#525866] text-xs hidden md:block">Home</p>
      </button>

      <button className="flex flex-col items-center justify-center gap-1 rounded-sm">
        <Search width={"24px"} height={"24px"} />
        <p className="text-[#525866] text-xs hidden md:block">Search</p>
      </button>

      <button className="flex flex-col items-center justify-center gap-1 rounded-sm">
        <Archives width={"24px"} height={"24px"} />
        <p className="text-[#525866] text-xs hidden md:block">Archives</p>
      </button>

      <button className="flex flex-col items-center justify-center gap-1 rounded-sm">
        <Tag width={"24px"} height={"24px"} />
        <p className="text-[#525866] text-xs hidden md:block">Tag</p>
      </button>

      <button className="flex flex-col items-center justify-center gap-1 rounded-sm">
        <Setting width={"24px"} height={"24px"} />
        <p className="text-[#525866] text-xs hidden md:block">Settings</p>
      </button>
    </div>
  );
};

export default Nav;
