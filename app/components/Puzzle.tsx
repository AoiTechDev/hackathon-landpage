import Image from "next/image";
import React from "react";
import puzzle from "./svg/puzzle.svg";
import mouse from "./svg/mouse.svg";
const Puzzle = () => {
  return (
    <div className="w-full flex justify-between h-screen items-center pl-16 pr-40">
      <div className=" w-[730px] space-y-10">
        <h2 className="text-[39px] font-semibold">
          {" "}
          ClearFlow is your <span className="bg-gradient-to-r from-yellow   to-green inline-block text-transparent bg-clip-text font-bold">game-changer</span> when it comes to online
          shopping
        </h2>
        <p className="text-[19px] font-thin text-balance">
          Make smarter, eco-friendly choices and ditch the manipulative tactics
          with our user-friendly plugin
        </p>
      </div>
      <div className="relative  z-0">
        <Image src={puzzle} alt="" className=""/>
        <Image src={mouse} alt="" className="absolute bottom-[3px] -right-[10px]" />
      </div>
    </div>
  );
};

export default Puzzle;
