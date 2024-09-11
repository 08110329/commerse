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
    <div className="flex bg-[#F4F4F5] justify-center ">
      <div className="container flex justify-center ">
        <div className="h-screen flex flex-col gap-16">
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

          <div className="w-[687px] h-[656px] p-8 grid bg-white rounded-xl">
            <p className="font-semibold text-lg h-fit">3. Төлбөр төлөлт</p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col py-9 w-full items-center gap-6">
                <div className="flex  border">
                  <p className="px-1 w-fit h-fit rounded-2xl bg-[#F4F4F5]">
                    14:50
                  </p>
                </div>
                <div className="w-[329px] h-[192px] border"></div>
                <div className="flex flex-col gap-5">
                  <p className="flex justify-center">
                    Төлөх боломжтой банкууд:
                  </p>
                  <div className="grid grid-cols-8 grid-rows-2 gap-6 px-10">
                    {banks.map((bank) => {
                      return (
                        <div className="relative w-12 h-12 " key={bank.id}>
                          <Image
                            src={bank.src}
                            fill
                            alt={bank.alt}
                            className="rounded-lg"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button className="border w-fit h-fit px-8 py-1 rounded-3xl hover:bg-[#2563EB] hover:text-white border-[#2563EB] text-[#2563EB] text-base font-medium">
                Буцах
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
