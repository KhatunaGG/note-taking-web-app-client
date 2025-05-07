// "use client";
// import Link from "next/link";
// import { Archives, Home, Search, Setting, Tag } from "../../__atoms";
// import { useUtilities } from "@/app/store/utilities.store";

// const Nav = () => {
//   const { handleRoutes, routeToTags, setRouteToTags } = useUtilities();

//   const handleClickOutsideTag = () => {
//     if (routeToTags) setRouteToTags(false);
//   };

//   return (
//     <div
//       style={{
//         boxShadow: "0 -4px 6px 0 #E0E4EA",
//       }}
//       className="w-full h-[56px] md:h-[74px] lg:hidden px-8  py-3 grid grid-cols-5 border-t border-t-[#E0E4EA] shadow-t-lg"
//     >
//       <Link
//         onClick={handleClickOutsideTag}
//         href={"/note"}
//         className="flex items-center justify-center px-[28px]"
//       >
//         <button className="flex flex-col items-center justify-center gap-1 rounded-sm bg-[#EBF1FF] px-[28px] py-1">
//           <Home width={"24px"} height={"24px"} />
//           <p className="text-[#525866] text-xs hidden md:block">Home</p>
//         </button>
//       </Link>

//       <Link
//         onClick={handleClickOutsideTag}
//         href={""}
//         className="flex items-center justify-center px-[28px]"
//       >
//         <button className="flex flex-col items-center justify-center gap-1 rounded-sm px-[28px] py-1       bg-[#EBF1FF]">
//           <Search width={"24px"} height={"24px"} />
//           <p className="text-[#525866] text-xs hidden md:block">Search</p>
//         </button>
//       </Link>

//       <Link
//         onClick={handleClickOutsideTag}
//         href={""}
//         className="flex items-center justify-center px-[28px]"
//       >
//         <button className="flex flex-col items-center justify-center gap-1 rounded-sm px-[28px] py-1">
//           <Archives width={"24px"} height={"24px"} />
//           <p className="text-[#525866] text-xs hidden md:block">Archives</p>
//         </button>
//       </Link>

//       <Link href={"/tags"} className="flex items-center justify-center px-[28px]">
//         <button className="flex flex-col items-center justify-center gap-1 rounded-sm px-[28px] py-1">
//           <Tag width={"24px"} height={"24px"} />
//           <p className="text-[#525866] text-xs hidden md:block">Tag</p>
//         </button>
//       </Link>

//       {/* <button onClick={handleRoutes} className=" w-full px-[28px]  ">
//         <div
//           className={`flex py-1 flex-col items-center justify-center gap-1 rounded-sm ${
//             routeToTags ? "bg-[#EBF1FF]" : ""
//           }`}
//         >
//           <Tag width={"24px"} height={"24px"} />
//           <p className="text-[#525866] text-xs hidden md:block">Tag</p>
//         </div>
//       </button> */}

//       <Link
//         onClick={handleClickOutsideTag}
//         href={""}
//         className="flex items-center justify-center px-[28px]"
//       >
//         <button className="flex flex-col items-center justify-center gap-1 rounded-sm px-[28px] py-1">
//           <Setting width={"24px"} height={"24px"} />
//           <p className="text-[#525866] text-xs hidden md:block">Settings</p>
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Nav;












// "use client";
// import Link from "next/link";
// import { Archives, Home, Search, Setting, Tag } from "../../__atoms";


// const Nav = () => {



//   return (
//     <div
//       style={{
//         boxShadow: "0 -4px 6px 0 #E0E4EA",
//       }}
//       className="w-full h-[56px] md:h-[74px] lg:hidden px-8  py-3 grid grid-cols-5 border-t border-t-[#E0E4EA] shadow-t-lg"
//     >
//       <Link
//         href={"/note"}
//         className="flex items-center justify-center px-[28px]"
//       >
//         <button className="flex flex-col items-center justify-center gap-1 rounded-sm bg-[#EBF1FF] px-[28px] py-1">
//           <Home width={"24px"} height={"24px"} />
//           <p className="text-[#525866] text-xs hidden md:block">Home</p>
//         </button>
//       </Link>

//       <Link
//         href={""}
//         className="flex items-center justify-center px-[28px]"
//       >
//         <button className="flex flex-col items-center justify-center gap-1 rounded-sm px-[28px] py-1       bg-[#EBF1FF]">
//           <Search width={"24px"} height={"24px"} />
//           <p className="text-[#525866] text-xs hidden md:block">Search</p>
//         </button>
//       </Link>

//       <Link

//         href={"/archives"}
//         className="flex items-center justify-center px-[28px]"
//       >
//         <button className="flex flex-col items-center justify-center gap-1 rounded-sm px-[28px] py-1">
//           <Archives width={"24px"} height={"24px"} />
//           <p className="text-[#525866] text-xs hidden md:block">Archives</p>
//         </button>
//       </Link>

//       <Link href={"/tags"} className="flex items-center justify-center px-[28px]">
//         <button className="flex flex-col items-center justify-center gap-1 rounded-sm px-[28px] py-1">
//           <Tag width={"24px"} height={"24px"} />
//           <p className="text-[#525866] text-xs hidden md:block">Tag</p>
//         </button>
//       </Link>

//       {/* <button onClick={handleRoutes} className=" w-full px-[28px]  ">
//         <div
//           className={`flex py-1 flex-col items-center justify-center gap-1 rounded-sm ${
//             routeToTags ? "bg-[#EBF1FF]" : ""
//           }`}
//         >
//           <Tag width={"24px"} height={"24px"} />
//           <p className="text-[#525866] text-xs hidden md:block">Tag</p>
//         </div>
//       </button> */}

//       <Link
      
//         href={"settings"}
//         className="flex items-center justify-center px-[28px]"
//       >
//         <button className="flex flex-col items-center justify-center gap-1 rounded-sm px-[28px] py-1">
//           <Setting width={"24px"} height={"24px"} />
//           <p className="text-[#525866] text-xs hidden md:block">Settings</p>
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Nav;



"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Archives, Home, Search, Setting, Tag } from "../../__atoms";

const Nav = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/note", icon: <Home width="24px" height="24px" />, label: "Home" },
    { href: "/search", icon: <Search width="24px" height="24px" />, label: "Search" },
    { href: "/archive", icon: <Archives width="24px" height="24px" />, label: "Archives" },
    { href: "/tags", icon: <Tag width="24px" height="24px" />, label: "Tag" },
    { href: "/settings", icon: <Setting width="24px" height="24px" />, label: "Settings" },
  ];

  return (
    <div
      style={{ boxShadow: "0 -4px 6px 0 #E0E4EA" }}
      className="w-full h-[56px] md:h-[74px] lg:hidden px-8 py-3 grid grid-cols-5 border-t border-t-[#E0E4EA] shadow-t-lg"
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} className="flex items-center justify-center px-[28px]">
            <button
              className={`flex flex-col items-center justify-center gap-1 rounded-sm px-[28px] py-1 ${
                isActive ? "bg-[#EBF1FF]" : "bg-transparent"
              }`}
            >
              {item.icon}
              <p className="text-[#525866] text-xs hidden md:block">{item.label}</p>
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
