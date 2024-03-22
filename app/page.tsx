"use client";
import Image from "next/image";
import Hero from "./components/Hero";

import union from "./components/svg/union.svg";
import secUnion from "./components/svg/secUnion.svg";
import Puzzle from "./components/Puzzle";
import DarkPattern from "./components/DarkPattern";
import Sustainable from "./components/Sustainable";
import Assistance from "./components/Assistance";
import DarkMode from "./components/DarkMode";
import React, { useEffect } from "react";
import useScreenSize from "@/hooks/useScreenSize";
import triangle from "./components/svg/triangle.svg";
import LowerSection from "./components/LowerSection";
export default function Home() {
  const screenSize = useScreenSize();

  const horizontalRight = React.useRef<HTMLDivElement>(null);
  const horizontalLeft = React.useRef<HTMLDivElement>(null);
  const bottomRight = React.useRef<HTMLDivElement>(null);
  const bottomLeft = React.useRef<HTMLDivElement>(null);
  const diamondUp = React.useRef<HTMLDivElement>(null);
  const diamondDown = React.useRef<HTMLDivElement>(null);

 

  useEffect(() => {
    const middle = horizontalRight.current?.getBoundingClientRect().left;
    const left = horizontalLeft.current?.getBoundingClientRect().left;

    const distanceMiddle = middle! - 0;
    const distanceLeft = left! - 0; 

    if (bottomRight.current) {
      bottomRight.current.style.left = `calc(${distanceMiddle}px + ${horizontalRight.current?.offsetWidth}px - 2px)`;
    }

    if (diamondDown.current) {
      diamondDown.current.style.left = `calc(${distanceLeft}px - ${
        diamondDown.current.offsetWidth / 2
      }px + 1px)`;
    }
    if (diamondUp.current) {
      diamondUp.current.style.left = `calc(${distanceLeft}px - ${
        diamondUp.current.offsetWidth / 2
      }px + 1px)`;
    }
  }, [screenSize]);

  return (
    <div className="w-full text-white relative overflow-hidden">
      <div className="relative z-0">
        <Hero />

        <span className="w-full block h-[1px] bg-green"></span>
        <Puzzle />

        <div
          ref={diamondUp}
          className="w-0 h-0 triangle absolute left-[6.5vw] top-[calc(256px-95px)] -z-1 hidden min-[1200px]:block"
        ></div>
        <div
          ref={diamondDown}
          className="w-0 h-0 triangle rotate-180 absolute left-[6.5vw] top-[209px] -z-1 hidden min-[1200px]:block"
        ></div>

        <div
          ref={horizontalLeft}
          className="bg-green w-[2px] h-[750px] absolute left-[8vw] top-64 -z-1 hidden min-[1200px]:block"
        ></div>

        <div
          ref={bottomLeft}
          className="max-w-[41vw] w-full h-[100px] bottom_left absolute left-[8vw] top-[calc(256px+750px)] -z-1 hidden min-[1200px]:block"
        ></div>
        <div
          ref={horizontalRight}
          className="w-[100px] h-[500px] top_right absolute left-[48vw] top-[calc(256px+750px+98px)] hidden min-[1200px]:block"
        ></div>

        <div
          ref={bottomRight}
          className="w-[1000px] h-[100px] bottom_left absolute left-[53.1vw] top-[calc(256px+750px+98px+500px)] hidden min-[1200px]:block"
        ></div>
      </div>

      {/* <Image alt="" className="absolute top-40  left-32 w-[95%] " src={union} /> */}

     <LowerSection/>
    </div>
  );
}
