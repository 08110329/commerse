"use client";

import { IoIosArrowBack } from "react-icons/io";
import { ChangeEvent, useEffect, useState } from "react";
import { backend } from "@/axios";
import axios from "axios";
import { GrAddCircle } from "react-icons/gr";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/(main)/components/ui/select";
import Image from "next/image";
import { numberss } from "@/mockData";

interface Torols {
  _id: string;
  torol: string;
}

export default function Home() {
  const [productName, setProductName] = useState<string>("");
  const [productDesc, setProductDesc] = useState<string>("");
  const [productCode, setProductCode] = useState<string>("");
  const [pprice, setPprice] = useState<number>();
  const [tshirheg, setTshirheg] = useState<number>();
  const [zurag, setZurag] = useState<string>("");// zurag upload hiihd 
  const [hemjee, setHemjee] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("");
  const [torols, setTorols] = useState<Torols[]>([]);

  useEffect(() => {
    const handleUpload = async () => {
      if (!image) return;

      setLoading(true);

      const formData = new FormData();
      formData.append("image", image);
      const res = await axios.post("http://localhost:3001/upload", formData);
      console.log(res.data);
      setZurag(res.data.secure_url);
      setLoading(false);
    };
    if (image) {
      handleUpload();
    }
  }, [image]);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files;

    if (file) setImage(file[0]);
  };

  const createProduct = async () => {
    try {
      const res = await backend.post("/product", {
        title: productName,
        description: productDesc,
        productCode: productCode,
        price: pprice,
        image: zurag,
        tshirheg: tshirheg,
        size: hemjee,
        torolId: category,
      });
      setProductName("");
      setProductDesc("");
      setProductCode("");
      setZurag("");
      setHemjee([]);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCategory = async () => {
      const res = await backend.get("/getCategory");
      console.log(res.data.torols);
      setTorols(res.data.torols);
    };
    getCategory();
  }, []);
  console.log(category);

  const createCategory = async () => {
    try {
      const res = await backend.post("/category", {
        torol: category,
      });
      setCategory("");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle size selection
  const handleSizeSelection = (size: string) => {
    setHemjee(
      (prevSizes) =>
        prevSizes.includes(size)
          ? prevSizes.filter((s) => s !== size) // Unselect if already selected
          : [...prevSizes, size] // Add to selection if not selected
    );
  };
  return (
    <div className="w-full h-screen bg-gray-50">
      <div className="w-full h-fit container flex ">
        <div className="flex flex-col w-full gap-8 ">
          <div className="w-screen border flex h-fit bg-white text-black px-4 py-2 items-center gap-4">
            <IoIosArrowBack />
            <p className="py-3 text-base font-normal">Бүтээгдэхүүн нэмэх</p>
          </div>
          <div className="flex gap-5 px-6">
            <div className="flex flex-col flex-1 gap-6">
              <div className="flex flex-col h-full bg-white px-6 py-6 rounded-3xl gap-4 text-black">
                <div className="grid gap-2">
                  <label>Бүтээгдэхүүний нэр</label>
                  <input
                    placeholder="Нэр"
                    className="border bg-gray-100 rounded-md px-2 py-2"
                    value={productName}
                    onChange={(event) => setProductName(event.target.value)}
                  ></input>
                </div>
                <div className="grid gap-2">
                  <label>Нэмэлт мэдээлэл</label>
                  <input
                    placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                    className="border bg-gray-100 rounded-md px-4 py-4"
                    value={productDesc}
                    onChange={(event) => setProductDesc(event.target.value)}
                  ></input>
                </div>
                <div className="grid gap-2">
                  <label>Барааны код</label>
                  <input
                    placeholder="#12345678"
                    className="border bg-gray-100 rounded-md px-2 py-2"
                    value={productCode}
                    onChange={(event) => setProductCode(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="flex flex-col flex-1 h-full bg-white px-6 py-6 rounded-3xl gap-4 text-black">
                <h1>Бүтээгдэхүүний зураг</h1>
                <div className="grid grid-cols-4 grid-rows-1 w-full h-[125px] gap-2">
                  <div className="border border-dashed rounded-xl">
                    {image && (
                      <Image
                        src={URL.createObjectURL(image)}
                        alt="upload"
                        width={125}
                        height={125}
                      />
                    )}
                  </div>
                  <div className="relative border border-dashed rounded-xl">
                    <input
                      type="file"
                      onChange={handleChangeFile}
                      className="  absolute left-10 top-12 z-10  w-20 opacity-0"
                    />
                    <button className="absolute left-16 top-12">
                      {loading ? (
                        "Uploading ..."
                      ) : (
                        <GrAddCircle className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 h-full bg-white px-6 py-6 rounded-3xl gap-4 text-black">
                <div className="flex-1 grid gap-2">
                  <h1>Үндсэн үнэ</h1>
                  <input
                    placeholder="Үндсэн үнэ"
                    type="number"
                    className="border w-full px-4 py-2 rounded-md bg-gray-100"
                    value={pprice}
                    onChange={(event) =>
                      setPprice(parseFloat(event.target.value))
                    }
                  ></input>
                </div>
                <div className="flex-1 grid gap-2">
                  <h1>Үлдэгдэл тоо ширхэг</h1>
                  <input
                    placeholder="Үлдэгдэл тоо ширхэг"
                    type="number"
                    className="border w-full px-4 py-2 rounded-md bg-gray-100"
                    value={tshirheg}
                    onChange={(event) =>
                      setTshirheg(parseFloat(event.target.value))
                    }
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex-1 grid gap-5">
              <div className="flex flex-col w-full h-fit bg-white gap-5 text-black rounded-3xl border px-6 py-6">
                <div className="w-full h-fit flex flex-col gap-3">
                  <p>Ерөнхий ангилал</p>
                  <input
                    className="border w-full px-2 py-2"
                    placeholder="  text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                  />
                  <div className="flex justify-center">
                    <button
                      className="border hover:bg-black hover:text-white rounded-lg px-2 py-2 bg-white"
                      onClick={() => createCategory()}
                    >
                      add category
                    </button>
                  </div>
                  <Select onValueChange={(value) => setCategory(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Сонгох" />
                    </SelectTrigger>
                    <SelectContent>
                      <div className="flex flex-col gap-2">
                        {torols?.map((torol, index) => (
                          <SelectItem
                            value={torol._id}
                            className="text-md font-medium hover:font-bold"
                            key={index}
                          >
                            {torol.torol}
                          </SelectItem>
                        ))}
                      </div>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col bg-white gap-5 text-black rounded-3xl border px-6 py-6">
                <h1>Хэмжээ сонгох</h1>
                <div className="flex flex-col gap-2">
                  {numberss.map((number) => (
                    <label key={number.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={hemjee.includes(number.size)}
                        onChange={() => handleSizeSelection(number.size)}
                      />
                      {number.size}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 px-6">
            <button className="border hover:bg-black hover:text-white rounded-lg px-5 py-4 bg-white">
              Ноорог
            </button>
            <button
              className="border hover:bg-black hover:text-white rounded-lg px-5 py-4 bg-white"
              onClick={() => createProduct()}
            >
              Нийтлэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
