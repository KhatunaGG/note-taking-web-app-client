import Form from "../form/Form";
import Link from "next/link";
import { Title } from "../../__molecules";

const SignUp = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[91.46%] md:w-[67.96%] lg:w-[37.5%] bg-white rounded-xl px-4 py-[48px] md:px-8 md:py-[48px] lg:p-[48px] flex flex-col gap-4">
        <Title />
        <Form />
        <div className="w-full flex items-center justify-center gap-2">
          <p className="text-sm font-normal text-[#525866]">
            Already have an account?
          </p>
          <Link href={"/sign-in"}>
            <p className="text-sm font-bold text-[#525866] cursor-pointer hover:underline transition-transform duration-300 ease-in-out hover:scale-105">
              Login
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
