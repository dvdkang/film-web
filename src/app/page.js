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
      <div className="bg-[#B16764] p-8 py-20 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl md:text-5xl font-bebas text-center text-white">
          {hero.title}
        </h1>
        <p className="text-lg md:text-xl font-jost font-bold text-center text-white pt-10 mt-4 mx-50">
          AHHHHHHHHHHHH ONE LINER AHHHHHHHHHH AHHHHHHHHHHH AHHHHHHHHHH AHHHHHHHH
          AHHHHHHHHHH PLEASE FUND PLEASEEEEEEEE
        </p>
      </div>
      <div className="relative w-full h-[calc(100vh-5rem)] pt-10 md:h-[calc(100vh-6rem)] overflow-hideen">
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
      <div className="flex justify-center mt-5">
        <Link
          href="https://www.afi.com/support/?Op=donate&don=621"
          target="_blank"
          rel="noopener noreferrer"
          className="px-13 py-7 bg-transparent border border-black hover:bg-[#F55151] text-white font-semibold rounded-2xl transition"
        >
          <span className="text-2xl">Donate Now</span>
        </Link>
      </div>
    </div>
  );
}
