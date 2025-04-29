import React from "react";

const Footer = () => {
  return (
  
      <div className="hidden w-full bg-slate-300 pt-4 pb-5 p-6 lg:flex gap-4 items-center border-t border-t-[#E0E4EA] absolute bottom-0 z-10 left-0 right-0 ">
        <button className="bg-[#335CFF] text-sm text-white py-3 px-4 rounded-lg">
          Save Note
        </button>
        <button className="bg-[#F3F5F8] text-sm text-[#525866] py-3 px-4 rounded-lg">
          Cancel
        </button>
      </div>
   
  );
};

export default Footer;
