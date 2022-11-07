"use client";

import { Card, Metric, Text } from "@tremor/react";
import "@tremor/react/dist/esm/tremor.css";
import KpiCard from "./components/KpiCard";
import LineChart from "./components/LineChart";

export default function Stats() {
  return (
    <main className="flex flex-col items-center w-full h-[92vh] overflow-y-auto pb-10">
      <div className="grid md:grid-cols-3 gap-4 mx-auto w-[95%] mt-5">
        <KpiCard />
        <KpiCard />
        <KpiCard />
      </div>
      <div className="w-[95%] md:mx-auto mt-5 ">
        <LineChart />
      </div>
    </main>
  );
}
