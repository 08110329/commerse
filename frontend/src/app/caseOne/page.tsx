"use client";

import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";
import Image from "next/image";
import { title } from "process";
import { GoTrash } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Home() {
  const pLists = [
    {
      id: 1,
      image: "/Logo/t-shirt.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 2,
      image: "/Logo/t-shirt.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 3,
      image: "/Logo/t-shirt.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
  ];
  return (
    <div className="w-full m-auto h-[100vh]">
      <Header />
      <div className="w-screen h-screen flex flex-col items-center">
        <div className="w-[686px] h-[684] grid gap-16">
          <div className="flex items-center justify-center mt-28">
            <div className="border rounded-full w-8 h-8 flex justify-center items-center border-black hover:bg-black hover:text-white">
              <p>1</p>
            </div>
            <div className="border h-[1px] w-20 border-black"></div>
            <div className="border rounded-full w-8 h-8 flex justify-center items-center border-black hover:bg-black hover:text-white">
              <p>2</p>
            </div>
            <div className="border h-[1px] w-20 border-black"></div>
            <div className="border rounded-full w-8 h-8 flex justify-center items-center border-black hover:bg-black hover:text-white">
              <p>3</p>
            </div>
          </div>
          <div className="px-8 bg-[#F4F4F5] rounded-xl">
            <div className="px-6 py-8 grid gap-6">
              <div className="grid rounded-2xl gap-6">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center font-bold text-xl">
                    <p className="text-base font-bold">1.</p>
                    <p className="text-base font-bold">Сагс</p>
                    <p className="text-base font-bold text-[#71717A]">(4)</p>
                  </div>
                </div>
                <div className="border-b-2 border-dashed pb-6 grid gap-6">
                  {pLists.map((pList) => {
                    return (
                      <div className="flex gap-6 h-32 " key={pList.id}>
                        <div className="relative w-32 ">
                          <Image
                            src={pList.image}
                            fill
                            alt="t-shirt"
                            className="rounded-md object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-between ">
                          <div className="w-[414px]">
                            <p className="font-normal text-base">
                              {pList.title}
                            </p>
                            <div className="flex gap-3 items-center">
                              <div className="border rounded-full w-8 h-8 flex justify-center items-center border-black hover:bg-gray-200 hover:border-gray-400">
                                <p>-</p>
                              </div>
                              <p>1</p>
                              <div className="border rounded-full w-8 h-8 flex justify-center items-center border-black hover:bg-gray-200 hover:border-gray-400">
                                <p>+</p>
                              </div>
                            </div>
                          </div>
                          <p className="text-base font-bold">{pList.price}</p>
                        </div>
                        <button className=" w-6 h-6">
                          <GoTrash />
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between border-b-2 border-dashed pb-6">
                  <p className="text-base font-normal">Үнийн дүн:</p>
                  <span className="text-lg font-bold">360’000₮</span>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#2563EB] px-9 py-2 rounded-3xl text-white text-base font-semibold">
                  Худалдан авах
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
}
