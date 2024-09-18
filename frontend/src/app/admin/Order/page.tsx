"use client";

import { HynaltinSambar } from "../components/HynaltinSambar";
import { Lists } from "./mockData";

export default function Home() {
  return (
    <div className="h-screen flex justify-center ">
      <div className="w-full h-screen container flex bg-gray-50">
        <div className="">
          <HynaltinSambar />
        </div>
        <div className="grid">
          <div className="flex">
            {Lists.map((List) => {
              return <button key={List.id}>{List.title}</button>;
            })}
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
