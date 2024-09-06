import Image from "next/image";
import { BiEnvelope } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { LuPhone } from "react-icons/lu";

export const Footers = () => {
  return (
    <div className="w-full py-20 px-96 grid gap-12 bg-black">
      <div className="flex justify-between">
        <div className="relative w-[40px] h-[40px] bg-black">
          <Image src={`/Logo/PineconeStudio.png`} fill alt="logo" />
        </div>
        <div className="flex gap-10 ">
          <div className="flex gap-5 justify-center items-center text-sm font-medium text-white">
            <div className="border border-gray-500 w-12 h-12 rounded-full flex justify-center items-center">
              <LuPhone className="w-5 h-5" />
            </div>
            <p>(976) 7007-1234</p>
          </div>
          <div className="flex gap-5 justify-center items-center text-sm font-medium text-white">
            <div className="border border-gray-500 w-12 h-12 rounded-full flex justify-center items-center">
              <BiEnvelope className="w-5 h-5" />
            </div>
            <p>contact@ecommerce.mn</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-500"></div>
      <div className="flex text-sm font-medium justify-between text-white">
        <p>© 2024 Ecommerce MN</p>
        <div className="flex text-xl gap-7">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};
