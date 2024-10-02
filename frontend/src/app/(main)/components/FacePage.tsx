import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { products } from "./mockdata";
import Link from "next/link";
import { useUser } from "./providers/AuthProvider";

export const FacePage = () => {
  const { logout } = useUser();
  return (
    <div className="flex justify-center h-fit py-12 border-4">
      <div className="container flex justify-center  ">
        <div className="w-full grid gap-12">
          <button className="bg-black  text-white w-fit p-4" onClick={logout}>
            garah
          </button>
          <div className="relative w-full h-[600px]">
            <Image src={"/Slider.png"} fill alt="cover" />
          </div>
          <div className="w-full h-full grid grid-cols-4 grid-rows-6 [&>div:nth-child(7)]:col-span-2  [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(8)]:col-span-2  [&>div:nth-child(8)]:row-span-2 gap-6 ">
            {products.map((product, index) => {
              //ehnii diviin 7 child : column 2 cartiin zaig ogood row n bas ijil span 2 gj zurgiig tomsgono.
              const customHeight = // zurgiin ondoriig maplaj bg function deer constoor zarlaj ognoo indexeer 6dahi zurgiin orgon ondoriig ogood : indexiin 7 dahigg mon adil ogood: busad zurgiig engiin ogsn hemjeeg n dagna.tgeed zurgiig aguulj bui diviin class deer bichj ognoo
                index === 6
                  ? "h-[1000px] w-full"
                  : index === 7
                  ? "h-[1020px] w-full"
                  : "h-[450px] w-full";
              return (
                <div
                  className="w-full h-full grid gap-6 rounded-2xl"
                  key={product.id}
                >
                  <Link
                    href={"/productDetail/newProduct"}
                    className={`relative w-[244px] ${customHeight} overflow-hidden hover:border rounded-2xl`}
                  >
                    <Image
                      src={product.img}
                      fill
                      alt="prompt"
                      className="rounded-2xl hover:scale-110 duration-700"
                    />
                    <CiHeart className="absolute right-4 top-4 w-10 h-10" />
                  </Link>
                  <div className="text-3xl font-bold grid gap-1">
                    <p className="text-2xl font-normal">{product.title}</p>
                    <div className="flex gap-4 items-center">
                      <span>{product.price}</span>
                      <span className="text-2xl font-normal line-through ">
                        {product.sale}
                      </span>
                      <span className="text-3xl font-bold text-[#EF4444]">
                        {product.rates}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
