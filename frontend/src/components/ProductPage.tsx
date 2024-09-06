import Image from "next/image";
import { CiHeart, CiStar } from "react-icons/ci";

export const ProductPage = () => {
  const numberss = [
    {
      id: 1,
      size: "S",
    },
    {
      id: 2,
      size: "M",
    },
    {
      id: 3,
      size: "L",
    },
    {
      id: 4,
      size: "XL",
    },
    {
      id: 5,
      size: "2XL",
    },
  ];
  const iconStars = [
    {
      id: 1,
      icon: <CiStar />,
    },
    {
      id: 2,
      icon: <CiStar />,
    },
    {
      id: 3,
      icon: <CiStar />,
    },
    {
      id: 4,
      icon: <CiStar />,
    },
    {
      id: 5,
      icon: <CiStar />,
    },
  ];
  const productsImage = [
    {
      id: 1,
      img: "/tom.png",
    },
    {
      id: 2,
      img: "/Logo/2.png",
    },
    {
      id: 3,
      img: "/Logo/3.png",
    },
    {
      id: 4,
      img: "/Logo/4.png",
    },
  ];
  return (
    <div>
      <div className="flex gap-8">
        <div className="flex gap-6">
          <div className="flex flex-col gap-2 justify-center">
            {productsImage.map((productImage) => {
              return (
                <div
                  className=" w-[100px] justify-center "
                  key={productImage.id}
                >
                  <div className="relative w-[100px] h-[100px] ">
                    <Image src={productImage.img} fill alt="2" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative w-[550px] h-[721px]">
            <Image src={"/tom.png"} fill alt="tom" />
          </div>
        </div>
        <div className="pt-28	flex flex-col gap-14">
          <div className="pr-20 grid gap-9">
            <div className="grid gap-5">
              <div className="grid gap-4">
                <div className="border rounded-2xl w-fit px-3 text-md font-semibold border-[#2563EB]">
                  <p>шинэ</p>
                </div>
                <div className="text-4xl font-bold flex items-center gap-4">
                  <p>Wildflower Hoodie</p>
                  <CiHeart className="w-8 h-8 " />
                </div>
                <p className="font-normal text-xl">
                  Зэрлэг цэцгийн зурагтай даавуун материалтай цамц
                </p>
              </div>
              <div className="font-normal text-lg grid gap-2">
                <p className="underline">Хэмжээний заавар</p>
                <div className="flex gap-2">
                  {numberss.map((numbers) => {
                    return (
                      <div
                        className="border rounded-full w-9 h-9 flex justify-center items-center text-sm font-normal border-black hover:bg-black hover:text-white"
                        key={numbers.id}
                      >
                        <p>{numbers.size}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="border rounded-full w-9 h-9 flex justify-center items-center border-black hover:bg-gray-200 hover:border-gray-400">
                  <p>-</p>
                </div>
                <p>1</p>
                <div className="border rounded-full w-9 h-9 flex justify-center items-center border-black hover:bg-gray-200 hover:border-gray-400">
                  <p>+</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-48">
              <p className="text-2xl font-bold">120’000₮</p>
              <button className="text-base font-medium bg-[#2563EB] h-9 rounded-3xl text-white">
                Сагсанд нэмэх
              </button>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex gap-4 text-xl font-normal">
              <p>Үнэлгээ</p>
              <p className="text-[#2563EB] border-b-[1.5px] border-[#2563EB]">
                бүгдийг харах
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {iconStars.map((iconStar) => {
                  return (
                    <div
                      className=" text-[yellow] text-2xl hover:bg-yellow-300 "
                      key={iconStar.id}
                    >
                      {iconStar.icon}
                    </div>
                  );
                })}
              </div>
              <div className="font-medium text-lg flex">
                <p className="font-semibold text-lg">4.6</p>
                <p className="text-[#71717A]">(24)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
