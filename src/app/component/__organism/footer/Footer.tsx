import React from "react";

const Footer = () => {
  return (
    <div className="w-full ">
      <div className="w-full pt-4  flex gap-4 items-center border-t border-t-[#E0E4EA]">
        <button className="bg-[#335CFF] text-sm text-white py-3 px-4 rounded-lg">
          Save Note
        </button>
        <button className="bg-[#F3F5F8] text-sm text-[#525866] py-3 px-4 rounded-lg">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Footer;
