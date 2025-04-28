import React from "react";

const Note = () => {
  return (
    <div className="w-full border-t border-b border-t-[#E0E4EA] border-b-[#E0E4EA] p-2 flex flex-col gap-3">
      <h2 className="text-base font-semibold text-[#0E121B]">
        React Performance Optimization
      </h2>
      <div className="w-full flex flex-wrap gap-1">
        <div className="px-[6px] py-[2px] bg-[#E0E4EA] rounded-sm text-xs w-max">
          Dev
        </div>
        <div className="px-[6px] py-[2px] bg-[#E0E4EA] rounded-sm text-xs w-max">
          Personal
        </div>
      </div>
      <p className="text-[#2B303B] text-xs ">22 Sep 2024</p>
    </div>
  );
};

export default Note;
