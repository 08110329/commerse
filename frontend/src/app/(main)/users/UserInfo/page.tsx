'use client';
import { backend } from "@/axios";
import { registerss } from "@/mockData";

import Link from "next/link";
import { useState } from "react";

interface Customer {
  _id: string;
  lastName: string;
  FirstName: string;
  Phone: string; 
  email: string;
  address: string;
}

export default function Home() {
  const [lastName, setLastName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [Phone, setPhone] = useState<string | undefined>("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

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

  const createCustomer = async () => {
    try {
      const res = await backend.post("/createCustomer", {
        lastName: lastName,
        FirstName: FirstName,
        Phone: Phone,
        email: email,
        address: address,
      });
      setAddress("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhone(""); 
      console.log(res.data);
    } catch (error) {
      console.log(error);
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
                    onChange={(event) => setLastName(event.target.value)}
                  ></input>
                </div>
                <div className="grid gap-2">
                  <p>Нэр:</p>
                  <input
                    className="border w-[820px] h-7 rounded-xl pl-4"
                    type=" text"
                    value={FirstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  ></input>
                </div>
                <div className="grid gap-2">
                  <p>Утасны дугаар:</p>
                  <input
                    className="border w-[820px] h-7 rounded-xl pl-4"
                    type=" text" 
                    value={Phone}
                    onChange={(event) => setPhone(event.target.value)} 
                  ></input>
                </div>
                <div className="grid gap-2">
                  <p>Имейл хаяг:</p>
                  <input
                    className="border w-[820px] h-7 rounded-xl pl-4"
                    type=" text" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  ></input>
                </div>
                <div>
                  <p>Хаяг:</p>
                  <textarea
                    className="border w-[820px] h-20 rounded-xl pl-4 pt-2"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-[#2563EB] text-white hover:bg-black w-[172px] h-[36px] rounded-2xl "
                  onClick={() => createCustomer()}
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
