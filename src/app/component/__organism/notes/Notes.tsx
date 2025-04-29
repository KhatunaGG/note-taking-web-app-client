// import React, { Dispatch, SetStateAction } from "react";
// import Note from "../note/Note";
// import Nav from "../nav/Nav";
// import { Plus } from "../../__atoms";
// import Link from "next/link";

// const Notes = () => {
//   return (
//     <div
//       className="w-full px-8 lg:w-[24.82%] pt-[20px] lg:pl-8 md:pt-6 lg:pt-[20px] lg:pr-4  flex flex-col gap-4 
//     lg:border lg:border-[#E0E4EA] rounded-t-xl overflow-hidden lg:rounded-t-[0px]  relative              bg-blue-200   "
//     >
//       <h1 className="block font-bold text-[24px] text-[#0E121B] lg:hidden">
//         All Notes
//       </h1>

//       {/* <button className="hidden w-full bg-[#335CFF] rounded-lg text-white text-sm font-normal py-3 lg:flex items-center justify-center">
//         + Create New Note
//       </button>

//       <button
//         type="button"
//         className=" bg-[#335CFF] text-white text-sm font-normal  
//         fixed right-8 bottom-[90px] h-[48px] w-[48px]
//        md:h-[64px] md:w-[64px] rounded-full 
//        items-center justify-center lg:hidden"
//       >
//         <div className="w-full flex items-center justify-center gap-1">
//           <Plus />
//           <span className="hidden lg:block lg:text-sm font-medium ">+</span>
//           <span className="hidden text-sm font-medium lg:block">
//             Create New Note
//           </span>
//         </div>
//       </button> */}

//       <button
//         type="button"
//         className=" bg-[#335CFF] text-white text-sm font-normal py-3 
//         fixed right-8 bottom-[90px] h-[48px] w-[48px]
//        md:h-[64px] md:w-[64px] rounded-full 
//        lg:static lg:w-full lg:rounded-lg lg:h-auto lg:flex items-center justify-center"
//       >
//         <div className="w-full flex items-center justify-center gap-1">
//           <Plus />
//           <span className="hidden lg:block lg:text-sm font-medium ">+</span>
//           <span className="hidden text-sm font-medium lg:block">
//             Create New Note
//           </span>
//         </div>
//       </button>

//       <div className="w-full flex flex-col md:pb-[114px] lg:pb-[37px]">
//         <Link href={`/${1}`}>
//           <Note />
//         </Link>
//         <Note />
//         <Note />
//         <Note />
//         <Note />
//         <Note />
//         <Note />
//         <Note />
//       </div>
//       {/* <Nav /> */}
//     </div>
//   );
// };

// export default Notes;





import React, { Dispatch, SetStateAction } from "react";
import Note from "../note/Note";
import Nav from "../nav/Nav";
import { Plus } from "../../__atoms";
import Link from "next/link";

const Notes = () => {
  return (
    <div
      className="w-full px-8 lg:w-[24.82%] pt-[20px] lg:pl-8 md:pt-6 lg:pt-[20px] lg:pr-4  flex flex-col gap-4 
    lg:border lg:border-[#E0E4EA] rounded-t-xl overflow-hidden lg:rounded-t-[0px]  relative              bg-blue-200   "
    >
      <h1 className="block font-bold text-[24px] text-[#0E121B] lg:hidden">
        All Notes
      </h1>

      {/* <button className="hidden w-full bg-[#335CFF] rounded-lg text-white text-sm font-normal py-3 lg:flex items-center justify-center">
        + Create New Note
      </button>

      <button
        type="button"
        className=" bg-[#335CFF] text-white text-sm font-normal  
        fixed right-8 bottom-[90px] h-[48px] w-[48px]
       md:h-[64px] md:w-[64px] rounded-full 
       items-center justify-center lg:hidden"
      >
        <div className="w-full flex items-center justify-center gap-1">
          <Plus />
          <span className="hidden lg:block lg:text-sm font-medium ">+</span>
          <span className="hidden text-sm font-medium lg:block">
            Create New Note
          </span>
        </div>
      </button> */}

      <button
        type="button"
        className=" bg-[#335CFF] text-white text-sm font-normal py-3 
        fixed right-8 bottom-[90px] h-[48px] w-[48px]
       md:h-[64px] md:w-[64px] rounded-full 
       lg:static lg:w-full lg:rounded-lg lg:h-auto lg:flex items-center justify-center"
      >
        <div className="w-full flex items-center justify-center gap-1">
          <Plus />
          <span className="hidden lg:block lg:text-sm font-medium ">+</span>
          <span className="hidden text-sm font-medium lg:block">
            Create New Note
          </span>
        </div>
      </button>

      <div className="w-full flex flex-col md:pb-[114px] lg:pb-[37px]">
        <Link href={`/${1}`}>
          <Note />
        </Link>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
      {/* <Nav /> */}
    </div>
  );
};

export default Notes;
