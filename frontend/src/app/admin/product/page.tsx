"use client";

import { MdDateRange } from "react-icons/md";
import { HynaltinSambar } from "../components/HynaltinSambar";
import { productLists } from "@/app/admin/product/mockData";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoAdd } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbCategory } from "react-icons/tb";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { LuPencilLine } from "react-icons/lu";
import Link from "next/link";

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
          <div className="mx-6 bg-white rounded-2xl border">
            <Table className="">
              <TableHeader className="">
                <TableRow className="">
                  <TableHead></TableHead>
                  <TableHead className="py-4 text-black">
                    Бүтээгдэхүүн
                  </TableHead>
                  <TableHead className="text-black">Ангилал</TableHead>
                  <TableHead className="text-black">Үнэ</TableHead>
                  <TableHead className="text-black">Үлдэгдэл</TableHead>
                  <TableHead className="text-black">Зарагдсан</TableHead>
                  <TableHead className="text-black"> Нэмсэн огноо</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productLists.map((productList) => {
                  return (
                    <TableRow className="text-[#3F4145]" key={productList.id}>
                      <TableCell className="pl-5">
                        <input type="checkbox"></input>
                      </TableCell>
                      <TableCell className="font-medium flex px-6 py-4 gap-2">
                        <div className="relative w-12 h-12">
                          <Image
                            src={productList.Бүтээгдэхүүн.image}
                            fill
                            alt="t-shirt"
                            className="rounded-full"
                          />
                        </div>
                        <div className="grid">
                          <h1>{productList.Бүтээгдэхүүн.title}</h1>
                          <p>{productList.Бүтээгдэхүүн.id}</p>
                        </div>
                      </TableCell>
                      <TableCell className="">{productList.Ангилал}</TableCell>
                      <TableCell>{productList.Үнэ}</TableCell>
                      <TableCell>{productList.Үлдэгдэл}</TableCell>
                      <TableCell>{productList.Зарагдсан}</TableCell>
                      <TableCell className="">
                        {productList.НэмсэнОгноо}
                      </TableCell>
                      <TableCell className="flex gap-3 text-gray-400">
                        <HiOutlineTrash className="w-5 h-5" />
                        <LuPencilLine className="w-5 h-5" />
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
