import React from "react";
import { Tag } from "../../__atoms";

const TagInput = () => {
  return (
    <div className="w-full flex items-center">
      <div className="flex gap-[6px] items-center w-[19.55%]">
        <Tag width={"16px"} height={"16px"} />
        <p className="w-[19.55%] text-sm text-[#2B303B]">Tags</p>
      </div>
      <div className="w-[80.45%] flex gap-[6px] items-center">
        <input
          type="text"
          placeholder="Add tags separated by commas (e.g. Work, Planning)"
          className="text-sm text-[#99A0AE] w-full outline-none"
        />
      </div>
    </div>
  );
};

export default TagInput;
