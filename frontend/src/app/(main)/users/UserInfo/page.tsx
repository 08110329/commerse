"use client";

import { backend } from "@/axios";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../../components/providers/AuthProvider";

export default function Home() {
  const [userName, setUserName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const { user } = useUser();
  interface Path {
    name: string;
    path: string;
  }

  const paths: Path[] = [
    {
      name: "Хэрэглэгчийн хэсэг",
      path: "/users/UserInfo",
    },
    {
      name: "Захиалгын түүх",
      path: "/users/orderHistory",
    },
  ];
  const UserUpdate = async () => {
    try {
      const token = localStorage.getItem("token"); // Токен авах
      if (!token) throw new Error("Токен байхгүй байна!");

      await backend.put(
        "/user/updateUserController",
        {
          userId: user?.user?.id,
          lastName:lastName,
          userName:userName,
          email:email,
          phone:phone,
          address:address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
     
      setUserName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAddress("");
      

      toast.success("Амжилттай шинэчиллээ!"); // Амжилтын мессеж
    } catch (error) {
      console.error("Шинэчлэл үүссэнгүй", error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу!"); // Алдааны мессеж
    }
  };

  return (
    <div className="flex py-24 px-96 bg-[#F4F4F5] justify-center ">
      <div className="container flex justify-center">
        <div className=" h-screen">
          <div className="w-full h-fit flex gap-5 pb-24 pt-28 justify-center text-black">
            <div className="flex flex-col gap-1 ">
              {paths.map((path, index) => (
                <Link key={index} href={path.path}>
                  <button className="w-[244px] h-9 hover:bg-white rounded-2xl grid justify-start items-center pl-4">
                    {path.name}
                  </button>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-6 justify-end">
              <h4 className="border-b-2 pb-6 text-xl font-medium">
                Хэрэглэгчийн хэсэг
              </h4>
              <div className="grid gap-8">
                <div className="grid gap-2">
                  <p>Овог:</p>
                  <input
                    className="border w-[820px] h-7 rounded-xl pl-4"
                    type=" text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>
                <div className="grid gap-2">
                  <p>Нэр:</p>
                  <input
                    className="border w-[820px] h-7 rounded-xl pl-4"
                    type=" text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  ></input>
                </div>
                <div className="grid gap-2">
                  <p>Утасны дугаар:</p>
                  <input
                    className="border w-[820px] h-7 rounded-xl pl-4"
                    type=" text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                </div>
                <div className="grid gap-2">
                  <p>Имейл хаяг:</p>
                  <input
                    className="border w-[820px] h-7 rounded-xl pl-4"
                    type=" text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div>
                  <p>Хаяг:</p>
                  <textarea
                    className="border w-[820px] h-20 rounded-xl pl-4 pt-2"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-[#2563EB] text-white hover:bg-black w-[172px] h-[36px] rounded-2xl "
                  onClick={UserUpdate}
                >
                  Мэдээлэл шинэчлэх
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
