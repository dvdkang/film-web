"use client";

import { useContext, useState, useEffect } from "react";
import { ContentContext } from "@/context/ContentContext";
import Image from "next/image";

export default function Team() {
  const content = useContext(ContentContext);
  const [activeCard, setActiveCard] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  // Determine if we are on mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // example breakpoint
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!content) return;
  const team = content.team;

  const firstRow = team.members.slice(0, 2);
  const secondRow = team.members.slice(2, 5);

  const renderMemberCard = (member) => (
    <div
      key={member.id}
      className="relative w-full max-w-sm aspect-[3/4] group mx-auto"
      onClick={() => {
        if (isMobile) {
          setActiveCard(activeCard === member.id ? null : member.id);
        }
      }}
    >
      {/* Colored box slightly shifted top-left */}
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          member.color
        } rounded-lg shadow-lg
                    transform -translate-x-2 -translate-y-2
                    group-hover:translate-x-0 group-hover:translate-y-0
                    transition-transform duration-300 ${
                      activeCard === member.id
                        ? "translate-x-0"
                        : "-translate-x-2"
                    } ${
          activeCard === member.id ? "translate-y-0" : "-translate-y-2"
        }`}
      />

      {/* Image fully visible */}
      <Image
        src={member.photo}
        alt={member.name}
        className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg"
      />

      {member.emoji && (
        <span
          className="absolute -top-4 -right-4 text-6xl z-30"
          style={{ pointerEvents: "none" }}
        >
          {member.emoji}
        </span>
      )}

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 ${
          member.color
        } bg-opacity-60 opacity-0 md:group-hover:opacity-100 
                    flex flex-col items-center justify-start px-12 pt-6 space-y-3 rounded-lg 
                    transition-opacity z-20 ${
                      activeCard === member.id ? "opacity-100" : "opacity-0"
                    }`}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          {member.name}
        </h2>
        <h3 className="text-lg md:text-xl text-white italic">{member.role}</h3>
        <div className="w-24 h-[1px] bg-white/70 my-0.25 md:my-1"></div>
        <p className="text-[0.95rem] md:text-md text-white font-serif">
          {member.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-beige py-16 px-4">
      <h1 className="text-4xl text-white md:text-5xl font-bold text-center text-brand-darkred mb-12">
        {team.title}
      </h1>
      <div className="max-w-10xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {firstRow.map(renderMemberCard)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondRow.map(renderMemberCard)}
        </div>
      </div>
      {/* <Slider {...settings} className="max-w-5xl mx-auto"> */}

      {/* </Slider> */}
    </div>
  );
}

//  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
//         {team.members.map((member, idx) => (
//           <div key={idx} className="relative w-[90%] aspect-[3/4] group">
//             {/* Colored box slightly shifted top-left */}
//             <div
//               className={`absolute top-0 left-0 w-full h-full ${member.color} rounded-lg shadow-lg
//                           transform -translate-x-2 -translate-y-2
//                           group-hover:translate-x-0 group-hover:translate-y-0
//                           transition-transform duration-300`}
//             />

//             {/* Image fully visible */}
//             <img
//               src={member.photo}
//               alt={member.name}
//               className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg"
//             />

//             {/* Hover overlay */}
//             <div
//               className={`absolute inset-0 ${member.color} bg-opacity-60 opacity-0 group-hover:opacity-100
//               flex flex-col items-center justify-start px-12 pt-10 space-y-6 rounded-lg
//               transition-opacity z-20`}
//             >
//               <h2 className="text-4xl font-bold text-white">{member.name}</h2>
//               <h3 className="text-2xl text-white italic">{member.role}</h3>
//               <p className="text-xl text-white">{member.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
