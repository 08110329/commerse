"use client";
import { backend } from "@/axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useUser } from "./providers/AuthProvider";
import { FaHeart } from "react-icons/fa";

export const ContactProduct = () => {
  interface Products {
    _id: string;
    title: string;
    price: string;
    image: string;
    description: string;
    size: string;
    color: string;
    productCode: string;
    torolId: string;
    quantity: number;
  }

  const [products, setProducts] = useState<Products[]>([]);
  const [product, setProduct] = useState();
  const { id } = useParams();
  const [torolId, setTorolId] = useState<string>("");
  const { user } = useUser();
  const [savedProducts, setSavedProducts] = useState<string[]>([]);

  const getOneProduct = async () => {
    try {
      const response = await backend.get(`getProduct/${id}`);

      setProduct(response.data.product);
      setTorolId(response.data.product.torolId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOneProduct();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { data } = await backend.get("/getProducts");
      // console.log(data.products);
      setProducts(data.products);
    };

    getData();
  }, []);

 
  const showProduct = products.filter((product) => product.torolId === torolId);

  const createSave = async (productId: string) => {
    try {
      await backend.post("/createSave", {
        user: user.user?.id,
        products: productId,
      });
      console.log("Saved successfully:");
      setSavedProducts((prev) => [...prev, productId]);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="flex bg-[#F4F4F5] justify-center">
      <div className="container flex justify-center ">
        <div
          className="grid grid-cols-4 grid-rows-2 gap-8"
          // onClick={() => router.push(`/${id}`)}
        >
          {showProduct?.map((product) => {
            const isSaved = savedProducts.includes(product._id);
            return (
              <div className=" w-[330px] flex flex-col gap-3" key={product._id}>
                <Link href={`${product._id}`}>
                  <div className="relative w-full h-[450px]">
                    <Image
                      src={
                        product.image[0] ||
                        "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
                      }
                      fill
                      alt="prompt"
                      className="rounded-2xl hover:scale-110 duration-700"
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, (min-width: 641px) 640px"
                    />
                    <Link href={"/save"}>
                      {isSaved ? (
                        <FaHeart
                          onClick={() => createSave(product._id)}
                          className="absolute right-4 top-4 w-10 h-10 text-black hover:text-black" // Hover үед хар өнгөтэй
                        />
                      ) : (
                        <CiHeart
                          onClick={() => createSave(product._id)}
                          className="absolute right-4 top-4 w-10 h-10 text-white hover:text-black" // Hover үед хар өнгөтэй
                        />
                      )}
                    </Link>
                  </div>
                  <div className="text-3xl font-bold grid gap-2">
                    <p className="text-2xl font-normal">{product.title}</p>
                    <p className="flex gap-4 items-center">{product.price}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
