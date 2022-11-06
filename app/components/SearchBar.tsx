import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="w-[95%] flex items-center relative mx-auto">
      <input
        className="w-full h-16 pl-12 font-300 placeholder:font-light placeholder:text-sm border-b-[1px] border-b-[#f3f3f4] focus:border-b-[#317ef0] focus:outline-none"
        placeholder="Search"
      />
      <div className="absolute left-2 top-[2.7]">
        <CiSearch size={18} color="#6b7280" />
      </div>
    </div>
  );
}
