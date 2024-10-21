"use client";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { backend } from "@/axios";
import Link from "next/link";
import { useUser } from "../components/providers/AuthProvider";
import { useParams } from "next/navigation";
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
interface save {
  _id:string;
  users:string;
  products:string;
}
export default function Home() {
  const [products, setProducts] = useState<Products[]>([]);
  const [saves, setSaves]=useState<save[]>([])
  const [userData, setUserData] = useState({ _id: "", username: "" });
  const { user } = useUser();
  const { id } = useParams(); 
  const [productId, setProductId] = useState({_id: "", title:"", price:"",})
 

  useEffect(()=> {
    const getSave =async () => {
      const res =await backend.get("/getSave")
      console.log(res.data.saves)
      setSaves(res.data.saves)
    }

    if (id) {
      getSave();
    }
  },[id])

  useEffect(() => {
    const getUsername = async () => {
      const res = await backend.get(`/user/getUser/${user?.user?.id}`);
      setUserData(res.data.user);
      // console.log(res.data.user);
    };
    getUsername();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await backend.get(`/getProduct/${id}`); 
        setProductId(res.data.products); 
        // setSelectImage(data.product.image[0]); // Set default image from the product
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
      getData();
  }, []);

  const createSave = async () => {
    try {
      const res = await backend.post("/createSave", {
        users: userData?._id,
       products: productId?._id
      });
      setUserData(res.data.userData)
      setProductId(res.data.productId)     
       console.log("Saved successfully:", res.data);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };


  return (
    <div className="flex py-24 h-screen px-96 bg-[#F4F4F5] justify-center ">
      <div className="container w-[590px] h-screen flex flex-col justify-center gap-4 text-black">
        <div className="flex text-xl font-bold gap-1">
          <p>Хадгалсан бараа </p>
          <p className="text-[#5E6166]">(3)</p>
        </div>
        <div className="grid gap-6 ">
          {saves.map((save) => {
            return (
              <div
                className="flex gap-6 h-32 bg-white p-6 rounded-2xl"
                key={save._id}
              >
                <Link  href={`${save._id}`} className="relative w-32 ">
                  <Image
                    src={save.products}
                    fill
                    alt="t-shirt"
                    className="rounded-md object-cover"
                  />
                </Link>
                <div className="flex flex-col w-full gap-1">
                  <p className="font-normal text-base">{productId.title}</p>

                  <p className="text-base font-bold">{productId.price}</p>
                  <button className="border w-fit px-3 rounded-xl hover:bg-[#2563EB] hover:text-white border-[#2563EB] text-[#2563EB]">
                    Сагслах
                  </button>
                </div>
                <button className=" w-6 h-6">
                  <FaRegHeart onClick={() => createSave()}/>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
