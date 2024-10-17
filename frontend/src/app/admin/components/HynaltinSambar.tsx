import Link from "next/link";
import { title } from "process";
import { BiSolidNotepad } from "react-icons/bi";
import { CiShoppingTag } from "react-icons/ci";
import { FaList } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IconType } from "react-icons/lib";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";

export const HynaltinSambar = () => {
  interface Path {
    name: string;
    path: string;
    icon: IconType;
  }
  const paths: Path[] = [
    {
      name: "Хяналтын самбар",
      icon: TfiLayoutGrid2Alt,
      path: "/admin",
    },
    {
      name: "Захиалга",
      icon: BiSolidNotepad,
      path: "/admin/Order",
    },
    {
      name: "Орлого",
      icon: CiShoppingTag,
      path: "/admin/income",
    },
    {
      name: "Бүтээгдэхүүн",
      icon: FaList,
      path: "/admin/product",
    },
    {
      name: "Тохиргоо",
      icon: IoMdSettings,
      path: "/admin/settingss",
    },
  ];
  return (
    <div className="w-[422px] container bg-white border">
      <div className="flex flex-col pt-6 gap-4 text-black">
        {paths.map((path, i) => {
          const IconComponent = path.icon;
          return (
            <Link
              href={path.path}
              className="flex hover:bg-gray-100 gap-4 py-2 px-4"
              key={i}
            >
              <IconComponent className="w-6 h-6" />
              <p className="text-base font-semibold">{path.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
