"use client";

import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";
import Link from "next/link";
import { TodayOrder } from "../components/TodayOrder";

export default function Home() {
  return (
        <div className="flex flex-col w-full h-screen bg-gray-50 gap-8 mt-5 container m-auto">
          <div className="bg-white mx-6 grid gap-6 rounded-2xl border">
            <div className="flex justify-between px-6 pt-5">
              <h1 className="text-xl font-bold">Орлого</h1>
              <button className="flex text-sm font-semibold bg-gray-100 p-3 rounded-xl gap-2">
                <HiOutlineArrowDownTray className="w-5 h-5" />
                Хуулга татах
              </button>
            </div>
            <div className="flex justify-between px-6 py-6 border-t-2">
              <h1 className="text-2xl font-bold">235,000₮</h1>
              <div className="text-black flex gap-2 ">
                <button className="border px-3 py-2 bg-white rounded-lg hover:bg-[#18BA51] hover:text-white">
                  Өнөөдөр
                </button>
                <Link href={`/admin/income/week`}>
                  <button className="border px-3 py-2 bg-white rounded-lg hover:bg-[#18BA51] hover:text-white">
                    7 хоног
                  </button>
                </Link>

                <button className="border flex items-center px-3 py-2 gap-2 bg-white rounded-lg hover:bg-[#18BA51] hover:text-white">
                  <MdDateRange />
                  Сараар
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
          <TodayOrder />
        </div>
  );
}
