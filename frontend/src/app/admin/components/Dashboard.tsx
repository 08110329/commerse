import { BsCurrencyDollar } from "react-icons/bs";
import { HynaltinSambar } from "./HynaltinSambar";
import { BiSolidNotepad } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { ProductCart } from "./ProductCart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/(main)/components/ui/table";

export const Dashboard = () => {
  const baraaMaps = [
    {
      id: 1,
      nomer: "1",
      Зарагдсан: "200",
      Үнэ: "12,000₮",
    },
    {
      id: 2,
      nomer: "2",
      Зарагдсан: "200",
      Үнэ: "12,000₮",
    },
    {
      id: 3,
      nomer: "3",
      Зарагдсан: "200",
      Үнэ: "12,000₮",
    },
    {
      id: 4,
      nomer: "4",
      Зарагдсан: "200",
      Үнэ: "12,000₮",
    },

    {
      id: 5,
      nomer: "5",
      Зарагдсан: "200",
      Үнэ: "12,000₮",
    },
    {
      id: 6,
      nomer: "6",
      Зарагдсан: "200",
      Үнэ: "12,000₮",
    },
    {
      id: 7,
      nomer: "7",
      Зарагдсан: "200",
      Үнэ: "12,000₮",
    },
    {
      id: 8,
      nomer: "8",
      Зарагдсан: "200",
      Үнэ: "12,000₮",
    },
    {
      id: 9,
      nomer: "9",
      Зарагдсан: "200",
      Үнэ: "12,000₮",
    },
  ];
  return (
    <div className="h-screen bg-gray-50 flex justify-center">
      <div className="h-screen container ">
        <div className="w-full pt-8">
          <div className="flex w-[1270px] h-[136px]  mx-6 gap-6">
            <div className="px-6 py-4 flex-1 bg-white grid gap-3 rounded-xl">
              <div className="flex gap-2 text-base font-semibold items-center">
                <BsCurrencyDollar className="w-5 h-5" />
                <p>Орлого</p>
              </div>
              <span className="text-3xl font-bold">235,000₮</span>
              <p className="text-sm font-normal text-[#5E6166]">Өнөөдөр</p>
            </div>
            <div className="px-6 py-4 flex-1  bg-white grid gap-3 rounded-xl">
              <div className="flex gap-2 text-base font-semibold items-center">
                <BiSolidNotepad className="w-5 h-5" />
                <p>Захиалга</p>
              </div>
              <span className="text-3xl font-bold">58</span>
              <p className="text-sm font-normal text-[#5E6166]">Өнөөдөр</p>
            </div>
          </div>
          <div className="w-[1270px] mt-9 mx-6 gap-6 flex ">
            <div className="grid bg-white flex-1 px-6 py-4 gap-5 rounded-xl">
              <div className="text-lg font-semibold flex items-center justify-between">
                <p>Шилдэг бүтээгдэхүүн</p>
                <IoIosArrowForward />
              </div>
              <div>
                <Table>
                  <TableHeader className=" bg-gray-100">
                    <TableRow>
                      <TableHead className="w-[100px]">№</TableHead>
                      <TableHead>Бүтээгдэхүүн</TableHead>
                      <TableHead>Зарагдсан</TableHead>
                      <TableHead className="text-right">Үнэ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {baraaMaps.map((baraaMap) => (
                      <TableRow key={baraaMap.id}>
                        <TableCell className="font-medium">
                          {baraaMap.nomer}
                        </TableCell>
                        <TableCell>
                          <ProductCart />
                        </TableCell>
                        <TableCell>{baraaMap.Зарагдсан}</TableCell>
                        <TableCell className="text-right">
                          {baraaMap.Үнэ}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="flex-1 h-fit bg-white px-6 py-4 gap-6 rounded-xl">
              <div className="text-lg font-semibold flex items-center justify-between">
                <p>Борлуулалт</p>
                <IoIosArrowForward />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
