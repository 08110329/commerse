import { ContactProduct } from "@/components/ContactProduct";
import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ProductPage } from "@/components/ProductPage";

export default function Home() {
  const products = [
    {
      id: 1,
      img: "/3.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 2,
      img: "/4.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 3,
      img: "/5.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 4,
      img: "/6.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 5,
      img: "/8.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 6,
      img: "/3.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 7,
      img: "/4.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 8,
      img: "/6.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 9,
      img: "/11.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 10,
      img: "/8.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 11,
      img: "/10.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 12,
      img: "/image.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 13,
      img: "/3.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 14,
      img: "/11.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
    {
      id: 15,
      img: "/image2.png",
      title: "Chunky Glyph Tee",
      price: "120’000₮",
    },
  ];
  const categories = [
    {
      id: 1,
      title: "Малгай ",
    },
    {
      id: 2,
      title: "Усны сав",
    },
    {
      id: 3,
      title: "T-shirt",
    },
    {
      id: 4,
      title: "Hoodie",
    },
    {
      id: 5,
      title: "Tee",
    },
    {
      id: 6,
      title: "Цүнх",
    },
  ];
  const numberss = [
    {
      id: 1,
      size: "Free",
    },
    {
      id: 2,
      size: "S",
    },
    {
      id: 3,
      size: "M",
    },
    {
      id: 4,
      size: "L",
    },
    {
      id: 5,
      size: "XL",
    },
    {
      id: 6,
      size: "2XL",
    },
    {
      id: 7,
      size: "3XL",
    },
  ];
  return (
    <div className="w-full m-auto h-[100vh]">
      <Header />
      <div className="w-full py-24 px-96 flex gap-20 border">
        <div className="grid w-60 h-fit gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Ангилал</h1>
            <div className="flex flex-col gap-2">
              {categories.map((category) => {
                return (
                  <p
                    className="text-md font-medium hover:font-bold"
                    key={category.id}
                  >
                    {category.title}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Хэмжээ</h1>
            <div className="flex flex-col gap-2">
              {numberss.map((numbers) => {
                return (
                  <p
                    className="text-md font-medium hover:font-bold"
                    key={numbers.id}
                  >
                    {numbers.size}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-5 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <Footers />
    </div>
  );
}
