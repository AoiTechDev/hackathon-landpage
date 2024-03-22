"use client";
import Image from "next/image";
import React from "react";
import logo from "./svg/logo.svg";
import triangle from "./svg/triangle.svg";
const DarkMode = () => {
  
  return (
    <div className="w-full max-w-[1400px] mx-auto mt-64 flex flex-col min-[1200px]:flex-row justify-center items-center relative p-2">
      <div className="flex-1 hidden justify-center items-center min-[1200px]:flex">
        <Image src={logo} alt="" className="scale-75" />
      </div>

      <div className="min-[1200px]:flex-1 flex justify-center items-center min-[1200px]:items-start min-[1200px]:flex-col gap-6">
        <div className="flex-1 flex justify-center items-center min-[1200px]:hidden">
          <Image src={logo} alt="" className="scale-75" />
        </div>
        <div className="text-[90px] lg:text-[200px]  -space-y-12">
          <h1>Dark</h1>
          <h1>Mode</h1>
        </div>
        <p className="text-[29px] text-balance font-thin opacity-60 hidden min-[1200px]:block">
          Customize ClearFlow with our sleek dark mode, perfect for late night
          browsing.
        </p>
      </div>

      <p className="text-3xl text-balance font-thin opacity-60 min-[1200px]:hidden text-center">
        Customize ClearFlow with our sleek dark mode, perfect for late night
        browsing.
      </p>
     
    </div>
  );
};

export default DarkMode;
