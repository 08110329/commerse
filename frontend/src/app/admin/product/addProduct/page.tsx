"use client";

import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { HynaltinSambar } from "@/app/admin/components/HynaltinSambar";
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
            <p className="py-3 text-base font-normal">Бүтээгдэхүүн нэмэх</p>
          </div>
          <div className="flex gap-5 px-6">
            <div>
              <div className="flex flex-col flex-1 h-full bg-white px-6 py-6 rounded-3xl gap-4">
                <div className="grid gap-2">
                  <label>Бүтээгдэхүүний нэр</label>
                  <input
                    placeholder="Нэр"
                    className="border bg-gray-100 rounded-md px-2 py-2"
                  ></input>
                </div>
                <div className="grid gap-2">
                  <label>Нэмэлт мэдээлэл</label>
                  <input
                    placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                    className="border bg-gray-100 rounded-md px-4 py-4"
                  ></input>
                </div>
                <div className="grid gap-2">
                  <label>Барааны код</label>
                  <input
                    placeholder="#12345678"
                    className="border bg-gray-100 rounded-md px-2 py-2"
                  ></input>
                </div>
              </div>
            </div>

            <div className="flex-1 grid gap-5">
              <div className="flex flex-col w-full h-fit bg-white gap-5 text-black rounded-3xl border"></div>
              <div className="flex flex-col w-full h-fit bg-white gap-5 text-black rounded-3xl border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
