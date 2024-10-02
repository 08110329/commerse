"use client";

import { FacePage } from "@/app/(main)/components/FacePage";
import { Footers } from "@/app/(main)/components/Footers";
import { Header } from "@/app/(main)/components/Header";
import { FiCheckCircle } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex py-24 px-96 bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className="w-screen h-screen">
          <div className="w-full h-fit flex gap-5 pb-24 pt-28 justify-center">
            <div className="w-[510px] h-[185px] flex flex-col justify-center items-center gap-5 text-base text-black font-medium rounded-md bg-[#F4F4F5]">
              <div className=" flex justify-center text-[18BA51]">
                <FiCheckCircle className="w-8 h-8 " />
              </div>
              <p>Захиалга амжилттай баталгаажлаа.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
