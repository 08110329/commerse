import { ContactProduct } from "@/app/(main)/components/ContactProduct";
import { ProductPage } from "@/app/(main)/components/ProductPage";

export default function Home() {
  return (
    <div className="flex bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className="h-fit">
          <div className="grid gap-20 pt-14 pb-24">
            <ProductPage />
            <div className="grid gap-7 ">
              <h1 className="text-4xl font-bold">Холбоотой бараа</h1>
              <ContactProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
