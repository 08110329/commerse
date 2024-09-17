"use client";

import { FacePage } from "@/components/FacePage";
import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="flex bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className="h-screen ">
          <div className="w-full grid gap-12 pt-28 justify-center ">
            <div className="grid gap-6">
              <h1 className="font-semibold text-2xl flex justify-center">
                Нэвтрэх
              </h1>
              <div className="grid gap-5">
                <input
                  placeholder=" Имэйл хаяг"
                  className="w-96 h-9 border rounded-2xl pl-2"
                ></input>
                <input
                  placeholder=" Нууц үг"
                  className="w-96 h-9 border rounded-2xl pl-2"
                ></input>
                <div className="flex justify-center border border-[#2563EB] hover:bg-[#2563EB] hover:text-white text-[#2563EB] bg-white h-9 rounded-2xl">
                  <button>Нэвтрэх</button>
                </div>

                <button className="underline">Нууц үг мартсан</button>
              </div>
            </div>
            <div className="flex justify-center border text-[#2563EB] py-2 rounded-2xl bg-white border-[#2563EB] hover:bg-[#2563EB] hover:text-white">
              <button className="font-medium text-sm">Бүртгүүлэх</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
