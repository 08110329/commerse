"use client";

import { MdDateRange } from "react-icons/md";
import { Lists, Orders } from "./mockData";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

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
              <input placeholder=" Дугаар, Имэйл" className=""></input>
            </div>
          </div>
          <div className="mx-6 border rounded-xl">
            <Table className="bg-white rounded-xl ">
              <TableHeader className="">
                <TableRow className="text-xl font-bold">
                  <TableHead className="px-6 py-6">Захиалга</TableHead>
                </TableRow>
                <TableRow className="bg-gray-100">
                  <TableHead>Захиалгын ID дугаар</TableHead>
                  <TableHead>Үйлчлүүлэгч</TableHead>
                  <TableHead>Огноо</TableHead>
                  <TableHead>Цаг</TableHead>
                  <TableHead>Төлбөр</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Дэлгэрэнгүй</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Orders.map((Order) => {
                  return (
                    <TableRow className="text-black" key={Order.id}>
                      <TableCell className="font-medium">
                        {Order.ЗахиалгынIDдугаар}
                      </TableCell>
                      <TableCell className="">
                        <p className="text-sm font-semibold">Zoloo soko</p>
                        <p className="text-sm font-normal text-[#3F4145]">
                          {Order.Үйлчлүүлэгч}
                        </p>
                      </TableCell>
                      <TableCell>{Order.Огноо}</TableCell>
                      <TableCell>{Order.Цаг}</TableCell>
                      <TableCell>{Order.Төлбөр}</TableCell>
                      <TableCell className="">
                        <button className="flex items-center gap-2 border px-4 py-2 rounded-3xl">
                          {Order.Статус}
                          {Order.Статус !== "Хүргэгдсэн" ? (
                            <IoIosArrowDown />
                          ) : (
                            ""
                          )}
                        </button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Link href={`/admin/orderDetail`}>
                          <IoIosArrowForward />
                        </Link>
                      </TableCell>
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
