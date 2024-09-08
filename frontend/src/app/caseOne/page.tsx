"use client";

import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Home() {
  return (
    <div className="w-full m-auto h-[100vh]">
         <Header />
 <div className="w-screen h-screen">
    <div className="grid">
        <div className="flex">
        <div className="border">
            <p>1</p>
        </div> 
        <div className="border">
        <p>2</p> 
        </div>
        <div className="border">
        <p>3</p>
        </div>
        </div>
        <div className="px-8 py-8 border">
        <div className="border">
           <div className="grid rounded-2xl px-6 py-8 gap-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <p className="text-base font-bold">1.</p>
                  <p className="text-base font-bold">Сагс (4)</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-base font-normal">Үнийн дүн:</p>
                <span className="text-lg font-bold">360’000₮</span>
              </div>
            </div>
              <div>
            <button>Худалдан авах</button>
        </div>
        </div>
        </div>
    </div>
 </div>
      <Footers />
    </div>
  );
}