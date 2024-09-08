"use client";

import { FacePage } from "@/components/FacePage";
import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";
import { FiCheckCircle } from "react-icons/fi";

export default function Home() {
  return (
    <div className="w-full m-auto h-[100vh]">
         <Header /> 
          <div className="w-screen h-screen">
   <div className="w-full h-fit flex gap-5 pb-24 pt-28 justify-center">
    <div className="w-[510px] h-[185px] flex flex-col justify-center items-center gap-5 text-base text-black font-medium rounded-md bg-[#F4F4F5]">
        <div className=" flex justify-center text-[18BA51]">
            <FiCheckCircle className="w-8 h-8 "/>   
        </div>
        <p>Захиалга амжилттай баталгаажлаа.</p>
    </div>
   </div>
   </div>
      <Footers />
    </div>
  );
}