"use client";

import { backend } from "@/axios";
import { pLists } from "@/mockData";
import Image from "next/image";
import { useEffect } from "react";

export const Search = () => {
  return (
    <div className="border w-screen h-screen bg-black bg-opacity-25 flex justify-center">
      <div className="h-fit px-8 py-8 rounded-xl bg-white ">
        <div className="pb-6 grid gap-6 w-fit">
          {pLists.map((pList) => {
            return (
              <div className="flex gap-6 text-black" key={pList.id}>
                <div className=" w-[90px] h-[80px] overflow-hidden rounded-2xl">
                  <div className="relative w-32 h-40">
                    <Image src={pList.image} fill alt="t-shirt" />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="w-[414px]">
                    <p className="font-normal text-base">{pList.title}</p>
                  </div>
                  <p className="text-base font-bold">{pList.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
