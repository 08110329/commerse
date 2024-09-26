"use client";

import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { AiOutlinePicture } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-50">
      <div className="w-full h-fit container flex ">
        <div className="flex flex-col w-full gap-8 ">
          <div className="w-screen border flex h-fit bg-white text-black px-4 py-2 items-center gap-4">
            <IoIosArrowBack />
            <p className="py-3 text-base font-normal">Бүтээгдэхүүн нэмэх</p>
          </div>
          <div className="flex gap-5 px-6">
            <div className="flex flex-col flex-1 gap-6">
              <div className="flex flex-col h-full bg-white px-6 py-6 rounded-3xl gap-4 text-black">
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
              <div className="flex flex-col flex-1 h-full bg-white px-6 py-6 rounded-3xl gap-4 text-black">
                <h1>Бүтээгдэхүүний зураг</h1>
                <div className="grid grid-cols-4 grid-rows-1 w-full h-[125px] gap-2">
                  <div className="border border-dashed flex justify-center items-center rounded-xl">
                    <AiOutlinePicture className="w-6 h-6" />
                  </div>
                  <div className="border border-dashed flex justify-center items-center rounded-xl">
                    <AiOutlinePicture className="w-6 h-6" />
                  </div>
                  <div className="border border-dashed flex justify-center items-center rounded-xl">
                    <AiOutlinePicture className="w-6 h-6" />
                  </div>
                  <div className=" flex justify-center items-center">
                    <GrAddCircle className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 h-full bg-white px-6 py-6 rounded-3xl gap-4 text-black">
                <div className="flex-1 grid gap-2">
                  <h1>Үндсэн үнэ</h1>
                  <input
                    placeholder="Үндсэн үнэ"
                    className="border w-full px-4 py-2 rounded-md bg-gray-100"
                  ></input>
                </div>
                <div className="flex-1 grid gap-2">
                  <h1>Үлдэгдэл тоо ширхэг</h1>
                  <input
                    placeholder="Үлдэгдэл тоо ширхэг"
                    className="border w-full px-4 py-2 rounded-md bg-gray-100"
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex-1 grid gap-5">
              <div className="flex flex-col w-full h-fit bg-white gap-5 text-black rounded-3xl border px-6 py-6">
                <div className="w-full h-fit">
                  <p>Ерөнхий ангилал</p>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Сонгох" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full h-fit">
                  <p>Дэд ангилал</p>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Сонгох" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col w-full h-fit bg-white gap-5 text-black rounded-3xl border px-6 py-6">
                <h1>Төрөл</h1>
                <div className="grid gap-2">
                  <div className="flex gap-2 items-center">
                    <p>Өнгө</p>
                    <GrAddCircle className="w-4 h-4" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>Хэмжээ</p>
                    <GrAddCircle className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <button className="border py-2.5 px-4 rounded-xl">
                    Төрөл нэмэх
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full h-fit bg-white gap-2 text-black rounded-3xl border px-6 py-6">
                <label>Таг</label>
                <input
                  placeholder="Таг нэмэх..."
                  className="border bg-gray-100 rounded-md px-2 py-2"
                ></input>
                <p className="text-gray-500">
                  Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
