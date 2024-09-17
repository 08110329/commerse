import { Header } from "@/components/Header";
import "./globals.css";
import { Footers } from "@/components/Footers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footers />
      </body>
    </html>
  );
}
