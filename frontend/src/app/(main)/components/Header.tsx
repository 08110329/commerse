"use client";

import { useContext, useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuHeart, LuSearch } from "react-icons/lu";
import { Search } from "./Search";
import { IoPersonOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useUser } from "./providers/AuthProvider";
import { backend } from "@/axios";
interface Products {
  _id: string;
  title: string;
  price: string;
  image: string[];
  description: string;
  size: string;
  color: string;
  productCode: string;
  torolId: string;
  quantity: number;
}
export const Header = () => {
  const [side, setSide] = useState(false);
  const { user } = useUser();
  const { logout } = useUser();
  const [products, setProducts] = useState<Products[]>([]);
  const [searchName, setSearchName] = useState("");

  const pathname: string = usePathname();
  interface Path {
    name: string;
    path: string;
  }
  const paths: Path[] = [
    {
      name: "Ecommerce",
      path: "/",
    },
    {
      name: "Ангилал",
      path: "/category/ProductCategory",
    },
  ];
  const Upaths: Path[] = [
    {
      name: "Бүртгүүлэх",
      path: "/register",
    },
    {
      name: " Нэвтрэх",
      path: "/login",
    },
  ];

  const HandleSaveClick = () => {
    if (!user.isAuthenticated) {
      toast.info("Hadgalsan baraagaa harhiin tuld nevterne uu!");
    }
  };
  const HandleSagsClick = () => {
    if (!user.isAuthenticated) {
      toast.info("Sagsalsan baraagaa harhiin tuld nevterne uu!");
    }
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await backend.get("/getProducts");
      setProducts(data.products);
    };
    getData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product["title"].toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className=" bg-black px-6 py-4">
      <div className="w-full justify-between">
        <div className="flex">
          <div className="flex w-full">
            <div className="flex gap-8 items-center text-sm font-normal text-white">
              <div className="flex gap-4 items-center">
                <Link className="relative w-8 h-8 flex bg-black" href={`/`}>
                  <Image
                    src="/Logo/PineconeStudio.png"
                    fill
                    alt="Pinecone Studio Logo"
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 32px) 32px, 40px" 
                  />
                </Link>
              </div>
              {paths.map((path, index) => (
                <Link key={index} href={path.path}>
                  <div
                    style={{
                      opacity: pathname === path.path ? "1" : "0.5",
                    }}
                  >
                    <p>{path.name}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className=" w-full flex justify-center relative">
              <div className=" w-[300px] h-10 flex justify-center items-center bg-gray-800 gap-2 rounded-md">
                <button
                  className=" flex justify-center items-center text-white"
                  onClick={() => setSide(!side)} 
                >
                  <LuSearch className="w-6 h-6 " />
                </button>
                <input
                  className="w-60 h-6 bg-gray-800 outline-none"
                  placeholder="Бүтээгдэхүүн хайх"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                ></input>
                 <div
                  className={`absolute top-14 z-10 ${
                    side ? "visible" : "hidden" 
                  }`}
                >
                  <Search products={filteredProducts}/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-6 text-white items-center">
              {user && (
                <Link
                  href={`${user.isAuthenticated ? "/save" : "/login"}`}
                  onClick={HandleSaveClick}
                >
                  <LuHeart className="w-6 h-6" />
                </Link>
              )}
              {user && (
                <Link
                  href={`${
                    user.isAuthenticated ? "/buySteps/caseOne" : "/login"
                  }`}
                  onClick={HandleSagsClick}
                >
                  <HiOutlineShoppingCart className="w-6 h-6" />
                </Link>
              )}
              {user.isAuthenticated && (
                <Link href={`/users/UserInfo`}>
                  <IoPersonOutline className="w-6 h-6" />
                </Link>
              )}

              {user?.isAuthenticated && (
                <button
                  className="w-[101px] h-9 text-white border border-[#2563EB] hover:bg-[#2563EB] text-sm font-medium rounded-md"
                  onClick={logout}
                >
                  Гарах
                </button>
              )}
            </div>
            <div className="flex gap-2 ">
              {!user.isAuthenticated && (
                <div className="flex gap-2">
                  {Upaths.map((Upath, i) => {
                    return (
                      <Link href={Upath.path} key={i}>
                        <button
                          className="w-[101px] h-9 text-white border border-[#2563EB] hover:bg-[#2563EB] text-sm font-medium rounded-md"
                          style={{
                            background:
                              pathname === Upath.path ? "#2563EB" : "",
                          }}
                        >
                          {Upath.name}
                        </button>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
