"use client";

import { Header } from "@/app/(main)/components/Header";
import "./globals.css";
import { Footers } from "@/app/(main)/components/Footers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./components/providers/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <Header />
      {children}
      <Footers />
      <ToastContainer />
    </UserProvider>
  );
}
