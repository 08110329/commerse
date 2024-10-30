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

interface Save {
  _id: string;
  users: string;
  products: Products;
}

export default function Home() {
  const [saves, setSaves] = useState<Save[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const getSave = async () => {
      try {
        const res = await backend.get("/getSave", {
          headers: {
            Authorization: `Bearer ${"token"}`, // Энд таны токен оруулах ёстой
          },
          params: { user: user.user?.id },
        });
        setSaves(res.data.save);
      } catch (error) {
        console.error("Мэдээлэл татахад алдаа гарлаа:", error);
      }
    };
    getSave();
  }, [user.user?.id]);

  const deleteSave = async (id: string) => {
    try {
      const response = await backend.delete(`/deleteSave/${id}`, {
        headers: {
          Authorization: `Bearer ${"token"}`,
        },
      });
      setSaves((prev) => prev.filter((save) => save._id !== id));
      console.log(response.data.message); // Амжилттай устгасны тухай мэдээллийг лог хийх
    } catch (error) {
      console.error("Устгахад алдаа гарлаа:", error);
    }
  };

  const createPackage = async (
    productId: string,
    image_link: string,
    title: string,
    price: string
  ) => {
    try {
      const response = await backend.post(
        "/createPackage",
        {
          user: user.user?.id,
          products: productId,
          image_link: image_link,
          title: title,
          price: price,
        },
        {
          headers: {
            Authorization: `Bearer ${"token"}`,
          },
        }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Сагсанд нэмэхэд алдаа гарлаа:", error);
    }
  };

  return (
    <div className="flex bg-[#F4F4F5] justify-center">
      <div className="container w-fit h-fit flex flex-col justify-center gap-4 text-black py-20">
        <div className="flex text-xl font-bold gap-1">
          <p>Хадгалсан бараа </p>
          <p className="text-[#5E6166]">({saves.length})</p>
        </div>
        <div className="grid gap-6">
          {saves.map((save) => (
            <div
              className="flex gap-6 h-32 bg-white p-6 rounded-2xl"
              key={save._id}
            >
              <Link href={`${save.products._id}`} className="relative w-32">
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
                <div className="flex justify-between">
                  <Link href={"/buySteps/caseOne"}>
                    <button
                      className="border w-fit px-3 rounded-xl hover:bg-[#2563EB] hover:text-white border-[#2563EB] text-[#2563EB]"
                      onClick={() =>
                        createPackage(
                          save.products._id,
                          save.products.image[0],
                          save.products.title,
                          save.products.price
                        )
                      } // Сагсанд нэмэх функц
                    >
                      Сагслах
                    </button>
                  </Link>

                  <button
                    className="border w-fit px-3 rounded-xl hover:bg-[#2563EB] hover:text-white border-[#2563EB] text-[#2563EB]"
                    onClick={() => deleteSave(save._id)} // Устгах функц
                  >
                    Устгах
                  </button>
                </div>
              </div>
              <button className="w-6 h-6">
                <FaRegHeart />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
