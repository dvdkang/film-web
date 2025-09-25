"use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function TeamRowResponsive() {
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
  const teamMembers = [
    {
      name: "Sahej Singh Nandrajog",
      role: "Writer/Director",
      description:
        "Alice is a visionary filmmaker with a passion for storytelling that captivates audiences. She has directed several award-winning short films and is known for her unique ability to blend humor with heartfelt emotion. Outside of the studio, Alice mentors emerging filmmakers and frequently speaks at creative workshops. Her leadership ensures every project maintains a clear artistic vision while embracing innovation.",
      image: "/team/alice.jpg",
      color: "bg-[#790707]",
    },
    {
      name: "Emily Ma",
      role: "Prduction Designer",
      description:
        "Bob is a classically trained composer whose music brings stories to life. With over a decade of experience in film scoring, he creates immersive soundscapes that enhance emotion and drama on screen. Bob’s work spans orchestral compositions, electronic soundtracks, and original songs. When he’s not in the studio, he enjoys teaching music theory and exploring new genres to inspire his next composition.",
      image: "/team/bob.jpg",
      color: "bg-[#15CFB0]",
    },
    {
      name: "Lily Guo",
      role: "Producter",
      description:
        "Charlie is a skilled cinematographer with an eye for cinematic storytelling. Specializing in dynamic camera work and creative lighting, he brings each scene to life with precision and style. From indie projects to feature films, Charlie captures visuals that are both aesthetically stunning and emotionally compelling. In his free time, he enjoys experimenting with drone cinematography and photography projects.",
      image: "/team/charlie.jpg",
      color: "bg-[#1F7570]",
    },
    {
      name: "Les Gaddis",
      role: "Cinematographer",
      description:
        "Dana is an experienced producer who keeps every project running smoothly from concept to final cut. With a talent for organization, budgeting, and team coordination, she ensures the creative vision is executed efficiently. Dana has worked on a variety of projects, from independent films to large-scale productions, and is passionate about fostering collaboration among diverse creative teams. Outside of work, she advocates for women in film and leads industry networking events.",
      image: "/team/dana.jpg",
      color: "bg-[#D8A651]",
    },
    {
      name: "Icey Zhang",
      role: "Editor",
      description:
        "Dana is an experienced producer who keeps every project running smoothly from concept to final cut. With a talent for organization, budgeting, and team coordination, she ensures the creative vision is executed efficiently. Dana has worked on a variety of projects, from independent films to large-scale productions, and is passionate about fostering collaboration among diverse creative teams. Outside of work, she advocates for women in film and leads industry networking events.",
      image: "/team/dana.jpg",
      color: "bg-[#AD4851]",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-beige py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-brand-darkred mb-12">
        Meet the Team
      </h1>

      {/* <Slider {...settings} className="max-w-5xl mx-auto"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="relative w-full h-[28rem] md:h-[40rem] group"
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
              src={member.image}
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
        ))}
      </div>
      {/* </Slider> */}
    </div>
  );
}
