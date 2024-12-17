"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { StarIcon } from "./StarIcon";
import { Common } from "./Common";
import { useParams } from "next/navigation";
import { backend } from "@/axios";

interface Products {
  _id: string;
  title: string;
  price: string;
  image: string[];
  description: string;
  size: string[];
  color: string;
  productCode: string;
  torolId: string;
  quantity: number;
}

export const ProductPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<Products[]>([]);
  const [selectImage, setSelectImage] = useState<string | null>(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await backend.get(`/getProduct/${id}`);
        setProducts([data.product]);
        setSelectImage(data.product.image[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      getData();
    }
  }, [id]);

  const handleClick = (image: string) => {
    setSelectImage(image);
  };

  return (
      <div className="container flex bg-[#F4F4F5] justify-center">
        <div className="flex gap-12">
          {/* Small Images */}
          <div className="flex gap-6 sticky top-0 h-fit items-center text-black">
            <div className="flex flex-col gap-2">
              {products.map((product) => (
                <div
                  className="w-[100px] cursor-pointer"
                  key={product?._id}
                  onClick={() => handleClick(product.image[0])}
                >
                  <div className="relative w-[100px] h-[100px]">
                    <Image
                      src={product?.image[0]}
                      fill
                      alt={`Product ${product?._id}`}
                      className="rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative w-[550px] h-[700px]">
              {selectImage ? (
                <Image
                  src={selectImage} // Display the selected image
                  fill
                  alt="Selected Product"
                  className="rounded-2xl"
                />
              ) : (
                <div className="text-center text-black">Loading image...</div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="pt-28 flex flex-col gap-20 relative justify-between">
            <div className="pr-20 grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-5 text-black">
                  <div className="border rounded-2xl w-fit px-3 py-1 text-md font-semibold border-[#2563EB]">
                    <p>шинэ</p>
                  </div>
                  <div className="text-4xl font-bold flex items-center gap-4">
                    <p>{products[0]?.title || "Loading..."}</p>
                    <CiHeart className="w-8 h-8" />
                  </div>
                  <p className="font-normal text-xl text-black">
                    {products[0]?.description || "Loading description..."}
                  </p>
                </div>

                {/* Size Selection */}
                <div className="font-normal text-lg grid gap-2 text-black">
                  <p>Хэмжээний заавар</p>
                  <div className="flex gap-2">
                    {products[0]?.size.map((number) => (
                      <div
                        className="border rounded-full w-9 h-9 flex justify-center items-center text-sm font-normal border-black hover:bg-black hover:text-white"
                        key={number}
                      >
                        <p>{number}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity Selection */}
                <div className="flex gap-3 items-center text-black">
                  <div className="border rounded-full w-9 h-9 flex justify-center items-center border-black hover:bg-gray-200 hover:border-gray-400">
                    <p>-</p>
                  </div>
                  <p>1</p>
                  <div className="border rounded-full w-9 h-9 flex justify-center items-center border-black hover:bg-gray-200 hover:border-gray-400">
                    <p>+</p>
                  </div>
                </div>
              </div>

              {/* Price and Add to Cart */}
              <div className="flex flex-col gap-3 w-48 text-black">
                <p className="text-2xl font-bold">
                  {products[0]?.price || "0"}₮
                </p>
                <button className="text-base font-medium bg-[#2563EB] h-9 rounded-3xl text-white">
                  Сагсанд нэмэх
                </button>
              </div>
            </div>

            {/* Reviews */}
            <div className="grid gap-3">
              <div>
                <div className="flex gap-4 text-xl font-normal text-black">
                  <p>Үнэлгээ</p>
                  <button
                    className="text-[#2563EB] border-b-[1.5px] border-[#2563EB]"
                    onClick={() => setClick(!click)}
                  >
                    <p>{click ? "bugdiig huraah" : " бүгдийг харах"}</p>
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
                <Common productId={id as string} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
