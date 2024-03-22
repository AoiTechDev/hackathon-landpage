"use client";
import React from "react";
import DarkPattern from "./DarkPattern";
import Sustainable from "./Sustainable";
import Assistance from "./Assistance";
import DarkMode from "./DarkMode";
import Image from "next/image";
import triangle from "./svg/triangle.svg";
const LowerSection = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling behavior
    });
  }

  const vertical1 = React.useRef<HTMLDivElement>(null);
  const vertical2 = React.useRef<HTMLDivElement>(null);
  const vertical3 = React.useRef<HTMLDivElement>(null);
  const vertical4 = React.useRef<HTMLDivElement>(null);

  const horizontal1 = React.useRef<HTMLDivElement>(null);
  const horizontal2 = React.useRef<HTMLDivElement>(null);
  const horizontal3 = React.useRef<HTMLDivElement>(null);
  const horizontal4 = React.useRef<HTMLDivElement>(null);
  return (
    <div className="min-[1200px]:h-[280vh] relative ">
      <DarkPattern />
      <Sustainable />
      <Assistance />
      <DarkMode />
      {/* <Image
          alt=""
          className="absolute top-40   left-0 w-full"
          src={secUnion}
        /> */}
      <Image
        src={triangle}
        alt=""
        className="absolute bottom-12 right-12 w-24 cursor-pointer"
        onClick={scrollToTop}
      />

      <div
        ref={horizontal1}
        className="w-[48vw] h-[100px] absolute top-28 top_right left-[0VW] hidden min-[1200px]:block"
      ></div>

      <div
        ref={vertical1}
        className="bg-green w-[2px] h-[600px] absolute top-[200px] left-[47.9vw] hidden min-[1200px]:block"
      ></div>

      <div
        ref={horizontal2}
        className="w-[27vw] h-[100px] absolute top-[780px] bottom_right  left-[21vw] hidden min-[1200px]:block"
      ></div>

      <div
        ref={vertical2}
        className="bg-green w-[2px] h-[550px] absolute top-[880px] left-[21vw] hidden min-[1200px]:block"
      ></div>

      <div
        ref={horizontal3}
        className="w-[57vw] h-[2px] absolute top-[1430px] bottom_right  left-[21vw] hidden min-[1200px]:block"
      ></div>

      <div
        ref={vertical3}
        className="bg-green w-[2px] h-[550px] absolute top-[880px] left-[78vw] hidden min-[1200px]:block"
      ></div>

      <div
        ref={horizontal4}
        className="w-[10.4vw] h-[100px] absolute bottom_left top-[780px]    left-[67.7vw] hidden min-[1200px]:block"
      ></div>

      <div
        ref={vertical1}
        className="bg-green w-[2px] h-[315px] absolute top-[490px] left-[67.7vw] hidden min-[1200px]:block"
      ></div>

      <div className="w-[35vw] h-[100px] absolute top_left top-[420px]    left-[67.7vw] hidden min-[1200px]:block"></div>
    </div>
  );
};

export default LowerSection;
