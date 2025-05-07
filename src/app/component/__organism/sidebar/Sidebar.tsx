// "use client";
// import { usePathname } from "next/navigation";
// import { Archives, Home, Logo, Tag } from "../../__atoms";
// import Link from "next/link";
// import { useUtilities } from "@/app/store/utilities.store";
// import { useEffect } from "react";

// const Sidebar = () => {
//   const pathname = usePathname();
//   const { setCurrentPath, activeLink } = useUtilities();

//   useEffect(() => {
//     setCurrentPath(pathname);
//   }, [pathname]);

//   return (
//     <div className="hidden w-full min-h-screen bg-white py-3 px-4 lg:flex flex-col gap-4">
//       <div className="w-full py-4">
//         <Logo />
//       </div>

//       <div className="flex flex-col gap-2">
//         <div className="flex flex-col">
//           <Link href="/">
//             <button
//               className={`${activeLink(
//                 "/"
//               )} w-full rounded-lg duration-300 ease-in-out text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2`}
//             >
//               <Home width="20px" height="20px" />
//               <p className="text-sm text-[#0E121B]">All Notes</p>
//             </button>
//           </Link>

//           <Link href={"/Archives"}>
//             <button
//               className={`${activeLink(
//                 "/Archives"
//               )} w-full rounded-lg hover:bg-[#F3F5F8] duration-300 easy-in-out text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2`}
//             >
//               <Archives width={"20px"} height={"20px"} />
//               <p className="text-sm text-[#0E121B]">Archived Notes</p>
//             </button>
//           </Link>
//         </div>

//         <div className="border-t border-t-[#E0E4EA]">
//           <button className="w-full rounded-lg hover:bg-[#F3F5F8] duration-300 easy-in-out text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
//             <Tag width={"20px"} height={"20px"} />
//             <p className="text-sm text-[#0E121B]">Dev</p>
//           </button>
//           <button className="w-full rounded-lg hover:bg-[#F3F5F8] duration-300 easy-in-out text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
//             <Tag width={"20px"} height={"20px"} />
//             <p className="text-sm text-[#0E121B]">Fitness</p>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

"use client";
import { usePathname } from "next/navigation";
import { Archives, Home, Logo, Tag } from "../../__atoms";
import Link from "next/link";
import { useUtilities } from "@/app/store/utilities.store";
import { useEffect } from "react";
import TagNav from "../tagNav/TagNav";

const Sidebar = () => {
  const pathname = usePathname();
  const { setCurrentPath, activeLink } = useUtilities();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <div className="hidden w-full min-h-screen bg-white py-3 px-4 lg:flex flex-col gap-4">
      <div className="w-full py-4">
        <Logo />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col      ">
          <Link href="/note">
            <button
              className={`${activeLink(
                "/"
              )} w-full rounded-lg duration-300 ease-in-out text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2`}
            >
              <Home width="20px" height="20px" />
              <p className="text-sm text-[#0E121B]">All Notes</p>
            </button>
          </Link>

          <Link href={"/archive"}>
            <button
              className={`${activeLink(
                "/archive"
              )} w-full rounded-lg hover:bg-[#F3F5F8] duration-300 easy-in-out text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2`}
            >
              <Archives width={"20px"} height={"20px"} />
              <p className="text-sm text-[#0E121B]">Archived Notes</p>
            </button>
          </Link>
        </div>
        
        <TagNav />
        {/* <div className="border-t border-t-[#E0E4EA]">
          <button className="w-full rounded-lg hover:bg-[#F3F5F8] duration-300 easy-in-out text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
            <Tag width={"20px"} height={"20px"} />
            <p className="text-sm text-[#0E121B]">Dev</p>
          </button>
          <button className="w-full rounded-lg hover:bg-[#F3F5F8] duration-300 easy-in-out text-[#0E121B] font-semibold text-sm px-[15px] py-[11.5px] flex items-center justify-start gap-2">
            <Tag width={"20px"} height={"20px"} />
            <p className="text-sm text-[#0E121B]">Fitness</p>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
