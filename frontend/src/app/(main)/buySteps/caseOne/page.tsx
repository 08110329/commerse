"use client";

import Image from "next/image";
import { GoTrash } from "react-icons/go";
import Link from "next/link";
import { useEffect, useState } from "react";
import { backend } from "@/axios";
import { useUser } from "../../components/providers/AuthProvider";

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

interface Package {
  _id: string;
  user: string;
  products: Products;
  image_link: string;
  title: string;
  price: string;
  quantity: number; // Add quantity property
}

export default function Home() {
  const [rooms, setRooms] = useState<Package[]>([]);
  const [deleted, setDeleted] = useState<boolean>(false);
  const { user } = useUser();

  interface Path {
    name: string;
    path: string;
  }

  const paths: Path[] = [
    {
      name: "Худалдан авах",
      path: "/buySteps/address",
    },
  ];

  useEffect(() => {
    const getPackage = async () => {
      try {
        const res = await backend.get("/getPackage", {
          headers: {
            Authorization: `Bearer ${"token"}`,
          },
        });
        const updatedPackages = res.data.packagies.map((pkg: Package) => ({
          ...pkg,
          quantity: 1, // Set default quantity
        }));
        setRooms(updatedPackages);
      } catch (error) {
        console.error("Мэдээлэл татахад алдаа гарлаа:", error);
      }
    };
    getPackage();
  }, [deleted]);

  const increaseQuantity = (id: string) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room._id === id ? { ...room, quantity: room.quantity + 1 } : room
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room._id === id && room.quantity > 1
          ? { ...room, quantity: room.quantity - 1 }
          : room
      )
    );
  };

  const totalPrice = rooms.reduce((sum, room) => {
    const price = parseFloat(room.price);
    return sum + (isNaN(price) ? 0 : price * room.quantity); // Corrected: multiply price by quantity
  }, 0);

  const deleteProductFromPackage = async (id: string) => {
    try {
      const res = await backend.delete("/deleteFromPackage", {
        headers: {
          Authorization: `Bearer ${"token"}`,
        },
        params: {
          id: id,
        },
      });
      if (res) {
        setDeleted(!deleted);
      }
    } catch (error) {
      console.error("Мэдээлэл татахад алдаа гарлаа:", error);
    }
  };

  return (
    <div className="flex bg-[#F4F4F5] justify-center ">
      <div className="container flex justify-center ">
        <div className="flex flex-col items-center text-black">
          <div className="w-[686px] h-fit grid gap-16">
            <div className="bg-white rounded-xl">
              <div className="px-6 py-8 grid gap-6">
                <div className="grid rounded-2xl gap-6">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center font-bold text-xl text-black">
                      <p className="text-base font-bold">1.</p>
                      <p className="text-base font-bold">Сагс</p>
                      <p className="text-base font-bold text-[#71717A]">
                        {rooms.length}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-6">
                    {rooms?.map((room) => (
                      <div
                        className="flex gap-6 border rounded-2xl px-4 py-4"
                        key={room._id}
                      >
                        <div className="w-24 h-24 border overflow-hidden rounded-xl">
                          <div className="relative w-32 h-40">
                            <Image
                              src={room?.image_link}
                              fill
                              alt={room.title}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 text-black">
                          <div className="w-[414px]">
                            <p className="font-normal text-base">
                              {room.title}
                            </p>
                            <div className="flex gap-3 items-center">
                              <div
                                className="border rounded-full w-8 h-8 flex justify-center items-center border-black hover:bg-gray-200 hover:border-gray-400 cursor-pointer"
                                onClick={() => decreaseQuantity(room._id)}
                              >
                                <p>-</p>
                              </div>
                              <p>{room.quantity}</p>
                              <div
                                className="border rounded-full w-8 h-8 flex justify-center items-center border-black hover:bg-gray-200 hover:border-gray-400 cursor-pointer"
                                onClick={() => increaseQuantity(room._id)}
                              >
                                <p>+</p>
                              </div>
                            </div>
                          </div>
                          <p className="text-base font-bold">{room.price}₮</p>
                        </div>
                        <button className="flex justify-start">
                          <GoTrash
                            className="w-5 h-5"
                            onClick={() => deleteProductFromPackage(room._id)}
                          />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between pb-6 text-black">
                    <p className="text-base font-normal">Нийт төлөх дүн:</p>
                    <span className="text-lg font-bold">{totalPrice}₮</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  {paths.map((path, index) => (
                    <Link key={index} href={path.path}>
                      <button className="bg-[#2563EB] px-9 py-2 rounded-3xl text-white text-base font-semibold">
                        {path.name}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
