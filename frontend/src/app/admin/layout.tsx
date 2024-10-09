import { UserProvider } from "../(main)/components/providers/AuthProvider";
import { Headers } from "./components/Headers";
import { HynaltinSambar } from "./components/HynaltinSambar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <Headers />
      <div className="flex">
        <HynaltinSambar />
        {children}
      </div>
    </UserProvider>
  );
}
