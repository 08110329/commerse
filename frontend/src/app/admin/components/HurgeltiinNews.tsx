import { LiaCarSideSolid } from "react-icons/lia";

export const HurgeltiinNews = () => {
  return (
    <div className="flex-1 grid gap-5">
      <div className="flex flex-col w-full h-fit bg-white gap-5 text-black rounded-3xl border">
        <p className="pt-5 px-6 text-base font-normal">Хүргэлтийн мэдээлэл</p>
        <div className="pt-6 pb-12 px-6 border-t-2">
          <p className="text-base font-normal">Гэр</p>
          <p className="text-base font-semibold">
            Улаанбаатар, Сонгинохайрхан дүүрэг, 1-р хороо, 14r bair 8r orts 6r
            darvar
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full h-fit bg-white gap-5 text-black rounded-3xl border">
        <p className="pt-5 px-6 text-base font-normal">Төлбөрийн мэдээлэл</p>
        <div className="px-6 py-6 border-t-2 grid gap-2">
          <p className="text-base font-normal">Бүтээгдэхүүн</p>
          <div className="grid gap-4">
            <div className="flex justify-between">
              <div className="flex gap-1 text-base font-semibold">
                <p>WOMEN'S HORSEBIT MULE Women’s horsebit mule</p>
                <p>x2</p>
              </div>
              <p className="text-base font-semibold">₮677,100</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-1 text-base font-semibold">
                <p>WOMEN'S HORSEBIT MULE Women’s horsebit mule</p>
                <p>x2</p>
              </div>
              <p className="text-base font-semibold">₮677,100</p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-10 items-center ">
                <p className="text-sm font-semibold"> Хүргэлт</p>
                <LiaCarSideSolid className="w-6 h-6" />
              </div>
              <p className="text-base font-semibold">₮ 5,000</p>
            </div>
            <p className="border mt-4"></p>
            <div className="flex justify-between text-base font-semibold">
              <p>Нийт төлсөн дүн</p>
              <p className="text-lg">₮807,800</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
