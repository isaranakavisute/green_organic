
//import Sidebar from "./sidebar.tsx";
//import UserScreen from "./userscreen";
import Sidebar from "../common_page/sidebar";
//import logo from "./images/new_logo.png";
//import Image from "next/image";

export default function BackOfficeLayout({ children }: {
    children: React.ReactNode
}) {
 return (
        
          
    <div className="h-full w-full flex flex-row justify-start border-1 border-black border-solid">
      <div className="h-full w-1/4 flex flex-col justify-start border-1 border-black border-solid">
       <Sidebar />
      </div>
      <div className="bg-primary h-full w-full text-white border-1 border-black border-solid">
       {children}
      </div>
    </div>
  
       
 );
}




