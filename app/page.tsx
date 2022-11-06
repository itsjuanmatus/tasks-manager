import Image from "next/image";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiShareAlt } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { AiOutlineFilter } from "react-icons/ai";
import girl1Pic from "../public/girl-1.jpg";
import girl2Pic from "../public/girl-2.jpg";
import man1Pic from "../public/man-1.jpg";
import man2Pic from "../public/man-2.jpg";
import Sidebar from "./Sidebar";
export default function Home() {
  return (
    <div className="bg-white grid grid-cols-8 w-full h-screen">
      <Sidebar />
      <div className="bg-white h-screen col-span-5 border-r-[1px] border-r-[#f3f3f4] w-full flex flex-col p-4">
        <div className="w-[95%] flex items-center relative mx-auto">
          <input
            className="w-full h-16 pl-12 font-300 placeholder:font-light placeholder:text-sm border-b-[1px] border-b-[#f3f3f4] focus:border-b-[#317ef0] focus:outline-none"
            placeholder="Search"
          />
          <div className="absolute left-2 top-[2.7]">
            <CiSearch size={18} color="#6b7280" />
          </div>
        </div>
        <div className="w-[95%] mx-auto mt-4 flex items-center">
          <div className="flex flex-col gap-y-2 w-full">
            <h1 className="font-bold text-[#233a57]">My Task</h1>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="flex items-center border-r-[#f4f5f8] border-r-2 pr-5">
                  <Image
                    alt="man-photoshoot"
                    src={man1Pic}
                    className="rounded-full aspect-square object-cover h-8 w-8 border-white border-2"
                  />
                  <Image
                    alt="man-2-photoshoot"
                    src={man2Pic}
                    className="rounded-full aspect-square object-cover h-8 w-8 border-white border-2 -ml-2"
                  />
                  <Image
                    alt="girl-photoshoot"
                    src={girl1Pic}
                    className="rounded-full aspect-square object-cover h-8 w-8 border-white border-2 -ml-2"
                  />
                  <Image
                    alt="girl-2-photoshoot"
                    src={girl2Pic}
                    className="rounded-full aspect-square object-cover h-8 w-8 border-white border-2 -ml-2"
                  />
                  <p className="font-semibold text-xs text-[#6b7280] ml-2">
                    +3
                  </p>
                </div>
                <div className="flex items-center justify-center h-8 w-8 rounded-full border-[1px] ml-5">
                  <AiOutlineUserAdd size={15} color="#98a4b8" />
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center h-9 w-9 border rounded-md">
                  <BiShareAlt size={15} color="#98a4b8" />
                </div>
                <div className="flex items-center justify-center h-9 w-9 border rounded-md">
                  <FaStar size={15} color="#317ef0" />
                </div>
                <button className="flex items-center justify-center h-9 w-24 gap-x-2 border rounded-md">
                  <AiOutlineFilter size={15} color="#6b7280" />
                  <p className="font-medium text-xs text-[#6b7280]">Filter</p>
                </button>
                <button className="flex items-center justify-center h-9 w-24 gap-x-2 border rounded-md bg-[#317ef0]">
                  <p className="font-light text-xs text-white">Add task</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-screen col-span-2 w-full flex flex-col p-4">
        <div className="bg-[#317ef0] rounded-lg h-56 w-full flex flex-col p-4">
          <h3 className="text-white font-medium">Something should go here.</h3>
        </div>
      </div>
    </div>
  );
}
