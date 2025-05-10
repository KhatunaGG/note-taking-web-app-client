"use client";
import { usePathname } from "next/navigation";
import { Title } from "../../__molecules";
import ResetPasswordForm from "../resetPasswordForm/ResetPasswordForm";

const ResetPassword = () => {
  const path = usePathname();
  const isResetPassword = path === "/reset-password";

  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[91.46%] md:w-[67.96%] lg:w-[37.5%] bg-white rounded-xl px-4 py-[48px] md:px-8 md:py-[48px] lg:p-[48px] flex flex-col gap-4">
        <Title isResetPassword={true} />
        <ResetPasswordForm />
      </div>
    </section>
  );
};

export default ResetPassword;