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
//     <div className=" w-full h-screen flex overflow-hidden bg-[#F3F5F8] lg:bg-white">
//       <div className="lg:w-[18.88%] h-full overflow-y-auto">
//         <Sidebar />
//       </div>
//       <div className="flex flex-col flex-1 min-h-screen">
//         <div className="h-[54px] md:h-[74px] lg:h-[81px] shrink-0">
//           <Header />
//         </div>
//         <div className="flex-1 overflow-y-auto  flex flex-row ">
//         <Notes />
//           <div className="w-full lg:w-[76.17%] ">{children}</div>
//           <Aside />
//         </div>

//         {/* <div className="flex-1 flex flex-row overflow-hidden min-h-0">
//           <div className="w-full lg:w-[76.17%] h-full overflow-y-auto">
//             {children}
//           </div>
//           <div className="hidden lg:block w-[23.83%] h-full overflow-y-auto">
//             <Aside />
//           </div>
//         </div> */}
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

import { ToastContainer } from "react-toastify";
import "../globals.css";
import Sidebar from "../component/__organism/sidebar/Sidebar";
import { Aside, Footer, Header, Notes } from "../component/__organism";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full min-h-screen flex overflow-hidden bg-[#F3F5F8] lg:bg-white">
      <div className="lg:w-[18.88%] h-full overflow-y-auto">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 min-h-screen">
        <div className="h-[54px] md:h-[74px] lg:h-[81px] shrink-0">
          <Header />
        </div>

        <div className="w-full lg:flex-1 overflow-y-auto  flex flex-row  screen-minus-137   lg:min-h-screen-minus-155  bg-amber-600">
          <div className="w-full max-h-min flex items-start">
            <Notes />
            <div className="w-full lg:w-[50.34%] flex flex-col relative  ">
              {children}
              <Footer />
            </div>
            <Aside />
          </div>
        </div>

        {/* <div className="flex-1 flex flex-row overflow-hidden min-h-0">
          <div className="w-full lg:w-[76.17%] h-full overflow-y-auto">
            {children}
          </div>
          <div className="hidden lg:block w-[23.83%] h-full overflow-y-auto">
            <Aside />
          </div>
        </div> */}
      </div>
      <ToastContainer />
    </div>
  );
}
