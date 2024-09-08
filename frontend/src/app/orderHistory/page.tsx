"use client";

import { FacePage } from "@/components/FacePage";
import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";
import { register } from "module";
import Image from "next/image";
import { title } from "process";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Home() {
  const registerss = [
    { id: 1, title: "Овог:" },
    { id: 2, title: "Нэр:" },
    { id: 3, title: "Утасны дугаар:" },
    { id: 4, title: "Имэйл хаяг:" },
    { id: 5, title: "Хаяг" },
  ];
  const pLists = [
    {
      id: 1,
      image: "/Logo/t-shirt.png",
      title: "Chunky Glyph Tee",
      amount: "1 x 120’000₮",
      price: "120’000₮",
    },
    {
      id: 2,
      image: "/Logo/hoodie.png",
      title: "hoodie",
      amount: "1 x 120’000₮",
      price: "120’000₮",
    },
    {
      id: 3,
      image: "/Logo/cup.png",
      title: "All Smiles Nalgene",
      amount: "1 x 120’000₮",
      price: "120’000₮",
    },
    {
      id: 5,
      image: "/Logo/green.png",
      title: "Independent Corners Tee",
      amount: "1 x 120’000₮",
      price: "120’000₮",
    },
  ];
  return (
    <div className="w-full m-auto h-[100vh]">
      <Header />
      <div className="w-screen h-screen">
         <div className="w-full h-fit flex gap-5 pb-24 pt-28 justify-center">
        <div className="flex flex-col gap-1 ">
          <button className="w-[244px] h-9 hover:bg-[#F4F4F5] rounded-2xl grid justify-start items-center pl-2">
            Хэрэглэгчийн хэсэг
          </button>
          <button className="w-[244px] h-9 hover:bg-[#F4F4F5] rounded-2xl grid justify-start items-center pl-2">
            Захиалгын түүх
          </button>
        </div>
        <div className="flex flex-col gap-6 justify-end">
          <h4 className="border-b-2 pb-6 text-xl font-medium">
            Хэрэглэгчийн хэсэг
          </h4>
          <div className="grid gap-8">
            {registerss.map((registers) => {
              return (
                <div className="grid gap-2" key={registers.id}>
                  <p>{registers.title}</p>
                  <input className="border w-[820px] h-7 rounded-md"></input>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end">
            <button className="bg-[#2563EB] text-white hover:bg-black w-[172px] h-[36px] rounded-2xl ">
              Мэдээлэл шинэчлэх
            </button>
          </div>
        </div>
        <div className=" w-[820px] flex flex-col gap-6 justify-end">
          <h4 className="border-b-2 pb-6 text-xl font-medium">
            Захиалгын түүх
          </h4>
          <div className="grid gap-5">
            <div className="grid bg-[#F4F4F5] rounded-2xl px-6 py-8 gap-4">
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
                          <p className="font-normal text-sm">{pList.amount}</p>
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
            <div className="grid bg-[#F4F4F5] rounded-2xl px-6 py-8 gap-4">
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
            <div className="grid bg-[#F4F4F5] rounded-2xl px-6 py-8 gap-4">
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
     
      <Footers />
    </div>
  );
}
