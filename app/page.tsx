import Image from "next/image";
import { Fragment } from "react";
import { AiOutlineFilter, AiOutlineUserAdd } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import TasksGrid from "./components/TasksGrid";
import girl1Pic from "../public/girl-1.jpg";
import girl2Pic from "../public/girl-2.jpg";
import man1Pic from "../public/man-1.jpg";
import man2Pic from "../public/man-2.jpg";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <Fragment>
      <SearchBar />
      <div className="max-w-[95%] md:mx-auto mt-4 flex items-center h-[12vh] max-w-100vw">
        <div className="flex flex-col gap-y-2 w-full">
          <h1 className="font-bold text-[#233a57]">My Tasks</h1>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="flex items-center border-r-[#f4f5f8] border-r-2 pr-5">
                <Image
                  priority
                  alt="man-photoshoot"
                  src={man1Pic}
                  className="rounded-full aspect-square object-cover h-8 w-8 border-white border-2"
                />
                <Image
                  priority
                  alt="man-2-photoshoot"
                  src={man2Pic}
                  className="rounded-full aspect-square object-cover h-8 w-8 border-white border-2 -ml-2"
                />
                <Image
                  priority
                  alt="girl-photoshoot"
                  src={girl1Pic}
                  className="rounded-full aspect-square object-cover h-8 w-8 border-white border-2 -ml-2"
                />
                <Image
                  priority
                  alt="girl-2-photoshoot"
                  src={girl2Pic}
                  className="rounded-full aspect-square object-cover h-8 w-8 border-white border-2 -ml-2"
                />
                <p className="font-semibold text-xs text-[#6b7280] ml-2">+3</p>
              </div>
              <div className="flex items-center justify-center h-8 w-8 rounded-full border-[1px] ml-5">
                <AiOutlineUserAdd size={15} color="#98a4b8" />
              </div>
            </div>
            <div className="hidden items-center gap-x-2 md:flex">
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
      <TasksGrid />
    </Fragment>
  );
}
