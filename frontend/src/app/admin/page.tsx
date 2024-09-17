"use client";

import { FacePage } from "@/components/FacePage";
import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";
import { Dashboard } from "./components/Dashboard";

export default function Home() {
  return (
    <div className="w-full m-auto ">
      <Dashboard />
    </div>
  );
}
