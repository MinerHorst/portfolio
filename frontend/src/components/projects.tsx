import { motion as m } from "framer-motion";
import {
  ArrowUpRight,
  ArrowUpRightFromCircle,
  ArrowUpRightFromSquare,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ProjectComponent() {
  return (
    <div className="grid h-[200vh] grid-cols-3 grid-rows-4 gap-4">
      <div className="col-start-3 row-span-1 row-start-1 flex flex-col space-y-2 border p-2">
        <div>img</div>
        <div className="flex items-center justify-between">
          <p>Inquirable</p>
          <ArrowUpRightFromSquare size={16} />
        </div>
      </div>
      <div className="col-start-2 row-span-1 row-start-2 flex flex-col space-y-2 border"></div>
      <div className="col-start-3 row-span-1 row-start-3 flex flex-col space-y-2 border"></div>
      <div className="col-start-2 row-span-1 row-start-4 flex flex-col space-y-2 border"></div>
    </div>
  );
}
