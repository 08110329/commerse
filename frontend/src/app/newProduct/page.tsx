import { ContactProduct } from "@/components/ContactProduct";
import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";
import { ProductPage } from "@/components/ProductPage";
import Image from "next/image";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className="h-fit">
          <div className="grid gap-20 pt-14 pb-24">
            <ProductPage />
            <div className="grid gap-7 ">
              <h1 className="text-4xl font-bold">Холбоотой бараа</h1>
              <ContactProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
