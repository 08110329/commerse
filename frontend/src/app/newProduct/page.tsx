import { ContactProduct } from "@/components/ContactProduct";
import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";
import { ProductPage } from "@/components/ProductPage";
import Image from "next/image";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full m-auto h-[100vh]">
      <Header />
      <div className="w-screen h-screen">
        <div className="w-full py-24 px-96 grid gap-20">
        <ProductPage />
        <div className="grid gap-7 ">
          <h1 className="text-4xl font-bold">Холбоотой бараа</h1>
          <ContactProduct />
        </div>
      </div>
      </div>
      
      <Footers />
    </div>
  );
}
