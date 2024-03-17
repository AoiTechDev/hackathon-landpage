import Image from "next/image";
import Hero from "./components/Hero";
import line from './components/svg/line.svg'
import union from './components/svg/union.svg'
export default function Home() {
  return (
    <div className="w-full   text-white relative min-h-screen">
      <Hero />
      <span className="w-full block h-[1px] bg-green"></span>
      <Image alt="" className="absolute  top-60 left-20 w-full"  src={union}/>
    </div> 
  );
}
