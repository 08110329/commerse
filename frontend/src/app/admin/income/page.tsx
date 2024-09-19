"use client";

import { HynaltinSambar } from "../components/HynaltinSambar";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";
import { todayy } from "./mockData";

export default function Home() {
  return (
    <div className="h-screen flex justify-center ">
      <div className="w-full h-screen container flex bg-gray-50">
        <div className="">
          <HynaltinSambar />
        </div>
        <div className="flex flex-col w-full gap-8 mt-5">
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
                <button className="border px-3 py-2 bg-white rounded-lg hover:bg-[#18BA51] hover:text-white">
                  7 хоног
                </button>
                <button className="border flex items-center px-3 py-2 gap-2 bg-white rounded-lg hover:bg-[#18BA51] hover:text-white">
                  <MdDateRange />
                  Сараар
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
          <div className="mx-6 bg-white border rounded-2xl">
            <Table className="">
              <TableHeader className="">
                <TableRow>
                  <TableHead className="px-6 py-3">
                    Захиалгын ID дугаар
                  </TableHead>
                  <TableHead>Захиалагч</TableHead>
                  <TableHead>Төлбөр</TableHead>
                  <TableHead>Огноо</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {todayy.map((today) => {
                  return (
                    <TableRow className="text-black " key={today.id}>
                      <TableCell className="font-medium px-6 py-4">
                        {today.productID}
                      </TableCell>
                      <TableCell className="">
                        <p className="text-sm font-normal">
                          {today.Захиалагч.email}
                        </p>
                        <p className="text-sm font-normal text-[#3F4145]">
                          {today.Захиалагч.phone}
                        </p>
                      </TableCell>
                      <TableCell>{today.Төлбөр}</TableCell>
                      <TableCell>{today.Огноо}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
