export const ProductNemh = () => {
  return (
    <div className="flex flex-col h-full bg-white px-6 py-6 rounded-3xl gap-4 text-black">
      <div className="grid gap-2">
        <label>Бүтээгдэхүүний нэр</label>
        <input
          placeholder="Нэр"
          className="border bg-gray-100 rounded-md px-2 py-2"
        ></input>
      </div>
      <div className="grid gap-2">
        <label>Нэмэлт мэдээлэл</label>
        <input
          placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
          className="border bg-gray-100 rounded-md px-4 py-4"
        ></input>
      </div>
      <div className="grid gap-2">
        <label>Барааны код</label>
        <input
          placeholder="#12345678"
          className="border bg-gray-100 rounded-md px-2 py-2"
        ></input>
      </div>
    </div>
  );
};
