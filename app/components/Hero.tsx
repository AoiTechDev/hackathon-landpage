import Image from "next/image";
import React from "react";
import Hone from "./svg/Hone.svg";
const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex justify-center items-center  h-screen relative">
      <div className=" flex-1 ">
       <Image src={Hone} alt=""/>
      </div>
      <div className="flex-1 h-full flex flex-col justify-center items-start gap-[80px]">
        <p className="font-thin text-[14px]">GREEN EXTENSION</p>
        <div className="space-y-[40px]">
          <h2 className="text-[39px]">Shopping just got a whole lot brighter!</h2>
          <p className="text-[29px] opacity-60 font-thin text-balance">
            Wave goodbye to dark patterns and say hello to stress-free browsing.
          </p>
        </div>
        <div className="justify-center flex items-center bg-gradient-to-r from-yellow to-green py-5 px-11 rounded-[94px] ">
          <span className="text-black font-bold">Get started today!</span>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
