'use client'; 

import logo from "./images/new_logo.png";
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import { FormEvent, useEffect } from 'react';
import useRouter from '@/node_modules/next/router';
//import useRouter from '@/node_modules/next/navigator';
import axios from 'axios';
import React from "react";
import { unstable_cache } from "next/cache";
//import MainScreen from '../mainpage/userscreen';
import pencil_icon from "./images/pencil-icon.svg";
import trash_icon from "./images/recycle-bin-icon.svg";


export default function UserScreen() {

  const router = useRouter;
  const [std_json_res, set_std_json_res] = React.useState([{"user_id": "value","email": "value","password": "value","access_type": "value"}]); //React.useState(null);
 

  function autoload()
  {
    axios({
     method: "POST",
     url: "http://deploy-aws.com:3006/listuser",
     headers: {
      "Content-Type": "application/json"
     }
   })
   .then(res => {
    set_std_json_res(res.data);
    return res.data;
    })
    .catch(err => {
   });
 }

  useEffect(() => {
    autoload();
  }, []);

  function onEditIconClicked()
  {
   //alert('Item will be edited');
  }

  function onDeleteIconClicked()
  {
   //alert('Item will be deleted');
  }

  return (
        <div className="flex flex-col w-full h-[100vh] bg-white">                 
         <div className="flex h-full w-full flex-row items-center justify-center bg-white">
          <div className="flex h-full w-full bg-white flex-col justify-start items-center rounded-xl">

            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center bg-amber-600">
             <div className="text-3xl text-black">Registered user</div>
            </div>

            <div className="flex flex-col w-full h-[5vh] border-0 border-solid bg-amber-600 items-center justify-start"> 
             <div className="flex flex-row w-full h-full border-0 border-solid border-black">
              <div className="flex flex-row w-1/5 h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">USER ID</div>
              <div className="flex flex-row w-1/5 h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">USERNAME</div>
              <div className="flex flex-row w-1/5 h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">PASSWORD</div>
              <div className="flex flex-row w-1/5 h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">ACCESS</div>
              <div className="flex flex-row w-1/5 h-full border-1 border-solid border-black bg-amber-600 justify-center text-black">ADMIN TOOL</div>
             </div>
            </div>

            <div className="flex flex-col w-full h-full border-1 border-solid border-purple items-center justify-start overflow-y-auto"> 
             {
              std_json_res.map((post) => (
                 
           


                  <div className="flex flex-row w-full h-[3vh] bg-amber-100" key={post.user_id}>
                   <div className="border-1 border-solid border-black w-1/5 h-full text-xl text-black">{post.user_id}</div>
                   <div className="border-1 border-solid border-black w-1/5 h-full text-xl text-black">{post.email}</div>
                   <div className="border-1 border-solid border-black w-1/5 h-full text-xl text-black">{post.password}</div>
                   <div className="border-1 border-solid border-black w-1/5 h-full text-xl text-black">{post.access_type}</div>
                   <div className="border-1 border-solid border-black w-1/5 h-full flex flex-row">
         
                    

                                        
                    <div className="mr-2 h-full w-1/2 flex flex-row justify-end">
                     <div
                      style={{
                      position: "relative",
                      width: "75%",
                      height: "75%",
                      }}
                     >
                      <Link href={"/edituser?id="+post.user_id}  onClick={onEditIconClicked}>                       
                        <Image
                         src={pencil_icon}
                         alt="pencil icon"
                         fill = {true}
                        />
                      </Link>
                     </div>
                    </div>

                   
                    <div className="mr-2 h-full w-1/2 flex flex-row justify-start">
                     <div
                      style={{
                      position: "relative",
                      width: "75%",
                      height: "75%",
                      }}
                     >
                      <Link href={"/deleteuser?id="+post.user_id} onClick={onDeleteIconClicked}>
                       <Image
                        src={trash_icon}
                        alt="trash icon"
                        fill = {true}
                       />
                      </Link>
                     </div>
                    </div>
                    


                   </div>
                  </div>
                 
                 )        
               )              
             }
           </div>
          </div>
         </div>
        </div> 
    );
}
