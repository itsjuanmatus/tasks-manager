import React from "react";
import { BiChevronsRight } from "react-icons/bi";

export default function RightSidebar({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {``
  return (
    <div
      className="bg-white h-screen col-span-2 w-full flex flex-col p-4"
      style={{
        transition: "all 0.3s ease-in-out",
        width: show ? "100%" : "0",
      }}
    >
      <button className="mb-4" onClick={() => setShow(false)}>
        <BiChevronsRight />
      </button>
      <div className="bg-[#317ef0] rounded-lg h-56 w-full flex flex-col p-4">
        <h3 className="text-white font-medium">Something should go here.</h3>
      </div>
    </div>
  );
}
