"use client";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { backend } from "@/axios";
import Link from "next/link";
import { useUser } from "../components/providers/AuthProvider";

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
interface save {
  _id: string;
  users: string;
  products: Products;
}
export default function Home() {
  const [saves, setSaves] = useState<save[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const getSave = async () => {
      try {
        const res = await backend.get("/getSave", {
          headers: {
            Authorization: `Bearer ${"token"}`,
          },
          params: { user: user.user?.id },
        });
        console.log(res.data.save);
        setSaves(res.data.save);
      } catch (error) {
        console.error("Мэдээлэл татахад алдаа гарлаа:", error);
      }
    };
    getSave();
  }, []);

  return (
    <div className="flex bg-[#F4F4F5] justify-center">
      <div className="container w-fit h-fit flex flex-col justify-center gap-4 text-black py-20">
        <div className="flex text-xl font-bold gap-1">
          <p>Хадгалсан бараа </p>
          <p className="text-[#5E6166]">(3)</p>
        </div>
        <div className="grid gap-6 ">
          {saves?.map((save) => {
            return (
              <div
                className="flex gap-6 h-32 bg-white p-6 rounded-2xl"
                key={save._id}
              >
                <Link href={`${save._id}`} className="relative w-32 ">
                  <Image
                    src={save.products.image[0]}
                    fill
                    alt="t-shirt"
                    className="rounded-md object-cover"
                  />
                </Link>
                <div className="flex flex-col w-full gap-1">
                  <p className="font-normal text-base">{save.products.title}</p>

                  <p className="text-base font-bold">{save.products.price}</p>
                  <button className="border w-fit px-3 rounded-xl hover:bg-[#2563EB] hover:text-white border-[#2563EB] text-[#2563EB]">
                    Сагслах
                  </button>
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
