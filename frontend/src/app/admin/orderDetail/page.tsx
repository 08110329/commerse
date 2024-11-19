"use client";

import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { Details } from "@/mockData";
import { HurgeltiinNews } from "../components/HurgeltiinNews";

export default function Home() {
  return (
        <div className="flex m-auto container bg-gray-50 flex-col gap-8 ">
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
            <HurgeltiinNews />
          </div>
        </div>
  );
}
