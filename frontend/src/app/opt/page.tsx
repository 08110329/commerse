"use client";

import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full m-auto h-[100vh]">
      <Header />
      <div className="w-full h-fit grid gap-10 pb-24 pt-28 justify-center ">
        <div className="grid gap-6">
          <h1 className="font-semibold text-2xl flex justify-center">
            Нууц үг сэргээх
          </h1>
          <div className="grid gap-5">
            <input
              placeholder="Шинэ нууц үг"
              className="w-96 h-9 border rounded-md pl-2"
            ></input>
            <input
              placeholder="Шинэ нууц үг давтах"
              className="w-96 h-9 border rounded-md pl-2"
            ></input>
            <ul className="text-xs font-medium grid gap-1">
              <li>Том үсэг орсон байх</li>
              <li>Жижиг үсэг орсон байх</li>
              <li>Тоо орсон байх</li>
              <li>Тэмдэгт орсон байх</li>
            </ul>
            <button className="bg-black text-white h-9 rounded-md">
              Үүсгэх
            </button>
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
}