"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { backend } from "@/axios";
import { useUser } from "../../components/providers/AuthProvider";
import { products } from "../../components/mockdata";
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
  const { user } = useUser();
  const [userName, setUserName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  // Fetch packages from backend
  useEffect(() => {
    const getPackage = async () => {
      try {
        const res = await backend.get("/package/getPackage", {
          headers: {
            Authorization: `Bearer ${"token"}`, // Replace with actual token management
          },
        });
        const updatedPackages = res.data.packagies.map((pkg: Package) => ({
          ...pkg,
          quantity: pkg.quantity || 1,
        }));
        setRooms(updatedPackages);
      } catch (error) {
        console.error("Failed to fetch packages:", error);
      }
    };

    getPackage();
  }, []);

  const totalPrice = rooms.reduce(
    (sum, room) => sum + room.products.price * room.quantity,
    0
  );

  const createOrder = async () => {
    try {
      await backend.post(
        "/createOrder",
        {
          user: user?.user?.id,
          product: rooms.map((room) => ({
            productId: room._id,
            quantity: room.quantity,
          })),
          lastName,
          userName,
          email,
          phone,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${"token"}`,
          },
        }
      );
      toast("Захиага амжилттай");
    } catch (error) {
      console.error("order uussenguie", error);
    }
  };

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
                    <p className="text-base font-bold text-[#71717A]">
                      {rooms.length}
                    </p>
                  </div>
                </div>
                <div className="border-b-2 border-dashed grid gap-6 pb-6">
                  {rooms.map((room) => {
                    return (
                      <div className="flex gap-6" key={room._id}>
                        <div className="w-20 h-20  overflow-hidden rounded-md">
                          <div className="relative w-[120px] h-[160px]">
                            <Image
                              src={room.products.image[0]}
                              fill
                              alt="t-shirt"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col text-black">
                          <p className="font-normal text-base">
                            {room.products.title}
                          </p>
                          <p className="font-normal text-base">
                            {room.quantity}*{room.products.price}
                          </p>
                          <p className="text-base font-bold">
                            {room.products.price * room.quantity}₮
                          </p>
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
                  <span className="text-lg font-bold">{totalPrice}₮</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[623px] h-[614] p-8 bg-white rounded-xl text-black">
            <p className="font-semibold text-lg h-fit pb-4 mb-4 border-b">
              2. Хүргэлтийн мэдээлэл оруулах
            </p>
            <div className="grid ">
              <div className="grid gap-2">
                <p>Овог:</p>
                <input
                  className="border h-7 rounded-md"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>
              <div className="grid gap-2">
                <p>Нэр:</p>
                <input
                  className="border h-7 rounded-md"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
              </div>
              <div className="grid gap-2">
                <p>Утасны дугаар:</p>
                <input
                  className="border h-7 rounded-md"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>
              <div className="grid gap-2">
                <p>Имэйл хаяг:</p>
                <input
                  className="border h-7 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="grid gap-2">
                <p>Хаяг:</p>
                <input
                  className="border h-7 rounded-md"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="flex justify-between text-black">
              <Link href={"/buySteps/caseOne"}>
                <button
                  className="border px-9 py-2 rounded-3xl hover:bg-[#2563EB] hover:text-white text-base font-medium"
                  type="submit"
                >
                  Буцах
                </button>
              </Link>
              <Link href={"/buySteps/pay"}>
                <button
                  className="border px-9 py-2 rounded-3xl hover:bg-[#2563EB] hover:text-white text-base font-medium"
                  type="submit"
                  onClick={createOrder}
                >
                  Төлбөр төлөх
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
