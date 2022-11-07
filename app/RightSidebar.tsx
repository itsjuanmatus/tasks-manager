import Image from "next/image";
import React, { useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { BiChevronsRight } from "react-icons/bi";
import girl1Pic from "../public/girl-1.png";
import girl2Pic from "../public/girl-2.jpg";

import { IoNotificationsOutline } from "react-icons/io5";

export default function RightSidebar({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [hide, setHide] = React.useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setHide(true);
      }, 300);
    } else {
      setHide(false);
    }
  }, [show]);

  if (!hide) {
    return null;
  }

  return (
    <div
      className="bg-white h-screen col-span-2 w-full flex-col p-4 hidden md:flex overflow-y-auto overflow-x-hidden"
      style={{
        transition: "all 0.3s ease-in-out",
        width: show ? "100%" : "0",
      }}
    >
      <button className="mb-4" onClick={() => setShow(false)}>
        <BiChevronsRight />
      </button>
      <div className="flex items-center justify-between my-3">
        <div className="flex items-center gap-x-2">
          <Image
            priority
            className="rounded-full h-8 w-8 object-cover aspect-square"
            src={girl1Pic}
            alt="girl image"
          />
          <p className="text-xs font-medium ">Sofia Lann. 👋🏻</p>
        </div>
        <div className="flex items-center justify-center h-8 w-8 rounded-md border-[1px] relative cursor-pointer">
          <IoNotificationsOutline size={15} color="#727c8e" />
          <div className="absolute top-2 right-2.5 h-1 w-1 rounded-full bg-[#317ef0]"></div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <DayPicker
          selected={new Date()}
          modifiersStyles={{
            selected: {
              backgroundColor: "#317ef0",
              color: "#fff",
              boxShadow: "0 0 5px 5px rgba(49, 126, 240, 0.1)",
            },
          }}
          styles={{
            caption: {
              color: "#273d57",
              fontSize: "0.625rem",
              fontWeight: 300,
            },
            day: {
              color: "#273d57",
              fontSize: "0.8rem",
              fontWeight: 300,
            },
            head: {
              color: "#273d57",
              fontSize: "0.8rem",
            },
          }}
        />
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-4 pb-4">
        <h3 className="text-sm font-semibold">Activity</h3>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image
                src={girl1Pic}
                className="rounded-full w-8 h-8 object-cover"
                alt="girl image"
              />
              <p className="text-xs font-medium text-[#273d57]">Sofia Lann.</p>
            </div>
            <p className="text-xs font-light text-[#a2a8b6]">
              Yesterday, {new Date().getHours()}:00
            </p>
          </div>
          <p className="text-xs font-light text-[#a2a8b6] ml-10 mt-2">
            Commented on{" "}
            <span className="font-light text-[#317ef0]">
              "How to get started"
            </span>
          </p>
          <div className="border-[#f4f4f7] border rounded-md ml-10 mt-5 text-xs leading-6 text-[#727c8e] font-[300] p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in
            accusamus labore doloremque velit corrupti iste dolores?
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image
                src={girl2Pic}
                className="rounded-full w-8 h-8 object-cover"
                alt="girl image"
              />
              <p className="text-xs font-medium text-[#273d57]">Anya Jackson</p>
            </div>
            <p className="text-xs font-light text-[#a2a8b6]">
              Yesterday, {new Date().getHours()}:00
            </p>
          </div>
          <p className="text-xs font-light text-[#a2a8b6] ml-10 mt-2">
            Commented on{" "}
            <span className="font-light text-[#317ef0]">
              "How to get started"
            </span>
          </p>
          <div className="border-[#f4f4f7] border rounded-md ml-10 mt-5  p-3">
            <p className="text-[#727c8e] font-[300] leading-6 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              in accusamus labore doloremque velit corrupti iste dolores?
            </p>
            <div className="flex items-center justify-between mt-3">
              <h3 className="text-md font-medium">$42,200</h3>
              <p className="text-[0.625rem] text-[#727c8e] font-[300]">
                Event output
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
