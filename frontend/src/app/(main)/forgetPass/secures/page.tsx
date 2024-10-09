"use client";

import Image from "next/image";

export default function Home() {
  const counts = [
    {
      id: 1,
      number: "4",
    },
    {
      id: 2,
      number: "2",
    },
    {
      id: 3,
      number: "1",
    },
    {
      id: 4,
      number: "3",
    },
  ];
  return (
    <div className="flex py-24 px-96 bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className="h-screen">
          <div className="w-full grid gap-10 pt-28 justify-center ">
            <div className="grid gap-6 ">
              <div className="relative w-20 h-20 left-[215px]">
                <Image src={"/Logo/Group 1 (2).png"} fill alt="message" />
              </div>
              <div className="grid gap-2">
                <p className="font-bold text-base flex justify-center">
                  Баталгаажуулах
                </p>
                <p className="font-normal text-base">
                  “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна
                  уу
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                {counts.map((count) => {
                  return (
                    <p
                      className=" w-14 h-16 rounded-md text-2xl font-semibold flex justify-center items-center bg-[#F4F4F5]"
                      key={count.id}
                    >
                      {count.number}
                    </p>
                  );
                })}
              </div>
            </div>
            <button className="underline text-[#71717A]">
              Дахин илгээх (30)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
