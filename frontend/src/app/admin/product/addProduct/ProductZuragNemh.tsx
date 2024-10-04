import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";

export const ProductZuragNemh = () => {
  const [loading, setloading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files;
    if (file) setImage(file[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    setloading(true);

    const formData = new FormData();
    formData.append("image", image);
    const res = await axios.post("http://localhost:3001/upload", formData);
    console.log(res.data);
    setloading(false);
  };
  useEffect(() => {
    if (image) {
      handleUpload();
    }
  }, []);
  return (
    <div className="flex flex-col flex-1 h-full bg-white px-6 py-6 rounded-3xl gap-4 text-black">
      <h1>Бүтээгдэхүүний зураг</h1>
      <div className="grid grid-cols-4 grid-rows-1 w-full h-[125px] gap-2">
        <div className="relative border border-dashed rounded-xl">
          {image && <img src={URL.createObjectURL(image)} alt="upload" />}
          <input
            type="file"
            onChange={handleChangeFile}
            className="  absolute left-10 top-12 z-10 opacity-0 w-9"
          />
          <AiOutlinePicture className="w-6 h-6 absolute left-16 top-12 " />
        </div>
        <button
          className=" flex justify-center items-center"
          onClick={handleUpload}
        >
          {loading ? "Uploading ..." : <GrAddCircle className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
};
