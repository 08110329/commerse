import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/(main)/components/ui/table";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Orders } from "@/mockData";

export const OrderTab = () => {
  return (
    <div className="mx-6 border rounded-xl">
      <Table className="bg-white rounded-xl ">
        <TableHeader className="">
          <TableRow className="text-xl font-bold">
            <TableHead className="px-6 py-6">Захиалга</TableHead>
          </TableRow>
          <TableRow className="bg-gray-100">
            <TableHead>Захиалгын ID дугаар</TableHead>
            <TableHead>Үйлчлүүлэгч</TableHead>
            <TableHead>Огноо</TableHead>
            <TableHead>Цаг</TableHead>
            <TableHead>Төлбөр</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Дэлгэрэнгүй</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Orders.map((Order) => {
            return (
              <TableRow className="text-black" key={Order.id}>
                <TableCell className="font-medium">
                  {Order.ЗахиалгынIDдугаар}
                </TableCell>
                <TableCell className="">
                  <p className="text-sm font-semibold">Zoloo soko</p>
                  <p className="text-sm font-normal text-[#3F4145]">
                    {Order.Үйлчлүүлэгч}
                  </p>
                </TableCell>
                <TableCell>{Order.Огноо}</TableCell>
                <TableCell>{Order.Цаг}</TableCell>
                <TableCell>{Order.Төлбөр}</TableCell>
                <TableCell className="">
                  <button className="flex items-center gap-2 border px-4 py-2 rounded-3xl">
                    {Order.Статус}
                    {Order.Статус !== "Хүргэгдсэн" ? <IoIosArrowDown /> : ""}
                  </button>
                </TableCell>
                <TableCell className="text-center">
                  <Link href={`/admin/orderDetail`}>
                    <IoIosArrowForward />
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
