"use client";

import { HynaltinSambar } from "@/app/admin/components/HynaltinSambar";

import { GrAddCircle } from "react-icons/gr";

export default function Home() {
  return (
    <div className="h-screen flex justify-center ">
      <div className="w-full h-fit container flex bg-gray-50">
        <div>
          <HynaltinSambar />
        </div>
        <div className="flex flex-col w-full gap-8 items-center pt-[48px]">
          
              <div className="flex flex-col w-[729px] h-fit  bg-white gap-5 text-black rounded-3xl px-6 py-6">
                <h1>Дэлгүүрийн профайл үүсгэх</h1>
                <div className="grid gap-2">
                <div className="flex gap-2 justify-between border px-2 py-2 rounded-xl items-center">
                    <div className="flex items-center gap-2">
                      <input type="radio"></input>
                  <p>Дэлгүүрийн төрлөө оруулна уу </p>   
                    </div>
                  <button className="border rounded-md px-2 py-1">Дэлгүүрийн төрөл</button>
                </div>
                <div className="flex gap-2 justify-between border px-2 py-2 rounded-xl items-center">
                    <div className="flex items-center gap-2">
                        <input type="radio"></input>
                  <p>Эхний бүтээгдэхүүнээ нэмнэ үү </p>
                    </div>
                
                  <button className="border rounded-md px-2 py-1">Бүтээгдэхүүн нэмэх</button>
                </div>
                <div className="flex gap-2 justify-between border px-2 py-2 rounded-xl items-center">
                    <div className="flex items-center gap-2">
                       <input type="radio"></input>
                  <p>Хүргэлтийг тохируулна уу</p>   
                    </div>
              
                  <button className="border rounded-md px-2 py-1">Хүргэлт тохируулах</button>
                </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
  );
}