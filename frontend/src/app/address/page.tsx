"use client";

import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";
import Image from "next/image";
import { GoTrash } from "react-icons/go";
import { pLists, registerss } from "./mockData";

export default function Home() {
  return (
    <div className="flex bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className="w-screen h-screen">
          <div className="w-full h-[684] grid gap-16 justify-center">
            <div className="flex items-center mt-28 justify-center">
              <div className="border rounded-full w-8 h-8 flex justify-center items-center border-black  hover:bg-[#2563EB] hover:text-white hover:border-none">
                <p>1</p>
              </div>
              <div className="border h-[1px] w-20 border-black"></div>
              <div className="border rounded-full w-8 h-8 flex justify-center items-center border-black  hover:bg-[#2563EB] hover:text-white hover:border-none">
                <p>2</p>
              </div>
              <div className="border h-[1px] w-20 border-black"></div>
              <div className="border rounded-full w-8 h-8 flex justify-center items-center border-black  hover:bg-[#2563EB] hover:text-white hover:border-none">
                <p>3</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className=" bg-white rounded-xl w-[333px] h-[448px]">
                <div className="grid gap-6 px-6 pt-8">
                  <div className="grid rounded-2xl gap-6">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center font-bold text-xl">
                        <p className="text-base font-bold">1.</p>
                        <p className="text-base font-bold">Сагс</p>
                        <p className="text-base font-bold text-[#71717A]">
                          (4)
                        </p>
                      </div>
                    </div>
                    <div className="border-b-2 border-dashed grid gap-6 pb-6">
                      {pLists.map((pList) => {
                        return (
                          <div className="flex gap-6" key={pList.id}>
                            <div className="w-20 h-20  overflow-hidden rounded-md">
                              <div className="relative w-[120px] h-[160px]">
                                <Image src={pList.image} fill alt="t-shirt" />
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <p className="font-normal text-base">
                                {pList.title}
                              </p>
                              <p className="font-normal text-base">
                                {pList.amount}
                              </p>
                              <p className="text-base font-bold">
                                {pList.price}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-between">
                      <p className="text-base font-normal">Нийт төлөх дүн:</p>
                      <span className="text-lg font-bold">360’000₮</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[623px] h-[614] p-8 grid gap-9 bg-white rounded-xl">
                <p className="font-semibold text-lg">
                  2. Хүргэлтийн мэдээлэл оруулах
                </p>
                <div className="grid gap-6">
                  {registerss.map((registers) => {
                    return (
                      <div className="grid gap-2" key={registers.id}>
                        <p>{registers.title}</p>
                        <input className="border h-7 rounded-md"></input>
                        <p className="text-[#71717A] text-sm font-normal">
                          {registers.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between ">
                  <button className="border px-9 py-2 rounded-3xl hover:bg-[#2563EB] hover:text-white text-base font-medium">
                    Буцах
                  </button>
                  <button className="hover:bg-[#2563EB] px-9 py-2 rounded-3xl hover:text-white border text-base font-medium">
                    Төлбөр төлөх
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
