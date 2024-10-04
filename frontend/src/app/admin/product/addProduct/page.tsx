"use client";

import { IoIosArrowBack } from "react-icons/io";
import { ProductNemh } from "./ProductNemh";
import { UndsenUneNemhCart } from "./UndsenUneNemhCart";
import { ProductZuragNemh } from "./ProductZuragNemh";
import { Angilal } from "./Angilal";
import { HmjeeNemh } from "./HmjeeNemh";
import { TagNmeh } from "./TagNmeh";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-50">
      <div className="w-full h-fit container flex ">
        <div className="flex flex-col w-full gap-8 ">
          <div className="w-screen border flex h-fit bg-white text-black px-4 py-2 items-center gap-4">
            <IoIosArrowBack />
            <p className="py-3 text-base font-normal">Бүтээгдэхүүн нэмэх</p>
          </div>
          <div className="flex gap-5 px-6">
            <div className="flex flex-col flex-1 gap-6">
              <ProductNemh />
              <ProductZuragNemh />
              <UndsenUneNemhCart />
            </div>
            <div className="flex-1 grid gap-5">
              <Angilal />
              <HmjeeNemh />
              <TagNmeh />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
