import Image from "next/image";

export const ProductCart = () => {
  return (
    <div className="flex gap-3">
      <div className="relative w-10 h-10 ">
        <Image src={"/Logo/cup.png"} fill alt="cup" className="rounded-full" />
      </div>
      <div className="grid">
        <p>WOMEN'S HORSEBIT MULE</p>
        <p>#12345678</p>
      </div>
    </div>
  );
};
