import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-[95px] h-[28px] relative">
      <Image src={"/assets/logo.png"} alt={"logo"} fill />
    </div>
  );
};

export default Logo;
