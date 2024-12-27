import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/(main)/components/ui/table";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { backend } from "@/axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Order {
  _id: string;
  userName: string;
  email: string;
  productId: {
    _id: string;
    image: string;
    title: string;
    price: string;
  };
  createdAt: string;
  payment: string;
  status: string[];
}
const statusBar = [
  "Шинэ захиалага",
  "Бэлтгэгдэж байна",
  "Хүргэлтэнд гарсан",
  "Хүргэгдсэн",
  "Цуцлагдсан",
];
export const OrderTab = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const getOrder = async () => {
      const { data } = await backend.get("/getOrder");
      setOrders(data.orders);
    };
    getOrder();
  }, []);

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
            <TableHead>Статус</TableHead>
            <TableHead>Дэлгэрэнгүй</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            return (
              <TableRow className="text-black" key={order._id}>
                <TableCell className="font-medium">{order._id}</TableCell>
                <TableCell className="">
                  <p className="text-sm font-semibold">{order.userName}</p>
                  <p className="text-sm font-normal text-[#3F4145]">
                    {order.email}
                  </p>
                </TableCell>
                <TableCell>
                  {new Date(order.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder={`${order.status}`} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {statusBar.map((item, index) => (
                          <SelectItem value="apple" key={index}>{item}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
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
