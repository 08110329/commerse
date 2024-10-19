"use client";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { backend } from "@/axios";
import Link from "next/link";
import { useUser } from "../components/providers/AuthProvider";
import { useParams } from "next/navigation";

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
  userId: string;
  productId: string; // Үндсэн бүтээгдэхүүн
}

export default function Home() {
  const [products, setProducts] = useState<Products[]>([]);
  const [saves, setSaves] = useState<Save[]>([]); // Хоосон массив хуваарилсан
  const [userData, setUserData] = useState({ _id: "", username: "" });
  const [productId, setProductId] = useState<string>()
  const { user } = useUser();
  const { id } = useParams();

  useEffect(() => {
    const getSave = async () => {
      const res = await backend.get("/getSave");
      setSaves(res.data.saves); 
    };
    getSave();
  }, []);

  
  useEffect(() => {
    const getData = async () => {
      const { data } = await backend.get("/getProducts");
      console.log(data.products);
      setProducts(data.products);
    };

    getData();
  }, []);

  useEffect(() => {
    const getUsername = async () => {
      const res = await backend.get(`/user/getUser/${user?.user?.id}`);
      setUserData(res.data.user);
      console.log(res.data.user);
    };
    getUsername();
  }, []);

  const createSave = async () => {
    try {
      const res = await backend.post("/createSave", {
        userId: userData?._id,
       productId: productId,
      });
      console.log("Saved successfully:", res.data);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="flex py-24 h-screen px-96 bg-[#F4F4F5] justify-center ">
      <div className="container w-[590px] h-screen flex flex-col justify-center gap-4 text-black">
        <div className="flex text-xl font-bold gap-1">
          <p>Хадгалсан бараа </p>
          <p className="text-[#5E6166]">({saves.length})</p>
        </div>
        <div className="grid gap-6 ">
          {saves.length > 0 ? (
            saves.map((save) => {
              return (
                <div
                  className="flex gap-6 h-32 bg-white p-6 rounded-2xl"
                  key={save._id}
                >
                  <Link href={`/products/${saves}`} className="relative w-32 ">
                    <Image
                      src={save} // Зураг авах
                      fill
                      alt="product"
                      className="rounded-md object-cover"
                    />
                  </Link>
                  <div className="flex flex-col w-full gap-1">
                    <p className="font-normal text-base">{save.products}</p>
                    <p className="text-base font-bold">{save.price}</p> {/* Хэрэв save объектод price байхгүй бол үүнийг засаарай */}
                    <button className="border w-fit px-3 rounded-xl hover:bg-[#2563EB] hover:text-white border-[#2563EB] text-[#2563EB]">
                      Сагслах
                    </button>
                  </div>
                  <button className=" w-6 h-6">
                    <FaRegHeart onClick={() => createSave()}/>
                  </button>
                </div>
              );
            })
          ) : (
            <p>Хадгалсан бараа байхгүй.</p>
          )}
        </div>
      </div>
    </div>
  );
}
