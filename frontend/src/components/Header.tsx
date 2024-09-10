"use client";

import { backend } from "@/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuHeart, LuSearch } from "react-icons/lu";
import { Button } from "./ui/button";
import { Search } from "./Search";

export const Header = () => {
  const [side, setSide] = useState(false);
  return (
    <div className=" bg-black px-6 py-4">
      <div className="w-full justify-between">
        <div className="flex">
          <div className="flex w-full">
            <div className="flex gap-8 items-center text-sm font-normal text-white">
              <div className="flex gap-4 items-center">
                <div className="relative w-8 h-8 flex bg-black">
                  <Image src={"/Logo/PineconeStudio.png"} fill alt="logo" />
                </div>
                <p>Бүтээгдэхүүн</p>
              </div>
              <p>Ангилал</p>
            </div>
            <div className=" w-full flex justify-center relative">
              <div className=" w-[300px] h-10 flex justify-center items-center bg-gray-800 gap-2 rounded-md">
                <button
                  className=" flex justify-center items-center text-white"
                  onClick={() => setSide(!side)} // darah ued side mon bol setside ogood utgiig n oorchilmoor bn
                >
                  <LuSearch className="w-6 h-6 " />
                </button>

                <div
                  className={`absolute top-14 z-10 ${
                    side ? "visible" : "hidden" // side bol hargdd bish bol nuuna
                  }`}
                >
                  <Search />
                </div>

                <input
                  className="w-60 h-6 bg-gray-800 outline-none"
                  placeholder="Бүтээгдэхүүн хайх"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-6 text-white items-center">
              <LuHeart className="w-6 h-6" />
              <HiOutlineShoppingCart className="w-6 h-6" />
            </div>
            <div className="flex gap-2 ">
              <button className="w-[101px] h-9 text-white border border-[#2563EB] hover:bg-[#2563EB] text-sm font-medium rounded-md">
                Бүртгүүлэх
              </button>
              <button className="w-[82px] h-9 text-white hover:bg-[#2563EB] border border-[#2563EB] text-sm font-medium rounded-md">
                Нэвтрэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
