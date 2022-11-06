import React from "react";
import { BsCheckCircleFill, BsStopwatch } from "react-icons/bs";

export default function Sidebar() {
  return (
    <nav className="bg-[#fbfdff] h-screen col-span-1 flex flex-col items-center py-4">
      <h1 className="font-300 mb-12">Aventik</h1>
      <div className="grid w-full gap-1">
        <div className="flex items-center mb-4 w-full border-r-2 h-7 border-r-[#317ef0] pl-5">
          <BsCheckCircleFill className="text-[#317ef0] mr-2" size={15} />
          <p className="font-300 text-xs text-[#317ef0]">Dashboard</p>
        </div>
        <div className="flex items-center mb-4 w-full px-5">
          <BsStopwatch className="text-[#bbc2cc] mr-2" size={15} />
          <p className="font-300 text-xs text-[#bbc2cc]">Activities</p>
          <div className="bg-[#317ef0] text-white text-[10px] font-300 rounded-full ml-auto px-2 h-5 w-5 flex items-center justify-center">
            3
          </div>
        </div>
      </div>
      <hr className="w-[85%] border-[#e7e8f0] my-4 mx-auto" />
    </nav>
  );
}
