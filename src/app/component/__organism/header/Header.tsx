"use client";
import { useEffect } from "react";
import { Logo, Setting } from "../../__atoms";
import Search from "../../__atoms/search/Search";
import { useSignInStore } from "@/app/store/sign-in.store";
import { useUtilities } from "@/app/store/utilities.store";
import { usePathname } from "next/navigation";

const Header = () => {
  const { accessToken } = useSignInStore();
  const { selectedTags } = useUtilities();
  const path = usePathname();
  const isArchivedPage = path.includes("archive");


  useEffect(() => {
    (async () => {
      await useSignInStore.getState().initialize();
    })();
  }, []);

  if (!accessToken) return null;
  return (
    <div className="bg-[#F3F5F8] lg:bg-white px-8 w-full h-[54px] md:h-[74px] lg:h-[81px]  flex items-center justify-between lg:px-[2.78%]  lg:border-b lg:border-l lg:border-[#E0E4EA]">
      <h1 className="font-bold text-[24px] text-[#0E121B] hidden lg:block">
        {isArchivedPage
          ? "Archived Notes"
          : selectedTags
          ? `Notes Tagged: ${selectedTags}`
          : "All Notes"}
      </h1>
      <div className="w-full h-full flex items-center justify-start lg:hidden">
        <Logo />
      </div>
      <div className="w-[30.68%] hidden lg:flex">
        <div className="w-full flex items-center gap-4">
          <div className=" w-[83.78%] relative">
            <input
              type="text"
              className="py-3 border border-[#CACFD8] rounded-lg  w-full outline-none pl-10 pr-2 text-[#717784] text-sm font-normal"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[20px] h-[21px] ">
              <Search width={"20px"} height={"21px"} />
            </div>
          </div>
          <div className="w-[11.73%] flex items-center justify-center">
            <Setting width={"24px"} height={"24px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;