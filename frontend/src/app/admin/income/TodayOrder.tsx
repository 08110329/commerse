import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/(main)/components/ui/table";
import { todayy } from "./mockData";

export const TodayOrder = () => {
  return (
    <div className="mx-6 bg-white border rounded-2xl">
      <Table className="">
        <TableHeader className="">
          <TableRow>
            <TableHead className="px-6 py-3">Захиалгын ID дугаар</TableHead>
            <TableHead>Захиалагч</TableHead>
            <TableHead>Төлбөр</TableHead>
            <TableHead>Огноо</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todayy.map((today) => {
            return (
              <TableRow className="text-black " key={today.id}>
                <TableCell className="font-medium px-6 py-4">
                  {today.productID}
                </TableCell>
                <TableCell className="">
                  <p className="text-sm font-normal">{today.Захиалагч.email}</p>
                  <p className="text-sm font-normal text-[#3F4145]">
                    {today.Захиалагч.phone}
                  </p>
                </TableCell>
                <TableCell>{today.Төлбөр}</TableCell>
                <TableCell>{today.Огноо}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
