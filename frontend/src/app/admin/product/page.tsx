"use client";

import { MdDateRange } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbCategory } from "react-icons/tb";
import Link from "next/link";
import { ButeegdhuunAngilal } from "@/app/admin/product/ButeegdhuunAngilal";

export default function Home() {
  return (
    <div className="h-screen bg-gray-50  border w-full">
      <div className=" h-screen container ">
        <div className="flex flex-col gap-8">
          <div className="flex hover:text-black text-[#3F4145] h-fit border-b-2 gap-3 w-screen">
            <button className=" px-4 py-6 hover:border-b-2 hover:border-black">
              Бүтээгдэхүүн
            </button>
            <button className=" px-4 py-6 hover:border-b-2 hover:border-black">
              Ангилал
            </button>
          </div>
          <Link href={`/admin/product/addProduct`} className="pl-6">
            <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-xl">
              <IoAdd className="w-6 h-6" />
              Бүтээгдэхүүн нэмэх
            </button>
          </Link>
          <div className="h-fit mx-6 flex justify-between">
            <div className="text-black flex gap-2 ">
              <button className="border px-3 py-2 bg-white rounded-lg  hover:text-white flex items-center gap-2">
                <TbCategory />
                Ангилал
                <IoIosArrowForward />
              </button>
              <button className="border px-3 py-2 bg-white rounded-lg  hover:text-white flex items-center gap-2">
                <BsCurrencyDollar />
                Үнэ
                <IoIosArrowForward />
              </button>
              <button className="border flex items-center px-3 py-2 gap-2 bg-white rounded-lg  hover:text-white ">
                <MdDateRange />
                Сараар
                <IoIosArrowForward />
              </button>
            </div>
            <div className="border flex bg-white text-black items-center text-sm px-2 gap-2 rounded-lg w-[403px]">
              <CiSearch className="w-6 h-6" />
              <input
                placeholder=" Бүтээгдэхүүний нэр, SKU, UPC"
                className="w-fit"
              ></input>
            </div>
          </div>
          <ButeegdhuunAngilal />
        </div>
      </div>
    </div>
  );
}
