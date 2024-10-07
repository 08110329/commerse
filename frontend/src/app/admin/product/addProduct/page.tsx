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

export default function Home() {
  const [productName, setProductName] = useState<string>("");
  const [productDesc, setProductDesc] = useState<string>("");
  const [productCode, setProductCode] = useState<string>("");
  const [pprice, setPprice] = useState<number>();
  const [tshirheg, setTshirheg] = useState<number>();
  console.log(productName);
  console.log(productDesc);
  console.log(productCode);
  console.log(pprice);
  console.log(tshirheg);
  const [loading, setloading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files;
    if (file) setImage(file[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    setloading(true);

    const formData = new FormData();
    formData.append("image", image);
    const res = await axios.post("http://localhost:3001/upload", formData);
    console.log(res.data);
    setloading(false);
  };
  useEffect(() => {
    if (image) {
      handleUpload();
    }
  }, []);

  const createProduct = async () => {
    try {
      const res = await backend.post("/createProduct", {
        title: productName,
        description: productDesc,
        productCode: productCode,
        price: pprice,
        tshirheg: tshirheg,
      });
      setProductName("");
      setProductDesc("");
      setProductCode("");
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
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
                  <button onClick={() => createProduct()}>Add product</button>
                </div>
                <div className="grid gap-2">
                  <label>Нэмэлт мэдээлэл</label>
                  <input
                    placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                    className="border bg-gray-100 rounded-md px-4 py-4"
                    value={productDesc}
                    onChange={(event) => setProductDesc(event.target.value)}
                  ></input>
                  <button onClick={() => createProduct()}>Add product</button>
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
                  <div className="relative border border-dashed rounded-xl">
                    {image && (
                      <img src={URL.createObjectURL(image)} alt="upload" />
                    )}
                    <input
                      type="file"
                      onChange={handleChangeFile}
                      className="  absolute left-10 top-12 z-10 opacity-0 w-9"
                    />
                    <GrAddCircle className="w-6 h-6 absolute left-16 top-12 opacity-0" />
                  </div>
                  <button
                    className=" flex justify-center items-center"
                    onClick={handleUpload}
                  >
                    {loading ? (
                      "Uploading ..."
                    ) : (
                      <GrAddCircle className="w-6 h-6" />
                    )}
                  </button>
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
                <div className="w-full h-fit">
                  <p>Ерөнхий ангилал</p>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Сонгох" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full h-fit">
                  <p>Дэд ангилал</p>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Сонгох" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col w-full h-fit bg-white gap-5 text-black rounded-3xl border px-6 py-6">
                <h1>Төрөл</h1>
                <div className="grid gap-2">
                  <div className="flex gap-2 items-center">
                    <p>Өнгө</p>
                    <GrAddCircle className="w-4 h-4" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <p>Хэмжээ</p>
                    <GrAddCircle className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <button className="border py-2.5 px-4 rounded-xl">
                    Төрөл нэмэх
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full h-fit bg-white gap-2 text-black rounded-3xl border px-6 py-6">
                <label>Таг</label>
                <input
                  placeholder="Таг нэмэх..."
                  className="border bg-gray-100 rounded-md px-2 py-2"
                ></input>
                <p className="text-gray-500">
                  Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 px-6">
            <button className="border hover:bg-black hover:text-white rounded-lg px-5 py-4 bg-white">
              Ноорог
            </button>
            <button className="border hover:bg-black hover:text-white rounded-lg px-5 py-4 bg-white">
              Нийтлэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
