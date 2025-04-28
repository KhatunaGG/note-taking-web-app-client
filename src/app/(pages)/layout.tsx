// import { ToastContainer } from "react-toastify";
// import "../globals.css";
// import Sidebar from "../component/__organism/sidebar/Sidebar";
// import { Header } from "../component/__organism";

// export default function MainLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="bg-[#F3F5F8] w-full min-h-screen flex">
//       <div className="w-[18.88%]">
//         <Sidebar />
//       </div>
//       <div className="flex flex-col flex-1">
//         <Header />
//         <div className="flex-1 min-h-[calc(100vh-81px)] bg-green-200">
//           {children}
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

import { ToastContainer } from "react-toastify";
import "../globals.css";
import Sidebar from "../component/__organism/sidebar/Sidebar";
import { Aside, Header } from "../component/__organism";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full h-screen flex overflow-hidden bg-[#F3F5F8] lg:bg-white">
      <div className="lg:w-[18.88%] h-full overflow-y-auto">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 min-h-screen">
        <div className="h-[54px] md:h-[74px] lg:h-[81px] shrink-0">
          <Header />
        </div>
        <div className="flex-1 overflow-y-auto  flex flex-row">
          <div className="w-full lg:w-[76.17%] ">{children}</div>
          <Aside />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
