import { AiFillPieChart } from "react-icons/ai";
import { BiBriefcaseAlt } from "react-icons/bi";
import {
  BsCalendar3Week,
  BsCheckCircleFill,
  BsStopwatch,
} from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { TbHeadphones } from "react-icons/tb";
import {HiOutlinePresentationChartBar} from "react-icons/hi";

export default function LeftSidebar() {
  return (
    <nav className="bg-[#fbfdff] h-screen col-span-1 flex-col items-center py-4 hidden md:flex">
      <h1 className="font-300 mb-12">Aventik</h1>
      <div className="grid w-full gap-y-8">
        <div className="flex items-center w-full border-r-2 h-7 border-r-[#317ef0] pl-5">
          <BsCheckCircleFill className="text-[#317ef0] mr-2" size={15} />
          <p className="font-300 text-xs text-[#317ef0]">Dashboard</p>
        </div>
        <div className="flex items-center w-full px-5">
          <BsStopwatch className="text-[#727c8e] mr-2" size={15} />
          <p className="font-300 text-xs text-[#727c8e]">Activities</p>
          <div className="bg-[#317ef0] text-white text-[10px] font-300 rounded-full ml-auto px-2 h-5 w-5 flex items-center justify-center">
            3
          </div>
        </div>
      </div>
      <hr className="w-[85%] border-[#e7e8f0] mt-8 mx-auto mb-8" />
      <div className="grid w-full gap-y-8">
        <div className="flex items-center w-full px-5">
          <TbHeadphones className="text-[#727c8e] mr-2" size={15} />
          <p className="font-300 text-xs text-[#727c8e]">Support</p>
        </div>
        <div className="flex items-center w-full px-5">
          <CiMoneyBill className="text-[#727c8e] mr-2" size={18} />
          <p className="font-300 text-xs text-[#727c8e]">Billing</p>
        </div>
        <div className="flex items-center w-full px-5">
          <BiBriefcaseAlt className="text-[#727c8e] mr-2" size={15} />
          <p className="font-300 text-xs text-[#727c8e]">Marketing</p>
        </div>
        <div className="w-full px-5 flex flex-col">
          <div className="flex items-center w-full">
            <AiFillPieChart className="text-[#727c8e] mr-2" size={15} />
            <p className="font-300 text-xs text-[#727c8e]">Projects</p>
          </div>
          <div className="flex flex-col w-full pl-6 mt-5 font-[300] gap-y-5">
            <p className="font-300 text-xs text-[#727c8e]">Project 1</p>
            <p className="font-300 text-xs text-[#727c8e]">Project 2</p>
            <p className="font-300 text-xs text-[#727c8e]">Project 3</p>
          </div>
        </div>
        <div className="flex items-center w-full px-5">
          <BsCalendar3Week className="text-[#727c8e] mr-2" size={15} />
          <p className="font-300 text-xs text-[#727c8e]">Calendar</p>
        </div>
        <div className="flex items-center w-full px-5">
          <HiOutlinePresentationChartBar className="text-[#727c8e] mr-2" size={15} />
          <p className="font-300 text-xs text-[#727c8e]">Reports</p>
          </div>
      </div>
    </nav>
  );
}
