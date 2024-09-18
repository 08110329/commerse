"use client";

import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { HynaltinSambar } from "../components/HynaltinSambar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex justify-center ">
      <div className="w-full h-screen container flex bg-gray-50">
        <div>
          <HynaltinSambar />
        </div>
        <div className="flex flex-col w-full gap-8">
        <div className="flex h-fit bg-white text-black px-4 py-2 items-center gap-4">
        <IoIosArrowBack />
          <p>Захиалгын дэлгэрэнгүй</p>
          </div>
        <div className="flex w-full h-fit">
        <div className="flex-1 bg- white border">
        <div className="flex text-black justify-between">
        <div className="flex flex-col ">
            <p className="text-base font-normal">Захиалгын ID дугаар: </p>
            <p className="text-base font-semibold">#12345678</p>
        </div>
        <button className="flex gap-3 items-center bg-gray-200 px-4 py-1 rounded-xl">
        Бэлтгэгдэж байна
        <IoIosArrowDown />
        </button>
        </div>
        <div className="flex flex-col text-black">
            <p>Захиалагч: Хувь хүн </p>
            <div className="flex ">
              <p>Solongo Zoloo-</p>  
              <p>Zoloosoko0526@gmail.com, 88556061</p>  
            </div>
        </div>
        <div className="flex border">
            {Details.map((Detail)=> {
                
            })}
            <div className="relative w-[180px] h-[156px]">
                <Image src={"/Logo/backhoodie.png"} fill alt="hoodie"/>
            </div>
            <div className="border py-4 px-6 w-full flex flex-col gap-5">
            <div className="text-black flex flex-col gap-2">
                <h1 className="text-2xl font-bold">WOMEN'S HORSEBIT MULE</h1>
                <div className="flex flex-col">
                  <p>2024-01-20</p>
                <p>Бүтээгдэхүүний ID: 30349049903</p>  
                </div>
            </div>
            <div className="text-black flex justify-between border">
                <div className="flex">
                 <p>Тоо ширхэг: 3</p>
                <p>* ₮225,700</p>   
                </div>
                <span> ₮677,100</span>
            </div>
            </div>
        </div>
        </div>
        <div className="flex-1 bg- white border">
        <div></div>
        <div></div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
