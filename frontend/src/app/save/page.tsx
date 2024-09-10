"use client";
import { pLists } from "../caseOne/mockData";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex py-24 h-screen px-96 bg-[#F4F4F5] justify-center ">
      <div className="container w-[590px] h-fit flex flex-col justify-center border gap-4">
        <div className="flex text-xl font-bold gap-1">
          <p>Хадгалсан бараа </p>
          <p className="text-[#5E6166]">(3)</p>
        </div>
        <div className="grid gap-6 ">
          {pLists.map((pList) => {
            return (
              <div
                className="flex gap-6 h-32 bg-white p-6 rounded-2xl"
                key={pList.id}
              >
                <div className="relative w-32 ">
                  <Image
                    src={pList.image}
                    fill
                    alt="t-shirt"
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="font-normal text-base">{pList.title}</p>

                  <p className="text-base font-bold">{pList.price}</p>
                </div>
                <button className=" w-6 h-6">
                  <FaRegHeart />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
