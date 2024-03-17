import Image from "next/image";
import Hero from "./components/Hero";

import union from './components/svg/union.svg'
import Puzzle from "./components/Puzzle";
import DarkPattern from "./components/DarkPattern";
export default function Home() {
  return (
    <div className="w-full   text-white relative min-h-screen">
      <Hero />
      
      <span className="w-full block h-[1px] bg-green"></span>
      <Puzzle />
      <DarkPattern/>
      <Image alt="" className="absolute  top-40 left-20 w-full"  src={union}/>
    </div> 
  );
}
