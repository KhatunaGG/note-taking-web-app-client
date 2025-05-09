// import { ToastContainer } from "react-toastify";
// import "../globals.css";
// import Sidebar from "../component/__organism/sidebar/Sidebar";
// import { Aside, Header, Notes } from "../component/__organism";

// export default function MainLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className=" w-full min-h-screen flex  bg-[#F3F5F8] lg:bg-white">
//       <div className="lg:w-[18.88%] h-full overflow-y-auto ">
//         <Sidebar />
//       </div>

//       <div className="w-full lg:w-[81.12%]  min-h-[calc(100vh-54px)] md:min-h-[calc(100vh-74px)] lg:min-h-[calc(100vh-81px)] ">
//         <div className="w-full flex flex-col items-start    relative">
//           <div className="h-[54px] md:h-[74px] lg:h-[81px] w-full absolute inset-0 z-10">
//             <Header />
//           </div>

//           <div className="w-full flex items-stretch  pt-[54px] md:pt-[74px] lg:pt-[81px] min-h-screen">
//             <div className="w-full lg:w-[24.82%] ">
//               <Notes />
//             </div>
//             <div className="w-full lg:w-[50.34%] hidden lg:flex bg-blue-400">
//               {children}
//             </div>
//             <div className="w-full lg:w-[22.07%] hidden lg:flex ">
//               <Aside />
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

import { ToastContainer } from "react-toastify";
import "../globals.css";
import Sidebar from "../component/__organism/sidebar/Sidebar";
import Overlay from "../component/__organism/overlay/Overlay";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className=" w-full min-h-screen flex  bg-[#F3F5F8] lg:bg-white relative">
    <div className=" w-full min-h-screen flex lg:bg-white relative">
      <Overlay />
      <div className="lg:w-[18.88%] h-full overflow-y-auto ">
        <Sidebar />
      </div>

      <div className="w-full lg:w-[81.12%] ">
        {/* <div className="w-full  lg:flex ">{children}</div> */}
        <div className="w-full  lg:flex ">{children}</div>
      </div>
      <ToastContainer />
    </div>
  );
}
