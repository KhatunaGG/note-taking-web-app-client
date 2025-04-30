import React from "react";
import { Tag } from "../../__atoms";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

export type TagInputPropsType<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  fieldName: Path<T>;
};

const TagInput = <T extends FieldValues>({
  register,
  errors,
  fieldName,
}: TagInputPropsType<T>) => {
  const error = errors[fieldName]?.message as string | undefined;

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="flex items-center">
        <div className="flex gap-[6px] items-center w-[19.55%]">
          <Tag width={"16px"} height={"16px"} />
          <p className="text-sm text-[#2B303B]">Tags</p>
        </div>
        <div className="w-[80.45%] flex gap-[6px] items-center">
          <input
            {...register(fieldName)}
            type="text"
            placeholder="Add tags separated by commas (e.g. Work, Planning)"
            className="text-sm text-[#99A0AE] w-full outline-none"
          />
        </div>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TagInput;
