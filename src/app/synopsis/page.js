"use client";

import { useContext } from "react";
import { ContentContext } from "@/context/ContentContext";

export default function Synopsis() {
  const content = useContext(ContentContext);

  if (!content) return;
  const synopsis = content.synopsis;

  return (
    <div className="font-sans flex flex-col items-center justify-center p-8 pb-20 gap-8 sm:p-20">
      <h1 className="text-4xl font-bold text-white text-center">
        {synopsis.title}
      </h1>
      <div className="w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg">
        <p className="text-sm sm:text-base md:text-xl leading-relaxed font-serif text-white">
          {synopsis.description.map((paragraph, index) => (
            <span key={index}>
              {paragraph}
              {index < content.synopsis.description.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
