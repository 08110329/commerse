import { GrAddCircle } from "react-icons/gr";

export const HmjeeNemh = () => {
  return (
    <div className="flex flex-col w-full h-fit bg-white gap-5 text-black rounded-3xl border px-6 py-6">
      <h1>Төрөл</h1>
      <div className="grid gap-2">
        <div className="flex gap-2 items-center">
          <p>Өнгө</p>
          <GrAddCircle className="w-4 h-4" />
        </div>
        <div className="flex gap-2 items-center">
          <p>Хэмжээ</p>
          <GrAddCircle className="w-4 h-4" />
        </div>
      </div>
      <div>
        <button className="border py-2.5 px-4 rounded-xl">Төрөл нэмэх</button>
      </div>
    </div>
  );
};
