import { Poppins } from "@next/font/google";
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
  return (
    <html lang="en" className={poppins.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white grid grid-cols-8 w-full h-screen">
        <LeftSidebar />
        <div className="bg-white h-screen col-span-5 border-r-[1px] border-r-[#f3f3f4] w-full flex flex-col p-4">
          {children}
        </div>
        <RightSidebar />
      </body>
    </html>
  );
}
