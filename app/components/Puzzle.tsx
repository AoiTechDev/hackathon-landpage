import Image from "next/image";
import React from "react";
import puzzle from "./svg/puzzle.svg";
import mouse from "./svg/mouse.svg";
const Puzzle = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto flex justify-center min-[1200px]:justify-between h-screen items-center flex-col min-[1200px]:flex-row min-[1200px]:pl-16 min-[1200px]:pr-40 space-y-16 min-[1200px]:space-y-0">
      <div className="flex flex-col  min-[1200px]:w-[730px] space-y-16 sm:items-center min-[1200px]:items-start">
        <h2 className="text-3xl font-semibold text-center min-[1200px]:text-start  min-[1200px]:max-w-[550px] sm:max-w-[550px] text-balance min-[1200px]:text-pretty">
          {" "}
          ClearFlow is your{" "}
          <span className="bg-gradient-to-r from-yellow   to-green inline-block text-transparent bg-clip-text font-bold">
            game-changer
          </span>{" "}
          when it comes to online shopping
        </h2>
        <p className="text-lg opacity-60 font-[100] text-balance min-[1200px]:text-start text-center min-[1200px]:max-w-[550px] sm:max-w-[550px]">
          Make smarter, eco-friendly choices and ditch the manipulative tactics
          with our user-friendly plugin
        </p>
      </div>
      <div className="relative  z-0">
        <Image src={puzzle} alt="" className="" />
        <Image
          src={mouse}
          alt=""
          className="absolute bottom-[3px] -right-[10px]"
        />
      </div>
    </div>
  );
};

export default Puzzle;
