import Image from "next/image";
import { GoBell } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";

export const Headers = () => {
  // const [side, setSide] = useState(false);

  // const pathname: string = usePathname();
  // interface Path {
  //   name: string;
  //   path: string;
  // }
  // const paths: Path[] = [
  //   {
  //     name: "Ecommerce",
  //     path: "/",
  //   },
  //   {
  //     name: "Ангилал",
  //     path: "/category/ProductCategory",
  //   },
  // ];
  return (
    <div className=" bg-black px-6 py-4">
      <div className="flex">
        <div className="flex w-full">
          <div className="flex gap-8 items-center text-sm font-normal text-white">
            <div className="flex gap-4 items-center">
              <div className="relative w-8 h-8 flex bg-black">
                <Image src={"/Logo/PineconeStudio.png"} fill alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-6 text-white items-center">
            <GoBell />
          </div>
          <div className="flex gap-2">
            <div className="text-white flex items-center ">
              <IoPersonOutline />
            </div>
            <button className="w-[82px] h-9 text-white text-sm font-medium rounded-md">
              Username
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
