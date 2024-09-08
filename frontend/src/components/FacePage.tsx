import Image from "next/image";
import { CiHeart } from "react-icons/ci";

export const FacePage = () => {
  const products = [
    {
      id: 1,
      img: "/image.png",
      title: "The Prompt Magazine",
      price: "120’000₮",
    },
    {
      id: 2,
      img: "/image2.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 3,
      img: "/3.png",
      title: "All Smiles Nalgene",
      price: "120’000₮",
    },
    {
      id: 4,
      img: "/4.png",
      title: "Wildflower Hoodie",
      price: "108’000₮",
      sale: "120’000₮",
      rates: "10%",
    },
    {
      id: 5,
      img: "/5.png",
      title: "Inkblot Tee",
      price: "120’000₮",
    },
    {
      id: 6,
      img: "/6.png",
      title: "Gestures Longsleeve",
      price: "120’000₮",
    },
    {
      id: 7,
      img: "/7.png",
      title: "Chunky Glyph Cap",
      price: "120’000₮",
    },
    {
      id: 8,
      img: "/8.png",
      title: "Local Styles Crewneck",
      price: "120’000₮",
    },
    {
      id: 9,
      img: "/9.png",
      title: "Chunky Glyph Cap",
      price: "120’000₮",
    },
    {
      id: 10,
      img: "/10.png",
      title: "Doodle Hoodie",
      price: "120’000₮",
    },
    {
      id: 11,
      img: "/image2.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 12,
      img: "/3.png",
      title: "All Smiles Nalgene",
      price: "120’000₮",
    },
    {
      id: 13,
      img: "/image.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 14,
      img: "/11.png",
      title: "All Smiles Nalgene",
      price: "120’000₮",
    },
    {
      id: 15,
      img: "/11.png",
      title: "Independent Corners Tee",
      price: "120’000₮",
    },
    {
      id: 16,
      img: "/image.png",
      title: "The Prompt Magazine",
      price: "120’000₮",
    },
    {
      id: 17,
      img: "/image2.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 18,
      img: "/3.png",
      title: "All Smiles Nalgene",
      price: "120’000₮",
    },
  ];
  return (
    <div className="w-screen h-screen">
       <div className="w-full py-24 px-96 grid gap-12">
      <div className="relative w-full h-[750px]">
        <Image src={"/Slider.png"} fill alt="cover" />
      </div>
      <div className="w-full h-full grid grid-cols-4 grid-rows-6 [&>div:nth-child(7)]:col-span-2  [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(8)]:col-span-2  [&>div:nth-child(8)]:row-span-2 gap-16">
        {products.map((product, index) => {
          //ehnii diviin 7 child : column 2 cartiin zaig ogood row n bas ijil span 2 gj zurgiig tomsgono.
          const customHeight = // zurgiin ondoriig maplaj bg function deer constoor zarlaj ognoo indexeer 6dahi zurgiin orgon ondoriig ogood : indexiin 7 dahigg mon adil ogood: busad zurgiig engiin ogsn hemjeeg n dagna.tgeed zurgiig aguulj bui diviin class deer bichj ognoo
            index === 6
              ? "h-[1100px] w-full"
              : index === 7
              ? "h-[1100px] w-full"
              : "h-[500px]";
          return (
            <div
              className="w-full h-full grid gap-4 overflow-hidden rounded-2xl"
              key={product.id}
            >
              <div
                className={`relative w-full ${customHeight} hover:scale-110 hover:border duration-700`}
              >
                <Image
                  src={product.img}
                  fill
                  alt="prompt"
                  className="rounded-2xl"
                />
                <CiHeart className="absolute right-4 top-4 w-10 h-10" />
              </div>
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
   
  );
};
