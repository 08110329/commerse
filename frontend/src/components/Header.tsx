"use client";

import { backend } from "@/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuHeart, LuSearch } from "react-icons/lu";

export const Header = () => {
  const [res, setRes] = useState<string>("");
  useEffect(() => {
    const getData = async () => {
      const res = await backend.get("/");

      setRes(res.data.message);
    };

    getData();
  }, []);

  return (
    <div className="w-full h-[68px] py-4 px-6 bg-black">
      <h1>{res}</h1>
      <div className="h-9 flex items-center justify-between">
        <div className="flex gap-4 items-center text-sm font-normal text-white">
          <div className="relative w-8 h-8 flex bg-black">
            <Image src={"/Logo/PineconeStudio.png"} fill alt="hoodie" />
          </div>
          <p>Бүтээгдэхүүн</p>
        </div>
        <div className=" w-[300px] h-10 flex justify-center items-center bg-gray-800 gap-2 rounded-md">
          <button className=" flex justify-center items-center text-white">
            <LuSearch className="w-6 h-6 " />
          </button>
          <input
            className="w-60 h-6 bg-gray-800 outline-none"
            placeholder="Бүтээгдэхүүн хайх"
          ></input>
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
  );
};
