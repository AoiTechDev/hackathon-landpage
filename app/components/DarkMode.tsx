"use client";
import Image from "next/image";
import React from "react";
import logo from "./svg/logo.svg";
import triangle from "./svg/triangle.svg";
const DarkMode = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling behavior
    });
  }

  return (
    <div className="w-full h-[150vh] flex  justify-center items-center relative">
      <div className="flex-1 flex justify-center items-center">
        <Image src={logo} alt="" className="" />
      </div>
      <div className="flex-1 flex justify-center items-start flex-col gap-6">
        <div className="text-[200px] font-light -space-y-24">
          <h1>Dark</h1>
          <h1>Mode</h1>
        </div>
        <p className="text-[29px] text-balance font-thin">
          Customize ClearFlow with our sleek dark mode, perfect for late night
          browsing.
        </p>
      </div>

      <Image
        src={triangle}
        alt=""
        className="absolute bottom-12 right-12 w-24 cursor-pointer"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default DarkMode;
