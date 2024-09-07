"use client";

import { FacePage } from "@/components/FacePage";
import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full m-auto h-[100vh]">
      <Header />
      <div className="w-full grid gap-10 pt-28 justify-center ">
        <div className="flex justify-end">
          <button className="font-medium text-sm">Бүртгүүлэх</button>
        </div>
        <div className="grid gap-6">
          <h1 className="font-semibold text-2xl flex justify-center">
            Нэвтрэх
          </h1>
          <div className="grid gap-5">
            <input
              placeholder="Нэр"
              className="w-96 h-9 border rounded-md pl-2"
            ></input>
            <input
              placeholder="Нууц үг"
              className="w-96 h-9 border rounded-md pl-2"
            ></input>
            <button className="bg-black text-white h-9 rounded-md">
              Нэвтрэх
            </button>
            <button className="underline">Нууц үг мартсан</button>
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
}
