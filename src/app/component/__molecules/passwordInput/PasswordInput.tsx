"use client";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { Eye, InfoCircle } from "../../__atoms";


export type PasswordInputPropsType<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  fieldName: Path<T>;
};

const PasswordInput = <T extends FieldValues>({
  register,
  errors,
  fieldName,
}: PasswordInputPropsType<T>) => {
  return (
    <div className="w-full flex flex-col gap-[6px]">
      <label className="text-sm font-medium text-darkest">Password</label>
      <div className="w-full relative">
        <input
          type="text"
          className="w-full border border-[#CACFD8] rounded-lg p-3 outline-none text-neutral"
          placeholder=""
          {...register(fieldName)}
        />
        <Eye />
        {errors[fieldName] && (
          <span className="text-red-500 text-sm">
            {errors[fieldName]?.message?.toString()}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <InfoCircle />
        <p className="text-[#525866] font-normal text-xs">
          At least 8 characters
        </p>
      </div>
    </div>
  );
};

export default PasswordInput;
