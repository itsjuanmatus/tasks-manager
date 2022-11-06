import Image from "next/image";
import React, { useEffect } from "react";
import { BiChevronsRight } from "react-icons/bi";
import girl1Pic from "../public/girl-1.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

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
      className="bg-white h-screen col-span-2 w-full flex-col p-4 hidden md:flex"
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
            },
          }}
          styles={{
            caption: {
              color: "#273d57",
              fontSize: "0.8rem",
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
    </div>
  );
}
