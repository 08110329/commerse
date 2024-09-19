"use client";

import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { HynaltinSambar } from "../components/HynaltinSambar";
import Image from "next/image";
import { Details } from "./mockData";
import { LiaCarSideSolid } from "react-icons/lia";

export default function Home() {
  return (
    <div className="h-screen flex justify-center ">
      <div className="w-full h-screen container flex bg-gray-50">
        <div>
          <HynaltinSambar />
        </div>
        <div className="flex flex-col w-full gap-8 ">
          <div className="flex h-fit bg-white text-black px-4 py-2 items-center gap-4">
            <IoIosArrowBack />
            <p className="py-3 text-base font-normal">Захиалгын дэлгэрэнгүй</p>
          </div>
          <div className="flex gap-5 px-6">
            <div className="flex flex-1 h-full bg-white px-6 pt-6 rounded-3xl">
              <div className="flex-1 bg- white grid gap-6 pb-32">
                <div className="flex text-black justify-between">
                  <div className="flex flex-col ">
                    <p className="text-base font-normal">
                      Захиалгын ID дугаар:
                    </p>
                    <p className="text-base font-semibold">#12345678</p>
                  </div>
                  <button className="flex gap-3 items-center bg-gray-200 px-4 rounded-full">
                    Бэлтгэгдэж байна
                    <IoIosArrowDown />
                  </button>
                </div>
                <div className="flex flex-col text-black">
                  <p>Захиалагч: Хувь хүн </p>
                  <div className="flex ">
                    <p className="text-base font-semibold">Solongo Zoloo-</p>
                    <p>Zoloosoko0526@gmail.com, 88556061</p>
                  </div>
                </div>
                {Details.map((Detail) => {
                  return (
                    <div className="flex " key={Detail.id}>
                      <div className="relative w-[190px] h-[176px] ">
                        <Image
                          src={Detail.image}
                          fill
                          alt="hoodie"
                          className="rounded-l-2xl"
                        />
                      </div>
                      <div className=" bg-gray-100 py-4 px-6 w-full flex flex-col gap-5 rounded-r-2xl	">
                        <div className="text-black flex flex-col gap-2">
                          <h1 className="text-2xl font-bold">{Detail.title}</h1>
                          <div className="flex flex-col">
                            <p>{Detail.date}</p>
                            <p>{Detail.productId}</p>
                          </div>
                        </div>
                        <div className="text-black flex justify-between ">
                          <div className="flex">
                            <p>{Detail.count}</p>
                            <p>{Detail.price}</p>
                          </div>
                          <span>{Detail.amount}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 grid gap-5">
              <div className="flex flex-col w-full h-fit bg-white gap-5 text-black rounded-3xl border">
                <p className="pt-5 px-6 text-base font-normal">
                  Хүргэлтийн мэдээлэл
                </p>
                <div className="pt-6 pb-12 px-6 border-t-2">
                  <p className="text-base font-normal">Гэр</p>
                  <p className="text-base font-semibold">
                    Улаанбаатар, Сонгинохайрхан дүүрэг, 1-р хороо, 14r bair 8r
                    orts 6r darvar
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full h-fit bg-white gap-5 text-black rounded-3xl border">
                <p className="pt-5 px-6 text-base font-normal">
                  Төлбөрийн мэдээлэл
                </p>
                <div className="px-6 py-6 border-t-2 grid gap-2">
                  <p className="text-base font-normal">Бүтээгдэхүүн</p>
                  <div className="grid gap-4">
                    <div className="flex justify-between">
                      <div className="flex gap-1 text-base font-semibold">
                        <p>WOMEN'S HORSEBIT MULE Women’s horsebit mule</p>
                        <p>x2</p>
                      </div>
                      <p className="text-base font-semibold">₮677,100</p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-1 text-base font-semibold">
                        <p>WOMEN'S HORSEBIT MULE Women’s horsebit mule</p>
                        <p>x2</p>
                      </div>
                      <p className="text-base font-semibold">₮677,100</p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-10 items-center ">
                        <p className="text-sm font-semibold"> Хүргэлт</p>
                        <LiaCarSideSolid className="w-6 h-6" />
                      </div>
                      <p className="text-base font-semibold">₮ 5,000</p>
                    </div>
                    <p className="border mt-4"></p>
                    <div className="flex justify-between text-base font-semibold">
                      <p>Нийт төлсөн дүн</p>
                      <p className="text-lg">₮807,800</p>
                    </div>
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
