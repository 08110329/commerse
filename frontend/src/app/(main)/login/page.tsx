"use client";

import Link from "next/link";
import { useState } from "react";
import { useUser } from "../components/providers/AuthProvider";

export default function Home() {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Формын анхдагч үйлдлийг таслах
    login(email, password);
  };
  return (
    <div className="flex bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className="h-screen ">
          <div className="w-full grid gap-12 pt-28 justify-center text-black">
            <div className="grid gap-6">
              <h1 className="font-semibold text-2xl flex justify-center">
                Нэвтрэх
              </h1>
              <div className="grid gap-5">
                <form onSubmit={handleLogin} className="grid gap-5">
                  <input
                    placeholder=" Имэйл хаяг"
                    type="email"
                    className="w-96 h-9 border rounded-2xl pl-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                  <input
                    placeholder=" Нууц үг"
                    type="password"
                    className="w-96 h-9 border rounded-2xl pl-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                  <div className="flex justify-center border border-[#2563EB] hover:bg-[#2563EB] hover:text-white text-[#2563EB] bg-white h-9 rounded-2xl">
                    <button type="submit">Нэвтрэх</button>
                  </div>
                </form>

                <button className="underline">Нууц үг мартсан</button>
              </div>
            </div>
            <Link
              className="flex justify-center border text-[#2563EB] py-2 rounded-2xl bg-white border-[#2563EB] hover:bg-[#2563EB] hover:text-white"
              href={"/register"}
            >
              <button className="font-medium text-sm">Бүртгүүлэх</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
