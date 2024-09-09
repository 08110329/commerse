"use client";

import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  const banks = [
    {
      id: 1,
      src: "/Logo/2.1.png",
      alt: "hi",
    },
    {
      id: 2,
      src: "/Logo/2.2.png",
      alt: "hi",
    },
    {
      id: 3,
      src: "/Logo/2.3.png",
      alt: "hi",
    },
    {
      id: 4,

      src: "/Logo/2.4.png",
      alt: "hi",
    },
    {
      id: 5,

      src: "/Logo/2.5.png",
      alt: "hi",
    },
    {
      id: 6,

      src: "/Logo/2.6.png",
      alt: "hi",
    },
    {
      id: 7,

      src: "/Logo/2.7.png",
      alt: "hi",
    },
    {
      id: 8,

      src: "/Logo/2.8.png",
      alt: "hi",
    },
    {
      id: 9,

      src: "/Logo/2.9.png",
      alt: "hi",
    },
    {
      id: 10,

      src: "/Logo/2.10.png",
      alt: "hi",
    },
    {
      id: 11,

      src: "/Logo/2.11.png",
      alt: "hi",
    },
    {
      id: 12,

      src: "/Logo/2.12.png",
      alt: "hi",
    },
    {
      id: 13,

      src: "/Logo/2.13.png",
      alt: "hi",
    },
  ];
  return (
    <div className="w-full m-auto h-[100vh]">
      <div className="w-screen h-screen bg-[#F4F4F5]">
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
            <div className="w-[623px] h-[614] p-8 grid gap-9 bg-white rounded-xl">
              <p className="font-semibold text-lg">3. Төлбөр төлөлт</p>
              <div className="">
                <div className="flex flex-col">
                  <div className="flex flex-col justify-center">
                    <p className="px-1 rounded-2xl bg-[#F4F4F5]">14:50</p>
                    <div className="flex flex-col border gap-5">
                      <p className="flex justify-center">
                        Төлөх боломжтой банкууд:
                      </p>
                      <div className="grid grid-cols-8 grid-rows-2 gap-6">
                        {banks.map((bank) => {
                          return (
                            <div className="relative w-12 h-12" key={bank.id}>
                              <Image src={bank.src} fill alt={bank.alt} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <button className="border px-9 py-2 rounded-3xl hover:bg-[#2563EB] hover:text-white text-base font-medium">
                  Буцах
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
