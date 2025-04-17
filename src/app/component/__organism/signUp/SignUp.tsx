import Image from "next/image";
import Form from "../form/Form";

const SignUp = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[91.46%] md:w-[67.96%] lg:w-[37.5%] bg-white rounded-xl px-4 py-[48px] md:px-8 md:py-[48px] lg:p-[48px] flex flex-col gap-4">
        <div className="w-full flex items-center justify-center">
          <div className="w-[95px] h-[28px] relative">
            <Image src={"/assets/logo.png"} alt={"logo"} fill />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-darkest font-bold text-2xl">
            Create Your Account
          </h1>
          <p className="font-regular text-sm text-[#525866]">
            Sign up to start organizing your notes and boost your productivity.
          </p>
        </div>
        <Form />
        <div className="w-full flex items-center justify-center gap-2">
          <p className="text-sm font-normal text-[#525866]">
            Already have an account?
          </p>
          <p className="text-sm font-bold text-[#525866] cursor-pointer hover:underline transition-transform duration-300 ease-in-out hover:scale-105">
            Login
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
