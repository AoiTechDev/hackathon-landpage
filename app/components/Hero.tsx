import React from "react";

const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex justify-center items-center  h-screen">
      <div className=" flex-1 text-[190px]">
        <h1 className="leading-[10rem] font-light">
          Clear <span className="font-bold italic">Flow</span>
        </h1>
      </div>
      <div className="flex-1 h-full flex flex-col justify-center items-start gap-24">
        <p className="font-thin text-[14px]">GREEN EXTENSION</p>
        <div className="space-y-16">
          <h2 className="text-[39px]">Shopping just got a whole lot brighter!</h2>
          <p className="text-[29px] font-thin">
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
