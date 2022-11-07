"use client";

import { Poppins } from "@next/font/google";
import { useState } from "react";
import { BiChevronsLeft } from "react-icons/bi";
import "./globals.css";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showRightSidebar, setShowRightSidebar] = useState(true);

  return (
    <html
      lang="en"
      className={poppins.className}
      style={{
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white grid grid-cols-8 w-full h-screen max-h-screen overflow-hidden max-w-[100vw]">
        <LeftSidebar />
        <div
          className={`bg-white max-h-screen border-r-[1px] border-r-[#f3f3f4] w-full flex flex-col p-4 relative transition-all ease-in-out duration-300 col-span-8 md:col-span-5 overflow-hidden`}
          style={{
            width: showRightSidebar ? "100%" : "calc(140%)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <div
            className="absolute right-5 top-5"
            style={{
              opacity: showRightSidebar ? 0 : 1,
              transition: "opacity 0.3s ease-in-out",
              cursor: showRightSidebar ? "default" : "pointer",
            }}
          >
            <BiChevronsLeft onClick={() => setShowRightSidebar(true)} />
          </div>
          {children}
        </div>
        <RightSidebar show={showRightSidebar} setShow={setShowRightSidebar} />
      </body>
    </html>
  );
}
