"use client";

import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full m-auto h-[100vh]">
      <Header />
      <div className="w-screen h-screen">
        <div className="w-full grid gap-10 pt-28 justify-center ">
        <div className="grid gap-6">
          <h1 className="font-semibold text-2xl flex justify-center">
            Нууц үг сэргээх
          </h1>
          <div className="grid gap-5">
            <input
              placeholder="Имэйл хаяг оруулах"
              className="w-96 h-9 border rounded-md pl-2"
            ></input>
            <button className="bg-black text-white h-9 rounded-md">
              Илгээх
            </button>
          </div>
        </div>
      </div>
      </div>
      
      <Footers />
    </div>
  );
}
