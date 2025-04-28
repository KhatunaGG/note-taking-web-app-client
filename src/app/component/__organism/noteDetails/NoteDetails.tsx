"use client";
import Footer from "../footer/Footer";
import { Clock, Tag } from "../../__atoms";
import { usePathname } from "next/navigation";

const NoteDetails = () => {
  const pathname = usePathname();
  const isNoteDetailsPage = pathname?.includes("/");

  return (
    // <div className="w-full px-6 py-5 border-[#E0E4EA] bg-white h-full flex flex-col gap-4">
    <div className="hidden w-full px-6 py-5 border-[#E0E4EA] bg-white h-full lg:flex flex-col gap-4">
      <div className="flex-grow w-full  border-[#E0E4EA] bg-white flex flex-col gap-4">
        <div className="w-ful flex flex-col gap-4">
          <h2 className="font-bold text-2xl text-[#0E121B]">
            React Performance Optimization
          </h2>

          <div className="flex flex-col gap-2">
            <div className="w-full flex items-center">
              <div className="flex gap-[6px] items-center w-[19.55%]">
                <Tag isNoteDetailsPage={true} />
                <p className="w-[19.55%] text-sm text-[#2B303B]">Tags</p>
              </div>
              <div className="flex gap-[6px] items-center">
                <p className="text-sm text-[#2B303B]">Dev,</p>
                <p className="text-sm text-[#2B303B]">React</p>
              </div>
            </div>

            <div className="w-full flex items-center">
              <div className="flex gap-[6px] items-center w-[19.55%]">
                <Clock />
                <p className="w-[19.55%] text-sm text-[#2B303B] whitespace-nowrap">
                  Last edited
                </p>
              </div>
              <div className="flex gap-[6px] items-center">
                <p className="text-sm text-[#2B303B]">29 Oct 2024</p>
              </div>
            </div>
          </div>

          <div className="border-t border-t-[#E0E4EA] pt-4 flex-grow">
            <textarea
              className="w-full h-full resize-none outline-none text-sm text-[#232530] p-2"
              placeholder="Write your note here..."
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NoteDetails;
