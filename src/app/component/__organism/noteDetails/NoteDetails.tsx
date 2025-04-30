"use client";
import Footer from "../footer/Footer";
import { Clock } from "../../__atoms";
import { TagInput, Textarea } from "../../__molecules";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

const NoteDetails = () => {
  // const pathname = usePathname();
  // const isNoteDetailsPage = pathname?.includes("/");


  return (
    <div className="w-full relative">
      <div className="hidden w-full px-6 pt-5 pb-4   h-full lg:flex flex-col gap-4     border-r border-r-[#CACFD8]">
        <div className="flex-grow w-full  border-[#E0E4EA] bg-white flex flex-col gap-4">
          <div className="w-ful flex flex-col gap-4">
            <h2 className="font-bold text-2xl text-[#0E121B]">
              React Performance Optimization
            </h2>
            <div className="flex flex-col gap-2">
              <TagInput />
              <div className="w-full flex items-center">
                <div className="flex gap-[6px] items-center w-[19.55%]">
                  <Clock />
                  <p className="w-[19.55%] text-sm text-[#2B303B] whitespace-nowrap">
                    Last edited
                  </p>
                </div>
                <div className="flex gap-[6px] items-center">
                  <p className="text-sm text-[#99A0AE]">Not yet saved</p>
                </div>
              </div>
            </div>
            <div className="border-t border-t-[#E0E4EA] pt-4 flex-grow">
              <Textarea />
              {/* <textarea
                className="w-full h-full resize-none outline-none text-sm text-[#232530] p-2"
                placeholder="Write your note here..."
              /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoteDetails;
