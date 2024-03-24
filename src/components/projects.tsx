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

      for (const gridItem of gridItemsRef.current) {
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
      <div
        id="projects"
        className="relative grid h-[208vh] w-screen gap-4 px-2 py-[8vh] md:grid-cols-3 md:grid-rows-4 md:px-4"
      >
        <div
          ref={(ref) => (gridItemsRef.current[0] = ref)}
          className="col-span-full row-span-1 row-start-1 flex w-full cursor-none flex-col space-y-2 border border-muted-foreground p-2 md:col-start-3"
        >
          <div className="pointer-events-none h-full w-full">
            <iframe
              src="https://player.vimeo.com/video/926809702?badge=0&amp;autopause=0&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;player_id=0&amp;app_id=58479"
              width={"100%"}
              height={"100%"}
              title="Inquirable"
            ></iframe>
          </div>
          <div className="flex items-center justify-between">
            <p className="cursor-study">Inquirable</p>
            <ArrowUpRightFromSquare size={16} />
          </div>
        </div>
        <div
          ref={(ref) => (gridItemsRef.current[1] = ref)}
          className="row-span-1 row-start-2 flex cursor-none flex-col space-y-2 border p-2 md:col-start-2"
        >
          <div className="h-full w-full">img</div>
          <div className="flex items-center justify-between">
            <p className="cursor-study">Inquirable</p>
            <ArrowUpRightFromSquare size={16} />
          </div>
        </div>
        <div
          ref={(ref) => (gridItemsRef.current[2] = ref)}
          className="row-span-1 row-start-3 flex cursor-none flex-col space-y-2 border p-2 md:col-start-3"
        >
          <div className="h-full w-full">img</div>
          <div className="flex items-center justify-between">
            <p className="cursor-study">Inquirable</p>
            <ArrowUpRightFromSquare size={16} />
          </div>
        </div>
        <div
          ref={(ref) => (gridItemsRef.current[3] = ref)}
          className="row-span-1 row-start-4 flex cursor-none flex-col space-y-2 border p-2 md:col-start-2"
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
