"use client";

import Image from "next/image";
import { GoTrash } from "react-icons/go";
import Link from "next/link";
import { useEffect, useState } from "react";
import { backend } from "@/axios";
import { toast } from "react-toastify";

interface Package {
  _id: string;
  products: {
    _id: string;
    price: number;
    title: string;
    image: string[];
  };
  quantity: number;
}

export default function Home() {
  const [rooms, setRooms] = useState<Package[]>([]);
  const [deleted, setDeleted] = useState<boolean>(false);

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
        const res = await backend.get("/package/getPackage", {
          headers: {
            Authorization: `Bearer ${"token"}`,
          },
        });
        const updatedPackages = res.data.packagies.map((pkg: Package) => ({
          ...pkg,
          quantity: pkg.quantity || 1,
        }));
        setRooms(updatedPackages);
      } catch (error) {
        console.error("Failed to fetch packages:", error);
        toast.error("Error fetching package data");
      }
    };

    getPackage();
  }, []);

  const updatedPackages = async (packageId: string, quantity: number) => {
    try {
      await backend.put(
        "/package/updatePackage",
        { packageId, quantity },
        {
          headers: {
            Authorization: `Bearer ${"token"}`,
          },
        }
      );
    } catch (error) {
      console.error("", error);
    }
  };

  const increaseQuantity = async (packageId: string, currentQty: number) => {
    const newQty = currentQty + 1;
    try {
      await updatedPackages(packageId, newQty);
      setRooms((prevRooms) =>
        prevRooms.map((room) =>
          room._id === packageId ? { ...room, quantity: newQty } : room
        )
      );
    } catch (error) {
      console.error("Failed to increase quantity:", error);
      toast.error("Error updating quantity");
    }
  };

  const decreaseQuantity = async (packageId: string, currentQty: number) => {
    if (currentQty <= 1) return;
    const newQty = currentQty - 1;
    try {
      await updatedPackages(packageId, newQty);
      setRooms((prevRooms) =>
        prevRooms.map((room) =>
          room._id === packageId ? { ...room, quantity: newQty } : room
        )
      );
    } catch (error) {
      console.error("Failed to decrease quantity:", error);
      toast.error("Error updating quantity");
    }
  };

  const totalPrice = rooms.reduce(
    (sum, room) => sum + room.products.price * room.quantity,
    0
  );

  const deleteProductFromPackage = async (id: string) => {
    try {
      const res = await backend.delete(`/package/deleteFromPackage/${id}`, {
        headers: {
          Authorization: `Bearer ${"token"}`,
        },
      });
      if (res) {
        setRooms(rooms.filter((room) => room._id !== id));
      }
    } catch (error) {
      console.error("Мэдээлэл татахад алдаа гарлаа:", error);
    }
  };

  return (
    <div className="container bg-[#F4F4F5] m-auto py-8">
      <div className="flex text-black justify-center items-center">
        <div className="w-[686px] h-fit grid gap-16">
          <div className="bg-white rounded-xl">
            <div className="px-6 py-8 grid gap-6 h-fit">
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
                            src={room?.products.image[0]}
                            fill
                            alt={room.products.title}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 text-black">
                        <div className="w-[414px]">
                          <p className="font-normal text-base">
                            {room.products.title}
                          </p>
                          <div className="flex gap-3 items-center">
                            <div
                              className="border rounded-full w-8 h-8 flex justify-center items-center border-black hover:bg-gray-200 hover:border-gray-400 cursor-pointer"
                              onClick={() =>
                                decreaseQuantity(room._id, room.quantity)
                              }
                            >
                              <p>-</p>
                            </div>
                            <p>{room.quantity}</p>
                            <div
                              className="border rounded-full w-8 h-8 flex justify-center items-center border-black hover:bg-gray-200 hover:border-gray-400 cursor-pointer"
                              onClick={() =>
                                increaseQuantity(room._id, room.quantity)
                              }
                            >
                              <p>+</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-base font-bold">
                          {room.products.price * room.quantity}₮
                        </p>
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
  );
}
