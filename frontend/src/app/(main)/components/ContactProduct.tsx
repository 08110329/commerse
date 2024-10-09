"use client";
import { backend } from "@/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

export const ContactProduct = () => {
  // const products = [
  //   {
  //     id: 1,
  //     img: "/3.png",
  //     title: "Chunky Glyph Tee",
  //     price: "120’000₮",
  //   },
  //   {
  //     id: 2,
  //     img: "/4.png",
  //     title: "Chunky Glyph Tee",
  //     price: "120’000₮",
  //   },
  //   {
  //     id: 3,
  //     img: "/5.png",
  //     title: "Chunky Glyph Tee",
  //     price: "120’000₮",
  //   },
  //   {
  //     id: 4,
  //     img: "/6.png",
  //     title: "Chunky Glyph Tee",
  //     price: "120’000₮",
  //   },
  //   {
  //     id: 5,
  //     img: "/6.png",
  //     title: "Chunky Glyph Tee",
  //     price: "120’000₮",
  //   },
  //   {
  //     id: 6,
  //     img: "/5.png",
  //     title: "Chunky Glyph Tee",
  //     price: "120’000₮",
  //   },
  //   {
  //     id: 7,
  //     img: "/4.png",
  //     title: "Chunky Glyph Tee",
  //     price: "120’000₮",
  //   },
  //   {
  //     id: 8,
  //     img: "/3.png",
  //     title: "Chunky Glyph Tee",
  //     price: "120’000₮",
  //   },
  // ];
  interface Products {
    _id: string;
    title: string;
    price: string;
    image: string;
    description: string;
    size: string;
    color: string;
    productCode: string;
    torolId: string;
    quantity: number;
  }

  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await backend.get("/getProduct");
      console.log(data.products);

      setProducts(data.products);
      // console.log(data.products);
    };

    getData();
  }, []);

  return (
    <div className="flex bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className="grid grid-cols-4 grid-rows-2 gap-8">
          {products?.map((product) => {
            return (
              <div className=" w-[330px] flex flex-col gap-3" key={product._id}>
                <div className="relative w-full h-[450px]">
                  <Image
                    src={product.image[0]}
                    fill
                    alt="zurag"
                    className="rounded-2xl"
                  />
                  <CiHeart className="absolute right-4 top-4 w-10 h-10" />
                </div>
                <div className="text-3xl font-bold grid gap-2">
                  <p className="text-2xl font-normal">{product.title}</p>
                  <p className="flex gap-4 items-center">{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
