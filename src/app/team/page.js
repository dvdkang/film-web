"use client";

import { useContext } from "react";
import { ContentContext } from "@/context/ContentContext";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function TeamRowResponsive() {
  const content = useContext(ContentContext);
  if (!content) return;
  const team = content.team;

  const firstRow = team.members.slice(0, 3);
  const secondRow = team.members.slice(3, 5);

  const renderMemberCard = (member, idx) => (
    <div
      key={idx}
      className="relative w-full max-w-sm aspect-[3/4] group mx-auto"
    >
      {/* Colored box slightly shifted top-left */}
      <div
        className={`absolute top-0 left-0 w-full h-full ${member.color} rounded-lg shadow-lg
                    transform -translate-x-2 -translate-y-2
                    group-hover:translate-x-0 group-hover:translate-y-0
                    transition-transform duration-300`}
      />

      {/* Image fully visible */}
      <img
        src={member.photo}
        alt={member.name}
        className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg"
      />

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 ${member.color} bg-opacity-60 opacity-0 group-hover:opacity-100 
                    flex flex-col items-center justify-start px-12 pt-10 space-y-6 rounded-lg 
                    transition-opacity z-20`}
      >
        <h2 className="text-4xl font-bold text-white">{member.name}</h2>
        <h3 className="text-2xl text-white italic">{member.role}</h3>
        <p className="text-xl text-white">{member.description}</p>
      </div>
    </div>
  );
  //   const settings = {
  //     infinite: true,
  //     slidesToShow: 2,
  //     slidesToScroll: 2,
  //     arrows: true,
  //     dots: false,
  //     autoplay: false,
  //     adaptiveHeight: true,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };

  return (
    <div className="min-h-screen bg-brand-beige py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-brand-darkred mb-12">
        {team.title}
      </h1>
      <div className="max-w-10xl mx-auto space-y-8">
        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {firstRow.map(renderMemberCard)}
        </div>

        {/* Second row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
