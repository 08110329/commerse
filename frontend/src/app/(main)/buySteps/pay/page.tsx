"use client";

import Image from "next/image";
import { banks } from "@/mockData";
import Link from "next/link";

export default function Home() {
  interface Path {
    name: string;
    path: string;
  }
  const paths: Path[] = [
    {
      name: "Буцах",
      path: "/buySteps/address",
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
              {paths.map((path, index) => (
                <Link key={index} href={path.path}>
                  <button className="border w-fit h-fit px-8 py-1 rounded-3xl hover:bg-[#2563EB] hover:text-white border-[#2563EB] text-[#2563EB] text-base font-medium">
                    {path.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
