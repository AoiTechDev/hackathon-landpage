import Image from "next/image";
import React from "react";
import Hone from "./svg/Hone.svg";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex  flex-col min-[1200px]:flex-row justify-center items-center  h-screen relative z-10">
      <div className=" min-[1200px]:flex-1 mt-24 min-[1200px]:mt-0">
        <Image src={Hone} alt="" className="scale-75 sm:scale-100 " />
      </div>
      <div className="min-[1200px]:flex-1 h-full flex flex-col justify-center items-center min-[1200px]:items-start gap-[40px] min-[1200px]:gap-[80px]">
        <p className="font-thin opacity-60 text-[14px] ">GREEN EXTENSION</p>
        <div className="space-y-[40px]">
          <h2 className="text-4xl text-center text-balance min-[1200px]:text-start">
            Shopping just got a whole lot brighter!
          </h2>
          <p className="text-2xl opacity-60 font-thin text-balance text-center min-[1200px]:text-start">
            Wave goodbye to dark patterns and say hello to stress-free browsing.
          </p>
        </div>
        <Link
          href="https://uploadnow.io/f/w0WJFft"
          target="_blank"
          className="justify-center flex items-center bg-gradient-to-r from-yellow to-green py-5 px-11 rounded-[94px] z-10 cursor-pointer"
        >
          <span className="text-black font-bold">Get started today!</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
