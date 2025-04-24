"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { PasswordInput } from "../../__molecules";

export const resetPasswordSchema = z.object({
  newPassword: z.string().min(1, "Email is requeued"),
  confirmPassword: z.string().min(1, "Email is requeued"),
});

export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  return (
    <form className="w-full pt-6 flex flex-col gap-4">
      <PasswordInput
        register={register}
        errors={errors}
        fieldName="newPassword"
      />
      <PasswordInput
        register={register}
        errors={errors}
        fieldName="confirmPassword"
      />

      <button
        type="submit"
        // disabled={isSubmitting}
        className="w-full font-semibold text-base text-white py-[12.5px] rounded-lg bg-[#335CFF] hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ResetPasswordForm;
