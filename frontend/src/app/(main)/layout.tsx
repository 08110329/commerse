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
          <UserProvider>
            <Header />
            {children}
            <Footers />
          </UserProvider>
          <ToastContainer />
        </>
      </body>
    </html>
  );
}
