"use client"; // for Next.js 13+ app directory

import { useState, useRef, useEffect, useContext } from "react";
import styles from "./Timeline.module.css";
import { ContentContext } from "@/context/ContentContext";

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const timelineBarRef = useRef(null);

  useEffect(() => {
    // This code will only run on the client
    if (timelineBarRef.current) {
      // safe to manipulate
    }
  }, []);

  const eventsData = [
    {
      date: "Nov 14",
      title: "Event 1",
      fullDate: "Nov 14, 2025",
      description: "Description for Event 1",
    },
    {
      date: "Dec 20",
      title: "Event 2",
      fullDate: "Dec 20, 2025",
      description: "Description for Event 2",
    },
    {
      date: "Feb 2",
      title: "Event 3",
      fullDate: "Feb 2, 2026",
      description: "Description for Event 3",
    },
    {
      date: "Mar 7",
      title: "Event 4",
      fullDate: "Mar 7, 2026",
      description: "Description for Event 4",
    },
  ];

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineBar}>
        <div
          className={styles.fillingBar}
          style={{
            transform: `scaleX(${(selectedIndex + 1) / eventsData.length})`,
          }}
          onClick={() => setSelectedIndex(index)}
        ></div>

        {eventsData.map((event, index) => (
          <div
            key={index}
            className={`${styles.eventDot} ${
              index === selectedIndex ? styles.selected : ""
            }`}
            style={{ left: `${(index / (eventsData.length - 1)) * 100}%` }}
            onClick={() => setSelectedIndex(index)}
          >
            <span className={styles.eventDate}>{event.date}</span>
            <span className={styles.eventCircle}></span>
            <span className={styles.eventTitle}>{event.title}</span>
          </div>
        ))}
      </div>
      <div className={styles.eventContentWrapper}>
        <h2>{eventsData[selectedIndex].title}</h2>
        <h4>{eventsData[selectedIndex].fullDate}</h4>
        <p>
          Description for <strong>{eventsData[selectedIndex].title}</strong>{" "}
          goes here.
        </p>
      </div>
    </div>
  );
}
