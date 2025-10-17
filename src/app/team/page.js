"use client";

import { useContext, useState } from "react";
import { ContentContext } from "@/context/ContentContext";

export default function TeamRowResponsive() {
  const content = useContext(ContentContext);
  const [activeCard, setActiveCard] = useState(null);
  if (!content) return;
  const team = content.team;

  const firstRow = team.members.slice(0, 2);
  const secondRow = team.members.slice(2, 5);

  const renderMemberCard = (member, idx) => (
    <div
      key={idx}
      className="relative w-full max-w-sm aspect-[3/4] group mx-auto"
      onClick={() => setActiveCard(activeCard === idx ? null : idx)}
    >
      <div className="absolute top-2 right-2 text-2xl md:text-3xl z-30">
        {member.emoji}
      </div>
      {/* Colored box slightly shifted top-left */}
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          member.color
        } rounded-lg shadow-lg
                    transform -translate-x-2 -translate-y-2
                    group-hover:translate-x-0 group-hover:translate-y-0
                    transition-transform duration-300 ${
                      activeCard === idx ? "translate-x-0" : "-translate-x-2"
                    } ${
          activeCard === idx ? "translate-y-0" : "-translate-y-2"
        }`}
      />

      {/* Image fully visible */}
      <img
        src={member.photo}
        alt={member.name}
        className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg"
      />

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 ${
          member.color
        } bg-opacity-60 opacity-0 md:group-hover:opacity-100 
                    flex flex-col items-center justify-start px-12 pt-6 space-y-3 rounded-lg 
                    transition-opacity z-20 ${
                      activeCard === idx ? "opacity-100" : "opacity-0"
                    }`}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          {member.name}
        </h2>
        <h3 className="text-lg md:text-xl text-white italic">{member.role}</h3>
        <div className="w-24 h-[1px] bg-white/70 my-0.25 md:my-1"></div>
        <p className="text-lg md:text-xl text-white">{member.description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-beige py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-brand-darkred mb-12">
        {team.title}
      </h1>
      <div className="max-w-10xl mx-auto space-y-8">
        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {firstRow.map(renderMemberCard)}
        </div>

        {/* Second row: 2 cards */}
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
