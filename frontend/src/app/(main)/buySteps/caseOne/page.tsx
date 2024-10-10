"use client";

import Image from "next/image";
import { GoTrash } from "react-icons/go";
import { pLists } from "@/mockData";
import Link from "next/link";

export default function Home() {
  interface Path {
    name: string;
    path: string;
  }
  const paths: Path[] = [
    {
      name: "Худалдан авах",
      path: "/buySteps/address",
    },
  ];
  return (
    <div className="flex bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className="flex flex-col items-center text-black">
          <div className="w-[686px] h-fit grid gap-16">
            <div className="flex items-center justify-center mt-28 text-black">
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
            <div className=" bg-white rounded-xl">
              <div className=" px-6 py-8 grid gap-6">
                <div className="grid rounded-2xl gap-6">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center font-bold text-xl text-black">
                      <p className="text-base font-bold">1.</p>
                      <p className="text-base font-bold">Сагс</p>
                      <p className="text-base font-bold text-[#71717A]">(4)</p>
                    </div>
                  </div>
                  <div className=" grid gap-6 ">
                    {pLists.map((pList) => {
                      return (
                        <div
                          className="flex gap-6  border rounded-2xl px-4 py-4"
                          key={pList.id}
                        >
                          <div className="w-24 h-24 border overflow-hidden rounded-xl">
                            <div className="relative w-32 h-40">
                              <Image src={pList.image} fill alt="t-shirt" />
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 text-black">
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
                          <button className="flex justify-start">
                            <GoTrash className=" w-5 h-5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between pb-6 text-black">
                    <p className="text-base font-normal">Нийт төлөх дүн:</p>
                    <span className="text-lg font-bold">360’000₮</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  {paths.map((path, index) => (
                    <Link key={index} href={path.path}>
                      <button className="bg-[#2563EB] px-9 py-2 rounded-3xl text-white text-base font-semibold">
                        {path.name}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
