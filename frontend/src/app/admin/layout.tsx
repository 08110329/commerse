import { Headers } from "./components/Headers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Headers />
        {children}
      </body>
    </html>
  );
}
