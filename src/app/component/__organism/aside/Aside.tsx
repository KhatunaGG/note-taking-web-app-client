"use client";
import { Archives, Delete } from "../../__atoms";
import { useSignInStore } from "@/app/store/sign-in.store";
import { ArchivesButton, DeleteButton } from "../../__molecules";

const Aside = () => {
  const { accessToken } = useSignInStore();

  if(!accessToken) return null
  
  return (
    <div className="w-full  pl-4 py-[20px] flex flex-col gap-3">
      <ArchivesButton />
      {/* <button className="w-full rounded-lg border border-[#CACFD8] text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
        <Archives width={"20px"} height={"20px"} />
        <p className="text-sm text-[#0E121B] font-medium">Archive Note</p>
      </button> */}
      <DeleteButton />
      {/* <button className="w-full rounded-lg border border-[#CACFD8] text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
        <Delete width={"20px"} height={"20px"} />
        <p className="text-sm text-[#0E121B] font-medium">Delete Note</p>
      </button> */}
    </div>
  );
};

export default Aside;
