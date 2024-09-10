"use client";

import { pLists } from "@/app/caseOne/mockData";
import Image from "next/image";

export const Search = () => {
  return (
    <div className="border w-screen h-screen bg-black opacity-25 flex justify-center">
      <div className="h-fit px-8 py-8 rounded-xl bg-white ">
        <div className="pb-6 grid gap-6 w-fit">
          {pLists.map((pList) => {
            return (
              <div className="flex gap-6 h-32 " key={pList.id}>
                <div className="relative w-32 ">
                  <Image
                    src={pList.image}
                    fill
                    alt="t-shirt"
                    className="rounded-md object-cover"
                  />
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
