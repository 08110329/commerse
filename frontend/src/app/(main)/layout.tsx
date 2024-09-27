"use client";

import { Header } from "@/components/Header";
import "./globals.css";
import { Footers } from "@/components/Footers";
import { UserProvider } from "@/components/providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <>
          <Header />
          <UserProvider>{children}</UserProvider>
          <Footers />
          <ToastContainer />
        </>
      </body>
    </html>
  );
}
