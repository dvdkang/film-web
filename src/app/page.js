"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useRef, useEffect } from "react";
import { ContentContext } from "@/context/ContentContext";

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [player, setPlayer] = useState(null);
  const iframeRef = useRef(null);
  const mobileIframeRef = useRef(null);

  const [apiLoaded, setApiLoaded] = useState(false);

  const content = useContext(ContentContext);

  useEffect(() => {
    // Load YouTube API
    if (window.YT) {
      setApiLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;

    script.onload = () => {
      console.log("YouTube API script loaded");
      setApiLoaded(true);
    };

    script.onerror = () => {
      console.error("Failed to load YouTube API");
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!apiLoaded || !iframeRef.current) return;

    console.log("Initializing YouTube player...");

    // Use a timeout to ensure the iframe is ready
    const timer = setTimeout(() => {
      if (window.YT && window.YT.Player) {
        try {
          const player = new window.YT.Player(iframeRef.current, {
            events: {
              onReady: (event) => {
                console.log("YouTube Player Ready!", event);
              },
              onStateChange: (event) => {
                console.log("YouTube State:", event.data);
                if (event.data === window.YT.PlayerState.PLAYING) {
                  setPlaying(true);
                } else if (
                  event.data === window.YT.PlayerState.PAUSED ||
                  event.data === window.YT.PlayerState.ENDED
                ) {
                  setPlaying(false);
                }
              },
              onError: (error) => {
                console.error("YouTube Player Error:", error);
              },
            },
          });
          console.log("Player instance created:", player);
        } catch (error) {
          console.error("Error creating player:", error);
        }
      } else {
        console.log("YT.Player not available yet");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [apiLoaded]);

  if (!content) return;
  const hero = content.hero;

  return (
    <div className="pt-4 md:pt-8 px-4 md:px-16">
      <div>
        <p className="text-xl md:text-3xl font-jost font-bold text-center text-white px-4 md:px-16 max-w-4xl mx-auto">
          {hero.logline}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 h-[2px] bg-[#790707]/70 my-6"></div>
      </div>
      <div className="hidden md:block relative w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] flex justify-center items-center overflow-hideen">
        <div className="absolute w-[100%] h-[100%] bg-[#c7b092ff] rounded-lg"></div>
        <div
          className={`w-full h-full transition-transform duration-500 ${
            playing ? "scale-100" : "scale-70"
          }`}
        >
          <iframe
            ref={iframeRef}
            src={hero.video}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      {/* <div className="block md:hidden relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-[#c7b092ff] rounded-lg"></div>
      </div> */}
      {/* Mobile Version */}
      {/* <div className="block md:hidden relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-[#c7b092ff] rounded-lg"></div>
        <div className="aspect-video w-full">
          <iframe
            ref={mobileIframeRef}
            src={hero.video}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div> */}
      <div className="block md:hidden relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-[#c7b092ff] rounded-lg"></div>
        <div className="aspect-video w-full relative z-10">
          <iframe
            ref={mobileIframeRef}
            src={hero.video}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            // Important for mobile performance
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Link
          href={hero.donate}
          target="_blank"
          rel="noopener noreferrer"
          className="px-13 py-7 bg-[#F55151] hover:scale-110 text-white font-semibold rounded-2xl transitio-all duration-300 hover:shadow-[0_0_20px_rgba(245,81,81,0.7)] hover:shadow-red-500/50 border-2 border-transparent hover:border-red-400"
        >
          <span className="text-xl= md:2xl">{hero.button}</span>
        </Link>
      </div>
    </div>
  );
}
