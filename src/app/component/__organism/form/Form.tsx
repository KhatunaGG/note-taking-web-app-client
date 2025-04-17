import { GoogleIcon, GoogleText } from "../../__atoms";
import { EmailInput, PasswordInput } from "../../__molecules";

const Form = () => {
  return (
    <form className="w-full pt-6 flex flex-col gap-4">
      <div className="w-full flex flex-col gap-4 ">
        <EmailInput />
        <PasswordInput />

        <button className="w-full font-semibold text-base text-white py-[12.5px] rounded-lg bg-[#335CFF] hover:scale-105 transition-transform duration-300 ease-in-out">
          Sign up
        </button>
      </div>

      <div className="w-full pt-6 flex flex-col gap-4">
        <p className="w-full flex items-center justify-center text-[#525866]">
          Or log in with:
        </p>
        <button className="font-semibold text-base text-white py-[12.5px] rounded-lg border border-[#CACFD8] flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out">
          <GoogleIcon />
          <GoogleText />
        </button>
      </div>
    </form>
  );
};

export default Form;
