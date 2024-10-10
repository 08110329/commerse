"use client";
import { ContactProduct } from "@/app/(main)/components/ContactProduct";
import { ProductPage } from "@/app/(main)/components/ProductPage";
import { backend } from "@/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  console.log(id);

  const getOneProduct = async () => {
    try {
      const response = await backend.get(`/getProduct/${id}`);
      console.log(response.data.message);
      setProduct(response.data.product);
      console.log(response.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOneProduct();
  }, []);

  return (
    <div className="flex bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className="h-fit">
          <div className="grid gap-20 pt-14 pb-24">
            <ProductPage />
            <div className="grid gap-7 text-black">
              <h1 className="text-4xl font-bold">Холбоотой бараа</h1>
              <ContactProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
