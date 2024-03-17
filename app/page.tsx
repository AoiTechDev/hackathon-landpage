import Image from "next/image";
import Hero from "./components/Hero";

import union from "./components/svg/union.svg";
import secUnion from "./components/svg/secUnion.svg";
import Puzzle from "./components/Puzzle";
import DarkPattern from "./components/DarkPattern";
import Sustainable from "./components/Sustainable";
import Assistance from "./components/Assistance";
import DarkMode from "./components/DarkMode";
export default function Home() {
  return (
    <div className="w-full text-white relative ">
      <Hero />

      <span className="w-full block h-[1px] bg-green"></span>
      <Puzzle />
      <Image alt="" className="absolute top-40  left-32 w-[95%] " src={union} />
      <div className="h-[300vh] relative">
        <DarkPattern />
        <Sustainable />
        <Assistance />
        <DarkMode />
        <Image
          alt=""
          className="absolute top-40   left-0 w-full"
          src={secUnion}
        />
      </div>
    </div>
  );
}
