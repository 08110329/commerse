'use client';

import Link from "next/link";


export default function Home() {


  interface Path {
    name: string;
    path: string;
  }
  const paths: Path[] = [
    {
      name: "Хэрэглэгчийн хэсэг",
      path: "/users/UserInfo",
    },
    {
      name: "Захиалгын түүх",
      path: "/users/orderHistory",
    },
  ];



  return (
    <div className="flex py-24 px-96 bg-[#F4F4F5] justify-center ">
      <div className="container flex justify-center">
        <div className=" h-screen">
          <div className="w-full h-fit flex gap-5 pb-24 pt-28 justify-center text-black">
            <div className="flex flex-col gap-1 ">
              {paths.map((path, index) => (
                <Link key={index} href={path.path}>
                  <button className="w-[244px] h-9 hover:bg-white rounded-2xl grid justify-start items-center pl-4">
                    {path.name}
                  </button>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-6 justify-end">
              <h4 className="border-b-2 pb-6 text-xl font-medium">
                Хэрэглэгчийн хэсэг
              </h4>
              <div className="grid gap-8">
                <div className="grid gap-2">
                  <p>Овог:</p>
                  <input
                    className="border w-[820px] h-7 rounded-xl pl-4"
                    type=" text"
                  ></input>
                </div>
                <div className="grid gap-2">
                  <p>Нэр:</p>
                  <input
                    className="border w-[820px] h-7 rounded-xl pl-4"
                    type=" text"
                  ></input>
                </div>
                <div className="grid gap-2">
                  <p>Утасны дугаар:</p>
                  <input
                    className="border w-[820px] h-7 rounded-xl pl-4"
                    type=" text" 
                  ></input>
                </div>
                <div className="grid gap-2">
                  <p>Имейл хаяг:</p>
                  <input
                    className="border w-[820px] h-7 rounded-xl pl-4"
                    type=" text" 
                  ></input>
                </div>
                <div>
                  <p>Хаяг:</p>
                  <textarea
                    className="border w-[820px] h-20 rounded-xl pl-4 pt-2"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-[#2563EB] text-white hover:bg-black w-[172px] h-[36px] rounded-2xl "
                >
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
