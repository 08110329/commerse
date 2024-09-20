"use client";

import { HynaltinSambar } from "@/app/admin/components/HynaltinSambar";

import { GrAddCircle } from "react-icons/gr";

export default function Home() {
  return (
    <div className="h-screen flex justify-center ">
      <div className="w-full h-fit container flex bg-gray-50">
        <div className="flex flex-col w-full gap-8 items-center pt-[48px]">
          <div className="flex flex-col w-[729px] h-fit  bg-white gap-5 text-black rounded-3xl px-6 py-6">
            <h1>Тохиргоо</h1>
            <div className="grid gap-2">
              <div className="flex gap-2 justify-between border px-2 py-2 rounded-xl items-center">
                <p>Баннер зураг </p>
                <button className="border rounded-md px-2 py-1">солих</button>
              </div>
              <div className="flex gap-2 justify-between border px-2 py-2 rounded-xl items-center">
                <p>Эхний бүтээгдэхүүнээ нэмнэ үү </p>
                <button className="border rounded-md px-2 py-1">
                  Бүтээгдэхүүн нэмэх
                </button>
              </div>
              <div className="flex gap-2 justify-between border px-2 py-2 rounded-xl items-center">
                <p>Хүргэлтийг тохируулна уу</p>
                <button className="border rounded-md px-2 py-1">
                  Хүргэлт тохируулах
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
