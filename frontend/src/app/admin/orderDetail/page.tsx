"use client";

import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { HurgeltiinNews } from "../components/HurgeltiinNews";
import { useEffect, useState } from "react";
import { backend } from "@/axios";

interface Order {
  _id: string;
  userName: string;
  email: string;
  phone:string;
  address:string;
  product: {
    _id: string;
    image: [string];
    title: string;
    price: string;
    tshirheg:number;
    productCode:string;
    createdAt: string;
  };
  createdAt: string;
  payment: string;
  status: string[];
}

export default function Home() {
   const [orders, setOrders] = useState<Order[]>([]);
  
    useEffect(() => {
      const getOrder = async () => {
        const { data } = await backend.get("/getOrder");
        setOrders(data.orders);
      };
      getOrder();
    }, []);
  return (
        <div className="flex m-auto container bg-gray-50 flex-col gap-8 ">
          <div className="flex h-fit bg-white text-black px-4 py-2 items-center gap-4">
            <IoIosArrowBack />
            <p className="py-3 text-base font-normal">Захиалгын дэлгэрэнгүй</p>
          </div>
          <div className="flex gap-5 px-6">
            <div className="flex flex-col flex-1 h-full bg-white px-6 pt-6 rounded-3xl">
              {orders.map((order)=> (
                <div className="flex-1 bg- white grid gap-6 pb-32" key={order._id}>
                <div className="flex text-black justify-between">
                  <div className="flex flex-col ">
                    <p className="text-base font-normal">``
                      Захиалгын ID дугаар:
                    </p>
                    <p className="text-base font-semibold">{order._id}</p>
                  </div>
                  <button className="flex gap-3 items-center bg-gray-200 px-4 rounded-full">
                    Бэлтгэгдэж байна
                    <IoIosArrowDown />
                  </button>
                </div>
                <div className="flex flex-col text-black">
                  <p>Захиалагч: Хувь хүн </p>
                  <div className="flex ">
                    <p className="text-base font-semibold">{order.userName}</p>
                    <p>{order.email},{order.phone}</p>
                  </div>
                </div>
                
                    <div className="flex ">
                      <div className="relative w-[190px] h-[176px] ">
                        <Image
                          src={order.product.image[0]}
                          fill
                          alt="hoodie"
                          className="rounded-l-2xl"
                        />
                      </div>
                      <div className=" bg-gray-100 py-4 px-6 w-full flex flex-col gap-5 rounded-r-2xl	">
                        <div className="text-black flex flex-col gap-2">
                          <h1 className="text-2xl font-bold">{order.product.title}</h1>
                          <div className="flex flex-col">
                            <p>{order.product.createdAt}</p>
                            <p>{order.product._id}</p>
                          </div>
                        </div>
                        <div className="text-black flex justify-between ">
                          <div className="flex">
                            <p>{order.product.tshirheg}</p>
                            <p>{order.product.price}</p>
                          </div>
                          <span></span>
                        </div>
                      </div>
                    </div>
                
                
              </div>
              ))}
              
            </div>
            <HurgeltiinNews />
          </div>
        </div>
  );
}
