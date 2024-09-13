"use client";

import { Formik, useFormik } from "formik";
import * as yup from "yup";
interface MyFormValues {
  нэр: string;
  имэйлХаяг: string;
  нууцҮг: string;
  нууцҮгДавтах: string;
}
export default function Home() {
  const formik = useFormik<MyFormValues>({
    initialValues: {
      нэр: " ",
      имэйлХаяг: " ",
      нууцҮг: " ",
      нууцҮгДавтах: " ",
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
        .matches(/0-9/, "Тоо орсон байх")
        .matches(/^\w/, "Тэмдэгт орсон байх")
        .required("Нууц үгээ оруулна уу"),
      нууцҮгДавтах: yup
        .string()
        .oneOf([yup.ref("нууцҮг")], "Нууц үг таарахгүй байна")
        .required("Нууц үгээ дахин оруулна уу"),
    }),

    onSubmit: (values) => {
      console.log("first message", values);
      alert(
        `hello ${values.нэр} ${values.имэйлХаяг} ${values.нууцҮг} ${values.нууцҮгДавтах}`
      );
    },
  });
  const isValidUpperCase = /[A-Z]/.test(formik.values.нууцҮг);
  const isValidLowerCase = /[a-z]/.test(formik.values.нууцҮг);
  const isValidNumber = /0-9/.test(formik.values.нууцҮг);
  const isValidSpecialChar = /^\w/.test(formik.values.нууцҮг);

  console.log("first", formik.errors);
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
                    type="text"
                    className="w-96 h-9 border rounded-2xl pl-2"
                    value={formik.values.имэйлХаяг}
                    onChange={formik.handleChange}
                  ></input>
                  {formik.errors.имэйлХаяг ? (
                    <p className="text-red-300">{formik.errors.имэйлХаяг}</p>
                  ) : null}
                  <input
                    placeholder=" Нууц үг"
                    name="нууцҮг"
                    type="text"
                    className="w-96 h-9 border rounded-2xl pl-2"
                    value={formik.values.нууцҮг}
                    onChange={formik.handleChange}
                  ></input>
                  {formik.errors.нууцҮг ? (
                    <p className="text-red-300">{formik.errors.нууцҮг}</p>
                  ) : null}
                  <input
                    placeholder=" Нууц үг давтах "
                    name="нууцҮгДавтах"
                    type="text"
                    className="w-96 h-9 border rounded-2xl pl-2"
                    value={formik.values.нууцҮгДавтах}
                    onChange={formik.handleChange}
                  ></input>
                  {formik.errors.нууцҮгДавтах ? (
                    <p className="text-red-300">{formik.errors.нууцҮгДавтах}</p>
                  ) : null}
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
                    className="border text-[#2563EB] py-2 rounded-2xl bg-white border-[#2563EB] hover:bg-[#2563EB] hover:text-white h-9"
                    type="submit"
                  >
                    Үүсгэх
                  </button>
                </form>
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
