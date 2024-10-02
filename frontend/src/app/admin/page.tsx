"use client";

import { FacePage } from "@/app/(main)/components/FacePage";
import { Footers } from "@/app/(main)/components/Footers";
import { Header } from "@/app/(main)/components/Header";
import { Dashboard } from "./components/Dashboard";

export default function Home() {
  return (
    <div className="w-full m-auto ">
      <Dashboard />
    </div>
  );
}
