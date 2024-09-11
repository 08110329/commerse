"use client";

import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";

export default function Home() {
  const registerss = [
    { id: 1, title: "Овог:" },
    { id: 2, title: "Нэр:" },
    { id: 3, title: "Утасны дугаар:" },
    { id: 4, title: "Имэйл хаяг:" },
  ];
  return (
    <div className="flex py-24 px-96 bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className=" h-screen">
          <div className="w-full h-fit flex gap-5 pb-24 pt-28 justify-center">
            <div className="flex flex-col gap-1 ">
              <button className="w-[244px] h-9 hover:bg-white rounded-2xl grid justify-start items-center pl-2">
                Хэрэглэгчийн хэсэг
              </button>
              <button className="w-[244px] h-9 hover:bg-white rounded-2xl grid justify-start items-center pl-2">
                Захиалгын түүх
              </button>
            </div>
            <div className="flex flex-col gap-6 justify-end">
              <h4 className="border-b-2 pb-6 text-xl font-medium">
                Хэрэглэгчийн хэсэг
              </h4>
              <div className="grid gap-8">
                {registerss.map((registers) => {
                  return (
                    <div className="grid gap-2" key={registers.id}>
                      <p>{registers.title}</p>
                      <input className="border w-[820px] h-7 rounded-2xl"></input>
                    </div>
                  );
                })}
                <div>
                  <p>Хаяг:</p>
                  <input
                    placeholder=""
                    className="border w-[820px] h-20 rounded-2xl"
                  ></input>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#2563EB] text-white hover:bg-black w-[172px] h-[36px] rounded-2xl ">
                  Мэдээлэл шинэчлэх
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
