"use client";

import { Button } from "@/app/(main)/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/(main)/components/ui/dialog";
import { Input } from "@/app/(main)/components/ui/input";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
        <div className="flex flex-col w-full gap-8 items-center pt-[48px] container bg-gray-50 m-auto">
          <div className="flex flex-col w-[729px] h-fit  bg-white gap-5 text-black rounded-3xl px-6 py-6">
            <h1>Дэлгүүрийн профайл үүсгэх</h1>
            <div className="grid gap-2">
              <div className="flex gap-2 justify-between border px-2 py-2 rounded-xl items-center">
                <div className="flex items-center gap-2">
                  <input type="radio"></input>
                  <p>Дэлгүүрийн төрлөө оруулна уу </p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Дэлгүүрийн төрөл</Button>
                  </DialogTrigger>
                  <DialogContent className="w-[551px] h-fit bg-white">
                    <DialogHeader>
                      <DialogTitle>
                        Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex items-center gap-4 border px-2 py-2 rounded-xl">
                        <FiSearch className="w-8 h-6 pl-2" />
                        <Input
                          id="name"
                          defaultValue="Дэргүүрийн төрлөө оруулна уу."
                        />
                      </div>
                      <p>Жич: Та үүнийг хүссэн үедээ өөрчилж болно.</p>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-white text-black">
                        Цуцлах
                      </Button>
                      <Button type="submit">Хадгалах</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex gap-2 justify-between border px-2 py-2 rounded-xl items-center">
                <div className="flex items-center gap-2">
                  <input type="radio"></input>
                  <p>Эхний бүтээгдэхүүнээ нэмнэ үү </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Бүтээгдэхүүн нэмэх</Button>
                  </DialogTrigger>
                  <DialogContent className="w-[551px] h-fit bg-white">
                    <DialogHeader>
                      <DialogTitle>
                        Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex items-center gap-4 border px-2 py-2 rounded-xl">
                        <FiSearch className="w-8 h-6 pl-2" />
                        <Input id="name" defaultValue="Хувцасны дэлгүүр" />
                      </div>
                      <p>Жич: Та үүнийг хүссэн үедээ өөрчилж болно.</p>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-white text-black">
                        Цуцлах
                      </Button>
                      <Button type="submit">Хадгалах</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex gap-2 justify-between border px-2 py-2 rounded-xl items-center">
                <div className="flex items-center gap-2">
                  <input type="radio"></input>
                  <p>Хүргэлтийг тохируулна уу</p>
                </div>

                <button className="border rounded-md px-2 py-1">
                  Хүргэлт тохируулах
                </button>
              </div>
            </div>
          </div>
        </div>
  );
}
