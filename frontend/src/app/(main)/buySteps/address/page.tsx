"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { backend } from "@/axios";
import { useUser } from "../../components/providers/AuthProvider";
import { UserData } from "../../components/UserData";

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
  quantity: number; // Added to manage quantity in cart
}

export default function Home() {
  const [rooms, setRooms] = useState<Package[]>([]);
  const { user } = useUser();

  // Fetch packages from backend
  useEffect(() => {
    const getPackage = async () => {
      try {
        const res = await backend.get("/getPackage", {
          headers: {
            Authorization: `Bearer ${"token"}`, // Replace with actual token management
          },
        });
        const updatedPackages = res.data.packagies.map((pkg: Package) => ({
          ...pkg,
          quantity: 1, // Set default quantity for products in the cart
        }));
        setRooms(updatedPackages);
      } catch (error) {
        console.error("Мэдээлэл татахад алдаа гарлаа:", error);
      }
    };
    getPackage();
  }, []);

  // Calculate total price and total quantity
  const totalPrice = rooms.reduce((sum, room) => {
    const price = parseFloat(room.price);
    return sum + (isNaN(price) ? 0 : price * room.quantity);
  }, 0);

  const totalQuantity = rooms.reduce((sum, room) => sum + room.quantity, 0);

  return (
    <div className="container bg-[#F4F4F5] m-auto">
      <div className="h-fit grid gap-16 justify-center py-8">
        {/* Progress Bar */}
        <div className="flex items-center mt-28 justify-center text-black">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="border rounded-full w-8 h-8 flex justify-center items-center border-black hover:bg-[#2563EB] hover:text-white hover:border-none">
                  <p>{index + 1}</p>
                </div>
                {index < 2 && (
                  <div className="border h-[1px] w-20 border-black"></div>
                )}
              </div>
            ))}
        </div>

        {/* Content Section */}
        <div className="flex gap-5 h-screen">
          {/* Cart Summary */}
          <div className="bg-white rounded-xl w-[333px] h-[448px]">
            <div className="grid gap-6 px-6 pt-8">
              <div className="grid rounded-2xl gap-6">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center font-bold text-xl text-black">
                    <p className="text-base font-bold">1.</p>
                    <p className="text-base font-bold">Сагс</p>
                    <p className="text-base font-bold text-[#71717A]">({totalQuantity})</p>
                  </div>
                </div>
                <div className="border-b-2 border-dashed grid gap-6 pb-6">
                  {rooms.map((room) => (
                    <div className="flex gap-6" key={room._id}>
                      <div className="w-20 h-20 overflow-hidden rounded-md">
                        <div className="relative w-[120px] h-[160px]">
                          <Image src={room.image_link} fill alt={room.title} />
                        </div>
                      </div>
                      <div className="flex flex-col text-black">
                        <p className="font-normal text-base">{room.title}</p>
                        <p className="font-normal text-base">
                          Тоо ширхэг: {room.quantity}
                        </p>
                        <p className="text-base font-bold">
                          {(parseFloat(room.price) * room.quantity).toLocaleString()}₮
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Total Price */}
                <div className="flex justify-between text-black">
                  <p className="text-base font-normal">Нийт төлөх дүн:</p>
                  <span className="text-lg font-bold">
                    {totalPrice.toLocaleString()}₮
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* User Information */}
          <UserData />
        </div>
      </div>
    </div>
  );
}
