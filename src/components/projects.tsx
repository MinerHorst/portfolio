import { motion as m } from "framer-motion";
import {
  ArrowUpRight,
  ArrowUpRightFromCircle,
  ArrowUpRightFromSquare,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import cursor from "../../public/study-cursor.png";
import { useToast } from "./ui/use-toast";

export default function ProjectComponent() {
  const { toast } = useToast();

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null); // Explicitly typing the ref

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = clientX - 100;
      const y = clientY - 25;

      setImagePosition({ x, y });

      const cursorElement = cursorRef.current;
      if (cursorElement) {
        const { left, top, right, bottom } =
          cursorElement.getBoundingClientRect();

        const x = clientX - left;
        const y = clientY - top;
        setShowImage(
          x >= 0 && y >= 0 && x <= right - left && y <= bottom - top,
        );
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="relative grid h-[200vh] grid-cols-3 grid-rows-4 gap-4 px-4">
        <div
          ref={cursorRef}
          className="z-[200] col-start-3 row-span-1 row-start-1 flex cursor-none flex-col space-y-2 border p-2"
        >
          <div className="h-full w-full">img</div>
          <div className="flex items-center justify-between">
            <p className="cursor-study">Inquirable</p>
            <ArrowUpRightFromSquare size={16} />
          </div>
        </div>
        <div className="col-start-2 row-span-1 row-start-2 flex flex-col space-y-2 border"></div>
        <div className="col-start-3 row-span-1 row-start-3 flex flex-col space-y-2 border"></div>
        <div className="col-start-2 row-span-1 row-start-4 flex flex-col space-y-2 border"></div>
      </div>
      {showImage && (
        <div
          className="fixed z-[200]"
          style={{
            left: imagePosition.x,
            top: imagePosition.y,
            pointerEvents: "none",
          }}
        >
          {/* Replace the URL and dimensions with your image */}
          <Image src={cursor} width={200} height={100} alt="cursor image" />
        </div>
      )}
    </>
  );
}
