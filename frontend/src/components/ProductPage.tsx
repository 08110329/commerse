"use client";

import Image from "next/image";
import { useState } from "react";
import { CiHeart, CiStar } from "react-icons/ci";
import { StarIcon } from "./StarIcon";
import { AllSee } from "./AllSee";
import { Button } from "./ui/button";
import { numberss, product, productsImage } from "./mockdata";
import { Common } from "./Common";

export const ProductPage = () => {
  const [selectImage, setSelectImage] = useState(productsImage[0]); // jijig zurgn dree dathad tom bolgohiin tuld set ashiglaaad
  const [click, setClick] = useState(false);

  const handleClick = (image: product) => {
    setSelectImage(image);
  }; /// handleclick deer image n productiinh gd setselecteeeparamtr dr n image shuu gj ogood

  return (
    <div className="flex bg-[#F4F4F5] justify-center ">
      <div className="container flex ">
        <div className="flex gap-12">
          <div className="flex gap-6 sticky top-0 h-fit items-center">
            <div className="flex flex-col gap-2">
              {productsImage.map((productImage) => (
                <div
                  className="w-[100px] cursor-pointer"
                  key={productImage.id}
                  onClick={() => handleClick(productImage)} // jijig zurg dr darh ued handleclick funchion ajilaad maplsn product img gj paramtr dr bichj ogno
                >
                  <div className="relative w-[100px] h-[100px]">
                    <Image
                      src={productImage.img}
                      fill
                      alt={`hoodie ${productImage.id}`}
                      className="rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative w-[550px] h-[700px] ">
              <Image
                src={selectImage.img} /// tgeed tom zueg dree oorchilsn selectimagiin img shuuu gd ogno
                fill
                alt="Selected Product"
                className="rounded-2xl"
              />
            </div>
          </div>

          <div className="pt-28 flex flex-col gap-20 relative justify-between">
            <div className="pr-20 grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-5">
                  <div className="border rounded-2xl w-fit px-3 py-1 text-md font-semibold border-[#2563EB]">
                    <p>шинэ</p>
                  </div>
                  <div className="text-4xl font-bold flex items-center gap-4">
                    <p>Wildflower Hoodie</p>
                    <CiHeart className="w-8 h-8" />
                  </div>
                  <p className="font-normal text-xl">
                    Зэрлэг цэцгийн зурагтай даавуун материалтай цамц
                  </p>
                </div>
                <div className="font-normal text-lg grid gap-2">
                  <p>Хэмжээний заавар</p>
                  <div className="flex gap-2">
                    {numberss.map((number) => (
                      <div
                        className="border rounded-full w-9 h-9 flex justify-center items-center text-sm font-normal border-black hover:bg-black hover:text-white"
                        key={number.id}
                      >
                        <p>{number.size}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="border rounded-full w-9 h-9 flex justify-center items-center border-black hover:bg-gray-200 hover:border-gray-400">
                    <p>-</p>
                  </div>
                  <p>1</p>
                  <div className="border rounded-full w-9 h-9 flex justify-center items-center border-black hover:bg-gray-200 hover:border-gray-400">
                    <p>+</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-48">
                <p className="text-2xl font-bold">120’000₮</p>
                <button className="text-base font-medium bg-[#2563EB] h-9 rounded-3xl text-white">
                  Сагсанд нэмэх
                </button>
              </div>
            </div>
            <div className="grid gap-3">
              <div className={`${click ? "hidden" : "visible"}`}>
                <div className="flex gap-4 text-xl font-normal">
                  <p>Үнэлгээ</p>
                  <button
                    className="text-[#2563EB] border-b-[1.5px] border-[#2563EB]"
                    onClick={() => setClick(!click)}
                  >
                    бүгдийг харах
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <StarIcon />
                  </div>
                  <div className="font-medium text-lg flex">
                    <p className="font-semibold text-lg">4.6</p>
                    <p className="text-[#71717A]">(24)</p>
                  </div>
                </div>
              </div>
              <div className={`grid gap-3 ${click ? "visible" : "hidden"}`}>
                <AllSee />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
