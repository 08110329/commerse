"use client";

import Link from "next/link";

export const UserData = () => {
    interface Path {
        name: string;
        path: string;
      }
      const paths: Path[] = [
        {
          name: "Буцах",
          path: "/buySteps/caseOne",
        },
        {
          name: "Төлбөр төлөх",
          path: "/buySteps/pay",
        },
      ];
    return (
        <div className="w-[623px] h-[614] p-8 grid gap-9 bg-white rounded-xl text-black">
            <p className="font-semibold text-lg">
              2. Хүргэлтийн мэдээлэл оруулах
            </p>
            <div className="grid gap-6">
             
                  <div className="grid gap-2" >
                    <p></p>
                    <input className="border h-7 rounded-md"></input>
                    <p className="text-[#71717A] text-sm font-normal">
                     
                    </p>
                  </div>
               
            </div>
            <div className="flex justify-between text-black">
              {paths.map((path, index) => (
                <Link key={index} href={path.path}>
                  <button className="border px-9 py-2 rounded-3xl hover:bg-[#2563EB] hover:text-white text-base font-medium">
                    {path.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
    )
}