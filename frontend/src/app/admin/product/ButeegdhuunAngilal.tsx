import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/(main)/components/ui/table";
import { productLists } from "./mockData";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { LuPencilLine } from "react-icons/lu";

export const ButeegdhuunAngilal = () => {
  return (
    <div className="mx-6 bg-white rounded-2xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="py-4 text-black">Бүтээгдэхүүн</TableHead>
            <TableHead className="text-black">Ангилал</TableHead>
            <TableHead className="text-black">Үнэ</TableHead>
            <TableHead className="text-black">Үлдэгдэл</TableHead>
            <TableHead className="text-black">Зарагдсан</TableHead>
            <TableHead className="text-black"> Нэмсэн огноо</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productLists.map((productList) => {
            return (
              <TableRow className="text-[#3F4145]" key={productList.id}>
                <TableCell className="pl-5">
                  <input type="checkbox"></input>
                </TableCell>
                <TableCell className="font-medium flex px-6 py-4 gap-2">
                  <div className="relative w-12 h-12">
                    <Image
                      src={productList.Бүтээгдэхүүн.image}
                      fill
                      alt="t-shirt"
                      className="rounded-full"
                    />
                  </div>
                  <div className="grid">
                    <h1>{productList.Бүтээгдэхүүн.title}</h1>
                    <p>{productList.Бүтээгдэхүүн.id}</p>
                  </div>
                </TableCell>
                <TableCell className="">{productList.Ангилал}</TableCell>
                <TableCell>{productList.Үнэ}</TableCell>
                <TableCell>{productList.Үлдэгдэл}</TableCell>
                <TableCell>{productList.Зарагдсан}</TableCell>
                <TableCell className="">{productList.НэмсэнОгноо}</TableCell>
                <TableCell className="flex gap-3 text-gray-400">
                  <HiOutlineTrash className="w-5 h-5" />
                  <LuPencilLine className="w-5 h-5" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
