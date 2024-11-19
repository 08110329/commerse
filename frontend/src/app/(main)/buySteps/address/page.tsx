"use client";

import Image from "next/image";
import { pLists, registerss } from "@/mockData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { backend } from "@/axios";

interface Products {
  _id: string;
  title: string;
  price: string;
  image: string[];
  description: string;
  size: string;
  color: string;
  productCode: string;
  torolId: string;
  quantity: number;
}

interface Package {
  _id: string;
  user: string;
  products: Products;
  image_link: string;
  title: string;
  price: string;
  quantity: number;
  amount: number;
}

export default function Home() {
  const [rooms, setRooms] = useState<Package[]>([]);

  interface Path {
    name: string;
    path: string;
  }
  const paths: Path[] = [
    {
      name: "Буцах",
      path: "/buySteps/caseOne",
    },
    {
      name: "Төлбөр төлөх",
      path: "/buySteps/pay",
    },
  ];

  useEffect(() => {
    const getPackage = async () => {
      try {
        const res = await backend.get("/getPackage", {
          headers: {
            Authorization: `Bearer ${"token"}`,
          },
        });
        const updatedPackages = res.data.packagies.map((pkg: Package) => ({
          ...pkg,
          quantity: 1, // Set default quantity
        }));
        setRooms(updatedPackages);
      } catch (error) {
        console.error("Мэдээлэл татахад алдаа гарлаа:", error);
      }
    };
    getPackage();
  }, []);
  return (
    <div className="container bg-[#F4F4F5] m-auto">
      <div className="h-fit grid gap-16 justify-center py-8">
        <div className="flex items-center mt-28 justify-center text-black">
          <div className="border rounded-full w-8 h-8 flex justify-center items-center border-black  hover:bg-[#2563EB] hover:text-white hover:border-none">
            <p>1</p>
          </div>
          <div className="border h-[1px] w-20 border-black"></div>
          <div className="border rounded-full w-8 h-8 flex justify-center items-center border-black  hover:bg-[#2563EB] hover:text-white hover:border-none">
            <p>2</p>
          </div>
          <div className="border h-[1px] w-20 border-black"></div>
          <div className="border rounded-full w-8 h-8 flex justify-center items-center border-black  hover:bg-[#2563EB] hover:text-white hover:border-none">
            <p>3</p>
          </div>
        </div>
        <div className="flex gap-5 h-screen">
          <div className=" bg-white rounded-xl w-[333px] h-[448px]">
            <div className="grid gap-6 px-6 pt-8">
              <div className="grid rounded-2xl gap-6">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center font-bold text-xl text-black">
                    <p className="text-base font-bold">1.</p>
                    <p className="text-base font-bold">Сагс</p>
                    <p className="text-base font-bold text-[#71717A]">(4)</p>
                  </div>
                </div>
                <div className="border-b-2 border-dashed grid gap-6 pb-6">
                  {rooms.map((room) => {
                    return (
                      <div className="flex gap-6" key={room._id}>
                        <div className="w-20 h-20  overflow-hidden rounded-md">
                          <div className="relative w-[120px] h-[160px]">
                            <Image src={room.image_link} fill alt="t-shirt" />
                          </div>
                        </div>
                        <div className="flex flex-col text-black">
                          <p className="font-normal text-base">{room.title}</p>
                          <p className="font-normal text-base">{room.amount}</p>
                          <p className="text-base font-bold">{room.price}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between text-black">
                  <p className="text-base font-normal">Нийт төлөх дүн:</p>
                  <span className="text-lg font-bold">360’000₮</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[623px] h-[614] p-8 grid gap-9 bg-white rounded-xl text-black">
            <p className="font-semibold text-lg">
              2. Хүргэлтийн мэдээлэл оруулах
            </p>
            <div className="grid gap-6">
              {registerss.map((registers) => {
                return (
                  <div className="grid gap-2" key={registers.id}>
                    <p>{registers.title}</p>
                    <input className="border h-7 rounded-md"></input>
                    <p className="text-[#71717A] text-sm font-normal">
                      {registers.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between text-black">
              {paths.map((path, index) => (
                <Link key={index} href={path.path}>
                  <button className="border px-9 py-2 rounded-3xl hover:bg-[#2563EB] hover:text-white text-base font-medium">
                    {path.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
