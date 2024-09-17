import { ContactProduct } from "@/components/ContactProduct";

import { ProductPage } from "@/components/ProductPage";

export default function Home() {
  return (
    <div className="flex bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className="h-screen">
          <div className="grid gap-20 pt-14 pb-24">
            <ProductPage />
          </div>
        </div>
      </div>
    </div>
  );
}
