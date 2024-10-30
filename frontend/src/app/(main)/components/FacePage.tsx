"use client";

import { backend } from "@/axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useUser } from "./providers/AuthProvider";
import { create } from "domain";
import { FaHeart } from "react-icons/fa";

interface Products {
  _id: string;
  title: string;
  price: string;
  image: string[];
  description: string;
  size: string;
  color: string;
  productCode: string;
  torolId: string;
  quantity: number;
}



export const FacePage = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const { user } = useUser();
  const [savedProducts, setSavedProducts] = useState<string[]>([]); // Хадгалсан бүтээгдэхүүний ID-уудыг хадгалах

  useEffect(() => {
    const getData = async () => {
      const { data } = await backend.get("/getProducts");
      // console.log(data.products);
      setProducts(data.products);
    };

    getData();
  }, []);

  const createSave = async (productId: string) => {
    try {
      await backend.post("/createSave", {
        user: user.user?.id,
        products: productId,
      });
      console.log("Saved successfully:");
      setSavedProducts((prev) => [...prev, productId]); // Бүтээгдэхүүний ID-г хадгалах
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="flex justify-center h-fit py-12">
      <div className="container flex justify-center">
        <div className="w-full grid gap-12">
          <div className="relative w-full h-[600px]">
            <Image
              src="/Slider.png"
              fill
              alt="cover"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 640px) 100vw, (min-width: 641px) 640px"
              className="rounded-2xl"
            />
          </div>
          <div className="w-full h-full grid grid-cols-4 grid-rows-6 [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:row-span-2 gap-6 ">
            {products?.map((product, index) => {
              const isSaved = savedProducts.includes(product._id);
              const customHeight =
                index === 6
                  ? "h-[1000px] w-full"
                  : index === 7
                  ? "h-[1020px] w-full"
                  : "h-[450px] w-full";
              return (
                <div
                  className="w-full h-full grid gap-6 rounded-2xl"
                  key={product._id}
                >
                  <Link
                    href={`${product._id}`}
                    className={`relative w-[244px] ${customHeight} overflow-hidden hover:border rounded-2xl`}
                  >
                    <Image
                      src={product.image[0]}
                      fill
                      alt="prompt"
                      className="rounded-2xl hover:scale-110 duration-700"
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, (min-width: 641px) 640px"
                    />
                      {isSaved ? (
                      <FaHeart
                        onClick={() => createSave(product._id)}
                        className="absolute right-4 top-4 w-10 h-10 text-black hover:text-black" // Hover үед хар өнгөтэй
                      />
                    ) : (
                      <CiHeart
                        onClick={() => createSave(product._id)}
                        className="absolute right-4 top-4 w-10 h-10 text-white hover:text-black" // Hover үед хар өнгөтэй
                      />
                    )}
                  </Link>
                  <div className="text-3xl font-bold grid gap-1">
                    <p className="text-2xl font-normal">{product.title}</p>
                    <div className="flex gap-4 items-center">
                      <span>{product.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
