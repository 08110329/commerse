"use client";

// Search.tsx
import Image from "next/image";

interface Product {
  _id: string;
  title: string;
  price: string;
  image: string[];
}

type ProductCardProps = {
  products: Product[];
};

export const Search = ({ products }: ProductCardProps) => {
  return (
    <div className="border w-screen h-screen bg-black bg-opacity-25 flex justify-center">
      <div className="h-fit px-8 py-8 rounded-xl bg-white ">
        <div className="pb-6 grid gap-6 w-fit">
          {products.length === 0 ? (
            <p>Таны хайлттай бүтээгдэхүүн олдсонгүй.</p>
          ) : (
            products.map((product) => (
              <div className="flex gap-6 text-black" key={product._id}>
                <div className=" w-[90px] h-[80px] overflow-hidden rounded-2xl">
                  <div className="relative w-32 h-40">
                    <Image
                      src={product.image[0]}
                      fill
                      alt={product.title}
                    />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="w-[414px]">
                    <p className="font-normal text-base">{product.title}</p>
                  </div>
                  <p className="text-base font-bold">{product.price}₮</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
