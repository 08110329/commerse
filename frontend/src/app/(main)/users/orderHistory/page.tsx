"use client";

import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { pLists } from "@/mockData";
import Link from "next/link";

export default function Home() {
  interface Path {
    name: string;
    path: string;
  }
  const paths: Path[] = [
    {
      name: "Хэрэглэгчийн хэсэг",
      path: "/users/UserInfo",
    },
    {
      name: "Захиалгын түүх",
      path: "/users/orderHistory",
    },
  ];
  return (
    <div className="flex bg-[#F4F4F5] py-24 px-96 justify-center">
      <div className="container flex justify-center">
        <div className="h-screen">
          <div className="w-full h-fit flex gap-5 pb-24 pt-28 justify-center">
            <div className="flex flex-col gap-1 ">
              {paths.map((path, index) => (
                <Link key={index} href={path.path}>
                  <button className="w-[244px] h-9 hover:bg-white rounded-2xl grid justify-start items-center pl-4">
                    {path.name}
                  </button>
                </Link>
              ))}
            </div>
            <div className=" w-[820px] flex flex-col gap-6 justify-end">
              <h4 className="border-b-2 pb-6 text-xl font-medium">
                Захиалгын түүх
              </h4>
              <div className="grid gap-5">
                <div className="grid bg-white rounded-2xl px-6 py-8 gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <p className="text-base font-bold">2024-09-03 15:34</p>
                      <button className="w-36 h-5 bg-[#2563EB] text-white hover:bg-[#F4F4F5] hover:border-[#2563EB] hover:border hover:text-[#2563EB] rounded-xl flex items-center justify-center font-semibold text-xs">
                        хүргэлтэнд гарсан
                      </button>
                    </div>
                    <button>
                      <IoIosArrowUp className="w-5 h-5" />
                      <IoIosArrowDown className="w-5 h-5 hidden" />
                    </button>
                  </div>
                  <div className="flex flex-col border-b-2 border-dashed pb-6 gap-2">
                    {pLists.map((pList) => {
                      return (
                        <div className="flex gap-3" key={pList.id}>
                          <div className="relative w-9 h-12 ">
                            <Image
                              src={pList.image}
                              fill
                              alt="t-shirt"
                              className="rounded-md"
                            />
                          </div>
                          <div className="grid">
                            <p>{pList.title}</p>
                            <div className=" w-[725px] flex justify-between ">
                              <p className="font-normal text-sm">
                                {pList.amount}
                              </p>
                              <span className="font-bold text-sm">
                                {pList.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between">
                    <p className="text-base font-normal">Үнийн дүн:</p>
                    <span className="text-lg font-bold">480’000₮</span>
                  </div>
                </div>
                <div className="grid bg-white rounded-2xl px-6 py-8 gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <p className="text-base font-bold">2024-08-23 15:34</p>
                      <button className="w-20 h-5 bg-[#2563EB] hover:bg-[#F4F4F5] hover:border-[#2563EB] hover:border hover:text-[#2563EB] text-white rounded-xl flex items-center justify-center font-semibold text-xs">
                        дууссан
                      </button>
                    </div>
                    <button>
                      <IoIosArrowUp className="w-5 h-5 hidden" />
                      <IoIosArrowDown className="w-5 h-5 " />
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-base font-normal">Үнийн дүн:</p>
                    <span className="text-lg font-bold">120’000₮</span>
                  </div>
                </div>
                <div className="grid bg-white rounded-2xl px-6 py-8 gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <p className="text-base font-bold">2024-08-23 15:34</p>
                      <button className="w-20 h-5 bg-[#2563EB] hover:bg-[#F4F4F5] hover:border-[#2563EB] hover:border hover:text-[#2563EB] text-white rounded-xl flex items-center justify-center font-semibold text-xs">
                        дууссан
                      </button>
                    </div>
                    <button>
                      <IoIosArrowUp className="w-5 h-5 hidden" />
                      <IoIosArrowDown className="w-5 h-5 " />
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-base font-normal">Үнийн дүн:</p>
                    <span className="text-lg font-bold">120’000₮</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
