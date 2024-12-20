"use client";

import { useFormik } from "formik";
import Link from "next/link";
import { LuEye } from "react-icons/lu";
import { PiEyeClosedDuotone } from "react-icons/pi";
import * as yup from "yup";
import { useUser } from "../components/providers/AuthProvider";
import { useState } from "react";
interface MyFormValues {
  нэр: string;
  имэйлХаяг: string;
  нууцҮг: string;
  нууцҮгДавтах: string;
}
export default function Home() {
  const { register } = useUser();
  const formik = useFormik<MyFormValues>({
    initialValues: {
      нэр: "",
      имэйлХаяг: "",
      нууцҮг: "",
      нууцҮгДавтах: "",
    },

    validationSchema: yup.object<MyFormValues>({
      нэр: yup.string().required("Нэрээ олуулна уу"),
      имэйлХаяг: yup
        .string()
        .email("Имэйл буруу байна")
        .required("Имэйл бичнэ үү"),
      нууцҮг: yup
        .string()
        .min(8, "Нууц үг 8 тэмдэгтээс дээш байх")
        .matches(/[A-Z]/, "Том үсэг орсон байх")
        .matches(/[a-z]/, "Жижиг үсэг орсон байх")
        // .matches(/0-9/, "Тоо орсон байх")
        .matches(/^\w/, "Тэмдэгт орсон байх")
        .required("Нууц үгээ оруулна уу"),
      нууцҮгДавтах: yup
        .string()
        .oneOf([yup.ref("нууцҮг")], "Нууц үг таарахгүй байна")
        .required("Нууц үгээ дахин оруулна уу"),
    }),

    onSubmit: async (values) => {
      try {
        await register({
          id: "",
          username: values.нэр,
          email: values.имэйлХаяг,
          password: values.нууцҮг,
        });
      } catch (error) {
        console.log("burtgeliin aldaa", error);
      }
      console.log("first message", values);
    },
  });
  const isValidUpperCase = /[A-Z]/.test(formik.values.нууцҮг);
  const isValidLowerCase = /[a-z]/.test(formik.values.нууцҮг);
  const isValidNumber = /0-9/.test(formik.values.нууцҮг);
  const isValidSpecialChar = /^\w/.test(formik.values.нууцҮг);
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isEye, setIsEye] = useState(false);

  return (
    <div className="flex py-24 px-96 bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className="w-screen h-screen">
          <div className="w-full h-fit grid gap-12 pb-24 pt-28 justify-center ">
            <div className="grid gap-6">
              <h1 className="font-semibold text-2xl flex justify-center text-black">
                Бүртгүүлэх
              </h1>
              <div className="grid gap-5">
                <form
                  onSubmit={formik.handleSubmit}
                  className="grid gap-5 text-black"
                >
                  <input
                    placeholder=" Нэр"
                    name="нэр"
                    type="text"
                    className="w-96 h-9 border rounded-2xl pl-2"
                    value={formik.values.нэр}
                    onChange={formik.handleChange}
                  ></input>
                  {formik.errors.нэр ? (
                    <p className="text-red-300">{formik.errors.нэр}</p>
                  ) : null}
                  <input
                    placeholder=" Имэйл хаяг"
                    name="имэйлХаяг"
                    type="email"
                    className="w-96 h-9 border rounded-2xl pl-2"
                    value={formik.values.имэйлХаяг}
                    onChange={formik.handleChange}
                  ></input>
                  {formik.errors.имэйлХаяг ? (
                    <p className="text-red-300">{formik.errors.имэйлХаяг}</p>
                  ) : null}
                  <div className="relative">
                    <input
                      placeholder=" Нууц үг"
                      name="нууцҮг"
                      type={isEyeOpen ? "text" : "password"}
                      className="w-96 h-9 border rounded-2xl pl-2"
                      value={formik.values.нууцҮг}
                      onChange={formik.handleChange}
                    ></input>
                    <button
                      className="absolute right-3 top-2"
                      onClick={() => setIsEyeOpen(!isEyeOpen)}
                    >
                      {isEyeOpen ? (
                        <LuEye size={20} />
                      ) : (
                        <PiEyeClosedDuotone size={20} />
                      )}
                    </button>
                    {formik.errors.нууцҮг ? (
                      <p className="text-red-300">{formik.errors.нууцҮг}</p>
                    ) : null}
                  </div>
                  <div className="relative">
                    <input
                      placeholder=" Нууц үг давтах "
                      name="нууцҮгДавтах"
                      type={isEye ? "text" : "password"}
                      className="w-96 h-9 border rounded-2xl pl-2"
                      value={formik.values.нууцҮгДавтах}
                      onChange={formik.handleChange}
                    ></input>
                    <button
                      className="absolute right-3 top-2"
                      onClick={() => setIsEye(!isEye)}
                    >
                      {isEye ? (
                        <LuEye size={20} />
                      ) : (
                        <PiEyeClosedDuotone size={20} />
                      )}
                    </button>
                    {formik.errors.нууцҮгДавтах ? (
                      <p className="text-red-300">
                        {formik.errors.нууцҮгДавтах}
                      </p>
                    ) : null}
                  </div>

                  <div className="text-xs font-medium grid gap-1 pl-2">
                    <li
                      className={`${
                        formik.values.нууцҮг === ""
                          ? "text-gray-500"
                          : isValidUpperCase
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      Том үсэг орсон байх
                    </li>
                    <li
                      className={`${
                        formik.values.нууцҮг === ""
                          ? "text-gray-500"
                          : isValidLowerCase
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      Жижиг үсэг орсон байх
                    </li>
                    <li
                      className={`${
                        formik.values.нууцҮг === ""
                          ? "text-gray-500"
                          : isValidNumber
                          ? "text-green-300"
                          : "text-red-600"
                      }`}
                    >
                      Тоо орсон байх
                    </li>
                    <li
                      className={`${
                        formik.values.нууцҮг === ""
                          ? "text-gray-500"
                          : isValidSpecialChar
                          ? "text-green-700"
                          : "text-red-600"
                      }`}
                    >
                      Тэмдэгт орсон байх
                    </li>
                  </div>
                  <button
                    className="border justify-center flex text-[#2563EB] py-2 rounded-2xl bg-white border-[#2563EB] hover:bg-[#2563EB] hover:text-white h-9"
                    type="submit"
                  >
                    Үүсгэх
                  </button>
                </form>
              </div>
            </div>
            <Link
              className="flex justify-center border text-[#2563EB] py-2 rounded-2xl bg-white border-[#2563EB] hover:bg-[#2563EB] hover:text-white"
              href={"/login"}
            >
              <button className="font-medium text-sm">Нэвтрэх</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
