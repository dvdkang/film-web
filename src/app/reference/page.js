"use client";
// import { useState } from "react";
import { useContext, useState, useEffect, useRef, useMemo } from "react";
import { ContentContext } from "@/context/ContentContext";
import "./style.css";

export default function Reference() {
  const content = useContext(ContentContext);
  const [rotation, setRotation] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [frontIndex, setFrontIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const videoRefs = useRef([]);

  const { refer, total, angle, radius } = useMemo(() => {
    if (!content) {
      return { refer: [], total: 0, angle: 0, radius: 0 };
    }
    const refer = content.reference.refer;
    const total = refer.length;
    const angle = 360 / total;
    const radius = 500;
    return { refer, total, angle, radius };
  }, [content]);

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

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === frontIndex) {
          // Play video for front card
          video.play().catch((e) => console.log("Video play failed:", e));
        } else {
          // Pause video for non-front cards
          video.pause();
        }
      }
    });
  }, [frontIndex]);

  if (!content || total === 0) return;

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-container"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {refer.map((item, index) => {
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
                pointerEvents: isFront ? "auto" : "none",
              }}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => isFront && setIsHovered(true)}
              onMouseLeave={() => isFront && setIsHovered(false)}
            >
              {item.image && (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
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
            </div>
          );
        })}
      </div>

      <div className="carousel-controls">
        <button onClick={handlePrev}>◀</button>
        <button onClick={handleNext}>▶</button>
      </div>
    </div>
  );
}
