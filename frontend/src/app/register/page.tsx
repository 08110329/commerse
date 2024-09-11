"use client";

import { Formik, useFormik } from "formik";

export default function Home() {
  const formik = useFormik({
    initialValues: {
      нэр: " ",
      имэйлХаяг: " ",
      нууцҮг: " ",
      нууцҮгДавтах: " ",
    },
    onSubmit: (values) => {
      alert(
        `hello ${formik.values.нэр} ${formik.values.имэйлХаяг} ${formik.values.нууцҮг} ${formik.values.нууцҮгДавтах}`
      );
      console.log("first message", formik.values);
    },
  });
  console.log("firs", formik.values);
  return (
    <div className="flex py-24 px-96 bg-[#F4F4F5] justify-center ">
      <div className="container flex  justify-center ">
        <div className="w-screen h-screen">
          <div className="w-full h-fit grid gap-12 pb-24 pt-28 justify-center ">
            <div className="grid gap-6">
              <h1 className="font-semibold text-2xl flex justify-center">
                Бүртгүүлэх
              </h1>
              <div className="grid gap-5">
                <form onSubmit={formik.handleSubmit} className="grid gap-5">
                  <input
                    name="Нэр"
                    value={formik.values.нэр}
                    onChange={formik.handleChange}
                    placeholder=" Нэр"
                    className="w-96 h-9 border rounded-2xl pl-2"
                  ></input>
                  <input
                    name="Имэйл хаяг"
                    placeholder=" Имэйл хаяг"
                    className="w-96 h-9 border rounded-2xl pl-2"
                    value={formik.values.имэйлХаяг}
                    onChange={formik.handleChange}
                  ></input>
                  <input
                    name="Нууц үг"
                    placeholder=" Нууц үг"
                    className="w-96 h-9 border rounded-2xl pl-2"
                    value={formik.values.нууцҮг}
                    onChange={formik.handleChange}
                  ></input>
                  <input
                    name="Нууц үг давтах"
                    placeholder=" Нууц үг давтах "
                    className="w-96 h-9 border rounded-2xl pl-2"
                    value={formik.values.нууцҮгДавтах}
                    onChange={formik.handleChange}
                  ></input>
                </form>

                <div className="text-xs font-medium grid gap-1 pl-2">
                  <li>Том үсэг орсон байх</li>
                  <li>Жижиг үсэг орсон байх</li>
                  <li>Тоо орсон байх</li>
                  <li>Тэмдэгт орсон байх</li>
                </div>
                <button className="border text-[#2563EB] py-2 rounded-2xl bg-white border-[#2563EB] hover:bg-[#2563EB] hover:text-white h-9">
                  Үүсгэх
                </button>
              </div>
            </div>
            <div className="flex justify-center border text-[#2563EB] py-2 rounded-2xl bg-white border-[#2563EB] hover:bg-[#2563EB] hover:text-white">
              <button className="font-medium text-sm">Нэвтрэх</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
