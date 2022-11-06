import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="w-[95%] flex items-center relative md:mx-auto">
      <input
        className="w-full h-[8vh] pl-12 font-300 placeholder:font-light placeholder:text-sm border-b-[1px] border-b-[#f3f3f4] focus:border-b-[#317ef0] focus:outline-none max-w-[100vw]"
        placeholder="Search"
      />
      <div className="absolute left-2 top-[2.7]">
        <CiSearch size={18} color="#6b7280" />
      </div>
    </div>
  );
}
