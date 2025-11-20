"use client";

import Timeline from "@/components/Timeline";
import { useContext } from "react";
import { ContentContext } from "@/context/ContentContext";
import Image from "next/image";

export default function Support() {
  const content = useContext(ContentContext);

  if (!content) return;
  const support = content.support;

  return (
    <div className="justify-items-center items-center p-8 pb-20 gap-8 sm:p-20">
      <h1 className="text-4xl font-bold text-white">{support.title[0]}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
        <div className="space-y-6">
          <p className="text-sm text-white md:text-xl leading-relaxed font-serif font-semibold">
            {support.description[0]}
          </p>

          <p className="text-sm text-white md:text-xl leading-relaxed font-serif font-semibold">
            {support.description[1]}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={support.budgetChart}
            alt="Budget Pie Chart"
            width={400}
            height={400}
            priority={true}
            className="w-full max-w-lg h-auto object-contain rounded-lg"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-12">
        <p className="text-sm text-white md:text-xl leading-relaxed font-serif font-semibold">
          {support.description[2]}
        </p>

        <p className="text-sm text-white md:text-xl leading-relaxed mt-6 font-serif font-semibold">
          {support.description[3]}
        </p>

        <ul className="text-sm text-white md:text-xl leading-relaxed list-disc list-inside mb-8 mt-4 font-serif font-semibold">
          {support.supporters.map((supporter) => (
            <li key={supporter}>{supporter}</li>
          ))}
        </ul>
      </div>
      <div className="text-white text-6xl pt-6 pb-8">{support.title[1]}</div>
      <Timeline />
    </div>
  );
}
