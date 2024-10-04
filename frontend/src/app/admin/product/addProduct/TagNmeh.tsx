export const TagNmeh = () => {
  return (
    <div className="flex flex-col w-full h-fit bg-white gap-2 text-black rounded-3xl border px-6 py-6">
      <label>Таг</label>
      <input
        placeholder="Таг нэмэх..."
        className="border bg-gray-100 rounded-md px-2 py-2"
      ></input>
      <p className="text-gray-500">Санал болгох: Гутал , Цүнх , Эмэгтэй </p>
    </div>
  );
};
