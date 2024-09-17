"use client";

import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="flex bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className=" h-screen">
          <div className="w-full grid gap-10 pt-28 justify-center ">
            <div className="grid gap-6">
              <h1 className="font-semibold text-2xl flex justify-center">
                Нууц үг сэргээх
              </h1>
              <div className="grid gap-5">
                <input
                  placeholder=" Имэйл хаяг оруулах"
                  className="w-96 h-9 border rounded-2xl pl-2"
                ></input>
                <button className="border text-[#2563EB] py-2 rounded-2xl bg-white border-[#2563EB] hover:bg-[#2563EB] hover:text-white h-9">
                  Илгээх
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
