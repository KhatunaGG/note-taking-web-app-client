"use client";
import Image from "next/image";

export type TitlePropsType = {
  isSignInPage?: boolean;
  isForgotPassword?: boolean;
};

const Title = ({ isSignInPage, isForgotPassword }: TitlePropsType) => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-[95px] h-[28px] relative">
          <Image src={"/assets/logo.png"} alt={"logo"} fill />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-darkest font-bold text-2xl">
          {/* {isSignInPage ? "Welcome to Note" : "Create Your Account"} */}
          {isSignInPage
            ? "Welcome to Note"
            : isForgotPassword
            ? "Forgotten your password?"
            : "Create Your Account"}
        </h1>
        <p className="font-regular text-sm text-[#525866]">
          {/* {isSignInPage
            ? " Please log in to continue"
            : "Sign up to start organizing your notes and boost your productivity."} */}

          {isSignInPage
            ? " Please log in to continue"
            : isForgotPassword
            ? "Enter your email below, and we’ll send you a link to reset it."
            : "Sign up to start organizing your notes and boost your productivity."}
        </p>
      </div>
    </>
  );
};

export default Title;
