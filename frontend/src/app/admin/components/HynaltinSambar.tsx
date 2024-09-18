import { BiSolidNotepad } from "react-icons/bi";
import { CiShoppingTag } from "react-icons/ci";
import { FaList } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";

export const HynaltinSambar = () => {
  return (
    <div className="w-fit h-screen bg-white">
      <div className="flex flex-col pt-6 gap-4 text-black">
        <div className="flex hover:bg-gray-100 gap-4 py-2 px-4">
          <TfiLayoutGrid2Alt className="w-6 h-6" />
          <p className="text-base font-semibold">Хяналтын самбар</p>
        </div>
        <div className="flex hover:bg-gray-100 gap-4 py-2 px-4">
          <BiSolidNotepad className="w-6 h-6" />
          <p className="text-base font-semibold">Захиалга</p>
        </div>
        <div className="flex hover:bg-gray-100 gap-4 py-2 px-4">
          <CiShoppingTag className="w-6 h-6" />
          <p className="text-base font-semibold">Орлого</p>
        </div>
        <div className="flex hover:bg-gray-100 gap-4 py-2 px-4">
          <FaList className="w-6 h-6" />
          <p className="text-base font-semibold">Бүтээгдэхүүн</p>
        </div>
        <div className="flex hover:bg-gray-100 gap-4 py-2 px-4">
          <IoMdSettings className="w-6 h-6" />
          <p className="text-base font-semibold">Тохиргоо</p>
        </div>
      </div>
    </div>
  );
};
