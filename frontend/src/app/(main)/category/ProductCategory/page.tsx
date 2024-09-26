import { products } from "@/components/mockdata";
import { ProductCard } from "@/components/ProductCard";
import { categories, numberss } from "./mockData";

export default function Home() {
  return (
    <div className="flex py-24 w-full px-96 bg-[#F4F4F5] justify-center ">
      <div className="container w-full">
        <div className="h-fit">
          <div className=" flex gap-5">
            <div className="grid w-[245px] h-fit gap-12 ">
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

            <div className=" grid grid-cols-3 grid-rows-5 gap-12 w-full">
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
        </div>
      </div>
    </div>
  );
}
