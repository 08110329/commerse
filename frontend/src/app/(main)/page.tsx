"use client";

import { FacePage } from "@/app/(main)/components/FacePage";
import { useUser } from "./components/providers/AuthProvider";

export default function Home() {
  return (
    <div className="w-full m-auto ">
      <FacePage />
    </div>
  );
}
