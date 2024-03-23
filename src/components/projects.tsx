import { motion as m } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowUpRightFromCircle,
  ArrowUpRightFromSquare,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useToast } from "./ui/use-toast";

export default function ProjectComponent() {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);
  const gridItemsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = clientX - 100;
      const y = clientY - 25;

      setImagePosition({ x, y });

      for (let i = 0; i < gridItemsRef.current.length; i++) {
        const gridItem = gridItemsRef.current[i];
        if (gridItem) {
          const { left, top, right, bottom } = gridItem.getBoundingClientRect();

          if (
            clientX >= left &&
            clientX <= right &&
            clientY >= top &&
            clientY <= bottom
          ) {
            setShowImage(true);
            return;
          }
        }
      }

      setShowImage(false);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="relative grid h-[208vh] grid-cols-3 grid-rows-4 gap-4 px-4 pb-[8vh]">
        <div
          ref={(ref) => (gridItemsRef.current[0] = ref)}
          className="col-start-3 row-span-1 row-start-1 flex cursor-none flex-col space-y-2 border p-2"
        >
          <div className="h-full w-full">img</div>
          <div className="flex items-center justify-between">
            <p className="cursor-study">Inquirable</p>
            <ArrowUpRightFromSquare size={16} />
          </div>
        </div>
        <div
          ref={(ref) => (gridItemsRef.current[1] = ref)}
          className="col-start-2 row-span-1 row-start-2 flex cursor-none flex-col space-y-2 border p-2"
        >
          <div className="h-full w-full">img</div>
          <div className="flex items-center justify-between">
            <p className="cursor-study">Inquirable</p>
            <ArrowUpRightFromSquare size={16} />
          </div>
        </div>
        <div
          ref={(ref) => (gridItemsRef.current[2] = ref)}
          className="col-start-3 row-span-1 row-start-3 flex cursor-none flex-col space-y-2 border p-2"
        >
          <div className="h-full w-full">img</div>
          <div className="flex items-center justify-between">
            <p className="cursor-study">Inquirable</p>
            <ArrowUpRightFromSquare size={16} />
          </div>
        </div>
        <div
          ref={(ref) => (gridItemsRef.current[3] = ref)}
          className="col-start-2 row-span-1 row-start-4 flex cursor-none flex-col space-y-2 border p-2"
        >
          <div className="h-full w-full">img</div>
          <div className="flex items-center justify-between">
            <p className="cursor-study">Inquirable</p>
            <ArrowUpRightFromSquare size={16} />
          </div>
        </div>
      </div>
      {showImage && (
        <div
          className="fixed z-[50]"
          style={{
            left: imagePosition.x,
            top: imagePosition.y,
            pointerEvents: "none",
          }}
        >
          <div className="poppins flex h-[60px] w-[200px] items-center justify-center gap-4 rounded-full bg-white text-black">
            <p className="text-xl">VIEW CASE</p>
            <span>
              <ArrowRight />
            </span>
          </div>
        </div>
      )}
    </>
  );
}
