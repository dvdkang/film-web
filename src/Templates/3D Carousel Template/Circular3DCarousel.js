"use client";
// import { useState } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./style.css";

const texts = [
  {
    title: "Tax-Deductible Donation",
    description: "Long description text...",
    descImage:
      "https://eoihqopusjdnmgmfgyrr.supabase.co/storage/v1/object/public/assets/Support/Budget%20Pie%20Chart.jpg",
    image:
      "https://eoihqopusjdnmgmfgyrr.supabase.co/storage/v1/object/public/assets/Support/Cover/supportvid2.mp4",
  },
  {
    title: "Equipment & Services",
    description: "Long description text...",
    image:
      "https://eoihqopusjdnmgmfgyrr.supabase.co/storage/v1/object/public/assets/Support/Cover/supportvid1.mp4",
  },
  {
    title: "Mailing List",
    description: "Long description text...",
    image: "/team/charlie.jpg",
  },
  {
    title: "Mailing List",
    description: "Long description text...",
    image: "/team/charlie.jpg",
  },
];

export default function Circular3DCarousel() {
  const [rotation, setRotation] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [frontIndex, setFrontIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const total = texts.length;
  const angle = 360 / total;
  const radius = 500;

  useEffect(() => {
    // More reliable calculation for front index
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    const calculatedIndex =
      Math.round((360 - normalizedRotation) / angle) % total;
    setFrontIndex(calculatedIndex);
  }, [rotation, angle, total]);

  const handleNext = () => {
    setRotation((prev) => prev - angle);
  };
  const handlePrev = () => {
    setRotation((prev) => prev + angle);
  };

  const handleCardClick = (index) => {
    // Only allow clicking if this card is front-facing
    if (index === frontIndex) {
      setExpandedIndex(index);
    }
  };

  const hasDescImage = expandedIndex !== null && texts[expandedIndex].descImage;

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-container"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {texts.map((item, index) => {
          const isFront = index === frontIndex;
          return (
            <div
              key={index}
              className={`carousel-item ${isFront ? "front-card" : ""} ${
                isFront && isHovered ? "hovered" : ""
              }`}
              style={{
                transform: `rotateY(${
                  index * angle
                }deg) translateZ(${radius}px)`,
                cursor: isFront ? "pointer" : "default",
                pointerEvents: isFront ? "auto" : "none",
              }}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => isFront && setIsHovered(true)}
              onMouseLeave={() => isFront && setIsHovered(false)}
            >
              {/* <img src={item.image} alt={item.title} /> */}
              {item.image && (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="card-video"
                  onError={(e) => {
                    // Fallback to image if video fails
                    e.target.style.display = "none";
                  }}
                >
                  <source src={item.image} type="video/mp4" />
                </video>
              )}
              {isFront && (
                <div className="card-overlay">
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <div className="click-hint">Click to expand</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="carousel-controls">
        <button onClick={handlePrev}>◀</button>
        <button onClick={handleNext}>▶</button>
      </div>

      {/* Expanded view modal */}
      {expandedIndex !== null && (
        <div
          className="modal-overlay"
          onClick={() => setExpandedIndex(null)}
          style={{
            backgroundImage: `url(${texts[expandedIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className={`modal-content ${
              hasDescImage ? "two-column" : "single-column"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-background-overlay"></div>
            <button
              className="modal-close-button"
              onClick={() => setExpandedIndex(null)}
            >
              x
            </button>
            {hasDescImage ? (
              // Two-column layout
              <div className="modal-columns">
                <div className="modal-left">
                  <h1>{texts[expandedIndex].title}</h1>
                  <p>{texts[expandedIndex].description}</p>
                  {/* Add any additional content here */}
                </div>
                <div className="modal-right">
                  <img
                    src={texts[expandedIndex].descImage}
                    alt={texts[expandedIndex].title}
                    className="desc-image"
                  />
                </div>
              </div>
            ) : (
              // Single-column layout
              <div className="modal-single">
                <h1>{texts[expandedIndex].title}</h1>
                <p>{texts[expandedIndex].description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// export default function Circular3DCarousel() {
//   const [rotation, setRotation] = useState(0);
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const total = texts.length;
//   const angle = 360 / total;
//   const radius = 300;

//   const carouselRef = useRef(null);
//   const startX = useRef(0);
//   const isDragging = useRef(false);

//   const handleNext = () => setRotation((prev) => prev - angle);
//   const handlePrev = () => setRotation((prev) => prev + angle);

//   // Swipe handlers
//   const handlePointerDown = (e) => {
//     isDragging.current = true;
//     startX.current = e.clientX || e.touches[0].clientX;
//   };
//   const handlePointerMove = (e) => {
//     if (!isDragging.current) return;
//     const x = e.clientX || e.touches[0].clientX;
//     const dx = x - startX.current;
//     if (dx > 50) {
//       handlePrev();
//       isDragging.current = false;
//     } else if (dx < -50) {
//       handleNext();
//       isDragging.current = false;
//     }
//   };
//   const handlePointerUp = () => {
//     isDragging.current = false;
//   };

//   // Calculate front-facing index
//   const frontIndex = ((-Math.round(rotation / angle) % total) + total) % total;

//   return (
//     <div className="carousel-wrapper">
//       <div
//         className="carousel-container"
//         style={{ transform: `rotateY(${rotation}deg)` }}
//         ref={carouselRef}
//         onMouseDown={handlePointerDown}
//         onMouseMove={handlePointerMove}
//         onMouseUp={handlePointerUp}
//         onMouseLeave={handlePointerUp}
//         onTouchStart={handlePointerDown}
//         onTouchMove={handlePointerMove}
//         onTouchEnd={handlePointerUp}
//       >
//         {texts.map((item, index) => {
//           const isFront = index === frontIndex;
//           return (
//             <div
//               key={index}
//               className="carousel-item"
//               style={{
//                 transform: `rotateY(${
//                   index * angle
//                 }deg) translateZ(${radius}px)`,
//                 cursor: isFront ? "pointer" : "default",
//                 pointerEvents: isFront ? "auto" : "none",
//               }}
//               onClick={() => isFront && setExpandedIndex(index)}
//             >
//               <img src={item.image} alt={item.title} />
//               <h3>{item.title}</h3>
//             </div>
//           );
//         })}
//       </div>

//       <div className="carousel-controls">
//         <button onClick={handlePrev}>◀</button>
//         <button onClick={handleNext}>▶</button>
//       </div>

//       {/* Expanded modal */}
//       {expandedIndex !== null && (
//         <div className="modal-overlay" onClick={() => setExpandedIndex(null)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button
//               className="modal-close-button"
//               onClick={() => setExpandedIndex(null)}
//             >
//               ✕
//             </button>
//             <h1>{texts[expandedIndex].title}</h1>
//             <p>{texts[expandedIndex].description}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
