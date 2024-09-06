import Image from "next/image";
import { CiHeart } from "react-icons/ci";

export const ProductCard = ({ product }) => {
  return (
    <div className=" w-[330px] flex flex-col gap-3">
      <div className="relative w-full h-[450px]">
        <Image src={product.img} fill alt="zurag" className="rounded-2xl" />
        <CiHeart className="absolute right-4 top-4 w-10 h-10" />
      </div>
      <div className="text-3xl font-bold grid gap-2">
        <p className="text-2xl font-normal">{product.title}</p>
        <p className="flex gap-4 items-center">{product.price}</p>
      </div>
    </div>
  );
};
