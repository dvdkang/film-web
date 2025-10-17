"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { ContentContext } from "@/context/ContentContext";

export default function Home() {
  const [playing, setPlaying] = useState(false);

  const content = useContext(ContentContext);
  if (!content) return;
  const hero = content.hero;

  return (
    <div className="pt-4 md:pt-8 px-4 md:px-16">
      {/* <div className="bg-[#B16764] rounded-lg shadow-lg text-center mx-60">
        <h1 className="text-4xl md:text-5xl font-bebas text-center text-white">
          {hero.title}
        </h1> */}
      <div>
        <p className="text-xl md:text-3xl font-jost font-bold text-center text-black px-4 md:px-16 max-w-4xl mx-auto">
          Feeling trapped in Northridge years after graduation, Mae plans to
          leave her longtime boyfriend Jess, but not before finding him a new
          girlfriend, in one last act of chaotic love.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 h-[2px] bg-[#790707]/70 my-6"></div>
      </div>
      {/*c7b092ff 
#269b87ff*/}
      <div className="hidden md:block relative w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] flex justify-center items-center overflow-hideen">
        <div className="absolute w-[100%] h-[100%] bg-[#c7b092ff] rounded-lg"></div>

        <video
          src={hero.video}
          className={`w-full h-full object-cover rounded-lg transition-transform duration-500 ${
            playing ? "scale-100" : "scale-70"
          }`}
          controls
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      </div>
      <div className="block md:hidden relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg">
        {/* Frame */}
        <div className="absolute inset-0 bg-[#c7b092ff] rounded-lg"></div>

        <video
          src={hero.video}
          className={`w-full h-auto max-h-[80vh] md:max-h-[60vh] rounded-lg transition-all duration-500 ${
            playing ? "scale-100" : "scale-90"
          }`}
          controls
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      </div>
      <div className="flex justify-center mt-5">
        <Link
          href="https://www.afi.com/support/?Op=donate&don=621"
          target="_blank"
          rel="noopener noreferrer"
          className="px-13 py-7 bg-transparent border border-black hover:bg-[#F55151] text-white font-semibold rounded-2xl transition"
        >
          <span className="text-xl md:2xl">Donate Now</span>
        </Link>
      </div>
    </div>
  );
}
