import { ContactProduct } from "@/components/ContactProduct";
import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ProductPage } from "@/components/ProductPage";
import Image from "next/image";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  const products = [
    {
      id: 1,
      img: "/3.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 2,
      img: "/4.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 3,
      img: "/5.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 4,
      img: "/6.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 5,
      img: "/6.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 6,
      img: "/5.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 7,
      img: "/4.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 8,
      img: "/3.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 9,
      img: "/3.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 10,
      img: "/3.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 11,
      img: "/3.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 12,
      img: "/3.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 13,
      img: "/3.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 14,
      img: "/3.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 15,
      img: "/3.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
  ];
  return (
    <div className="w-full m-auto h-[100vh]">
      <Header />
      <div className="w-full py-24 px-96 flex gap-20 border">
        <div className="grid border w-[345px] h-[477px]">
          <div></div>
          <div></div>
        </div>

      
      </div>
      <Footers />
    </div>
  );
}
