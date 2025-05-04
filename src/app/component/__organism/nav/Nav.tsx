"use client";
import Link from "next/link";
import { Archives, Home, Search, Setting, Tag } from "../../__atoms";

const Nav = () => {
  return (
    <div
      style={{
        boxShadow: "0 -4px 6px 0 #E0E4EA",
      }}
      className="w-full h-[56px] md:h-[74px] lg:hidden px-8  py-3 grid grid-cols-5 border-t border-t-[#E0E4EA] shadow-t-lg "
    >
      <Link href={"/note"} className="flex items-center justify-center px-[28px]">
        <button className="flex flex-col items-center justify-center gap-1 rounded-sm bg-[#EBF1FF] px-[28px] py-1">
          <Home width={"24px"} height={"24px"} />
          <p className="text-[#525866] text-xs hidden md:block">Home</p>
        </button>
      </Link>

      <Link href={""} className="flex items-center justify-center px-[28px]">
        <button className="flex flex-col items-center justify-center gap-1 rounded-sm px-[28px] py-1       bg-[#EBF1FF]">
          <Search width={"24px"} height={"24px"} />
          <p className="text-[#525866] text-xs hidden md:block">Search</p>
        </button>
      </Link>

      <Link href={""} className="flex items-center justify-center px-[28px]">
        <button className="flex flex-col items-center justify-center gap-1 rounded-sm px-[28px] py-1">
          <Archives width={"24px"} height={"24px"} />
          <p className="text-[#525866] text-xs hidden md:block">Archives</p>
        </button>
      </Link>

      <Link href={""} className="flex items-center justify-center px-[28px]">
        <button className="flex flex-col items-center justify-center gap-1 rounded-sm px-[28px] py-1">
          <Tag width={"24px"} height={"24px"} />
          <p className="text-[#525866] text-xs hidden md:block">Tag</p>
        </button>
      </Link>

      <Link href={""} className="flex items-center justify-center px-[28px]">
        <button className="flex flex-col items-center justify-center gap-1 rounded-sm px-[28px] py-1">
          <Setting width={"24px"} height={"24px"} />
          <p className="text-[#525866] text-xs hidden md:block">Settings</p>
        </button>
      </Link>
    </div>
  );
};

export default Nav;
