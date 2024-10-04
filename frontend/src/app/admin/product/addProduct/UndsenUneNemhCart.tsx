export const UndsenUneNemhCart = () => {
  return (
    <div className="flex flex-1 h-full bg-white px-6 py-6 rounded-3xl gap-4 text-black">
      <div className="flex-1 grid gap-2">
        <h1>Үндсэн үнэ</h1>
        <input
          placeholder="Үндсэн үнэ"
          className="border w-full px-4 py-2 rounded-md bg-gray-100"
        ></input>
      </div>
      <div className="flex-1 grid gap-2">
        <h1>Үлдэгдэл тоо ширхэг</h1>
        <input
          placeholder="Үлдэгдэл тоо ширхэг"
          className="border w-full px-4 py-2 rounded-md bg-gray-100"
        ></input>
      </div>
    </div>
  );
};
