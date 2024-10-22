"use client";

import { backend } from "@/axios";
import { numberss } from "@/mockData";
import { get } from "http";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
interface torols {
  _id: string;
  torol: string;
}

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

export default function Home() {
  const [torols, setTorols] = useState<torols[]>([]);
  const [torolId, setTorolId] = useState<string>("");
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const getCategory = async () => {
      const res = await backend.get("/getCategory");
      console.log(res.data.torols);
      setTorols(res.data.torols);
    };
    getCategory();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { data } = await backend.get("/getProducts");
      console.log(data.products);

      setProducts(data.products);
      // console.log(data.products);
    };

    getData();
  }, []);

  const showProduct = products.filter((product) => product.torolId === torolId); // productiig idgaar ylgah
  return (
    <div className="container h-full bg-[#F4F4F5] m-auto">
      <div className="flex gap-5 justify-center py-10">
        <div className="w-60 flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-black">
            <h1 className="text-lg font-bold">Ангилал</h1>
            <div className="flex flex-col gap-2">
              {torols?.map((torol) => {
                return (
                  <p
                    onClick={() => setTorolId(torol._id)}
                    className="text-md font-medium hover:font-bold"
                    key={torol._id}
                  >
                    {torol.torol}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 text-black">
            <h1 className="text-lg font-bold">Хэмжээ</h1>
            <div className="flex flex-col gap-2">
              {numberss.map((numbers) => {
                return (
                  <p
                    className="text-md font-medium hover:font-bold"
                    key={numbers.id}
                  >
                    {numbers.size}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-3 grid-rows-5 gap-12 text-black h-fit">
          {showProduct.map((item) => (
            <div className=" w-[330px] flex flex-col gap-3" key={item._id}>
              <div className="relative w-full h-[450px]">
                <Image
                  src={item.image[0]}
                  fill
                  alt="zurag"
                  className="rounded-2xl"
                />
                <CiHeart className="absolute right-4 top-4 w-10 h-10" />
              </div>
              <div className="text-3xl font-bold grid gap-2">
                <p className="text-2xl font-normal">{item.title}</p>
                <p className="flex gap-4 items-center">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
