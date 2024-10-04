"use client";

import { MdDateRange } from "react-icons/md";
import { Lists } from "./mockData";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { OrderTab } from "./OrderTab";

export default function Home() {
  return (
    <div className="h-screen bg-gray-50 w-full">
      <div className="w-full h-screen container flex ">
        <div className="flex flex-col w-full gap-8">
          <div className="flex hover:text-black text-[#3F4145] h-fit border-b-2 w-screen">
            {Lists.map((List) => {
              return (
                <button
                  key={List.id}
                  className=" px-4 py-6 hover:border-b-2 hover:border-black"
                >
                  {List.title}
                </button>
              );
            })}
          </div>
          <div className="h-fit mx-6 flex justify-between">
            <div className="text-black flex gap-2 ">
              <button className="border px-3 py-2 bg-white rounded-lg hover:bg-[#18BA51] hover:text-white">
                Өнөөдөр
              </button>
              <button className="border px-3 py-2 bg-white rounded-lg hover:bg-[#18BA51] hover:text-white">
                7 хоног
              </button>
              <button className="border flex items-center px-3 py-2 gap-2 bg-white rounded-lg hover:bg-[#18BA51] hover:text-white">
                <MdDateRange />
                Сараар
                <IoIosArrowForward />
              </button>
            </div>
            <div className="border flex bg-white text-black items-center text-sm px-2 gap-2 rounded-lg">
              <CiSearch className="w-6 h-6" />
              <input placeholder=" Дугаар, Имэйл"></input>
            </div>
          </div>
          <OrderTab />
        </div>
      </div>
    </div>
  );
}
