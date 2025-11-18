"use client";
import { useState } from "react";
import styles from "./newTimeline.module.css";

const events = [
  {
    date: "Now – Dec 2025",
    title: "Mother's Birthday",
    description:
      "A day filled with joy, laughter, and cake 🎂. Celebrated with family and music.",
    position: { top: "10%" },
    note_color:
      "invert(44%) sepia(77%) saturate(6221%) hue-rotate(348deg) brightness(95%) contrast(101%)",
    info_color: "linear-gradient(45deg, #FF6B6B, #C41C1C)",
  },
  {
    date: "Jan 2026 – Apr 2026",
    title: "First Live Performance",
    description:
      "Played an acoustic set at the park. Felt the rhythm of the crowd for the first time.",
    position: { top: "-20%" },
    note_color:
      "invert(24%) sepia(46%) saturate(431%) hue-rotate(150deg) brightness(84%) contrast(89%)",
    info_color: "linear-gradient(45deg, #1FAAA6, #145554)",
  },
  {
    date: "Apr 29 – May 8, 2026",
    title: "Holiday Jam Session",
    description:
      "Collaborated with local artists to create a festive track blending jazz and soul.",
    position: { top: "-50%" },
    note_color:
      "invert(77%) sepia(74%) saturate(467%) hue-rotate(1deg) brightness(90%) contrast(101%)",
    info_color: "linear-gradient(45deg, #FFD95B, #B8860B)",
  },
  {
    date: "May 26 – Oct 2026",
    title: "Holiday Jam Session",
    description:
      "Collaborated with local artists to create a festive track blending jazz and soul.",
    position: { top: "-50%" },
    note_color:
      "brightness(0) saturate(100%) invert(53%) sepia(6%) saturate(3554%) hue-rotate(314deg) brightness(85%) contrast(78%)",
    info_color: "linear-gradient(45deg, #D1827D, #8C3E3A)",
  },
  {
    date: "June 2026",
    title: "Holiday Jam Session",
    description:
      "Collaborated with local artists to create a festive track blending jazz and soul.",
    position: { top: "-50%" },
    note_color:
      "brightness(0) saturate(100%) invert(93%) sepia(62%) saturate(5525%) hue-rotate(150deg) brightness(87%) contrast(88%)",
    info_color: "linear-gradient(45deg, #6EE0D9, #1EA89F)",
  },
  {
    date: "After Oct 2026",
    title: "Holiday Jam Session",
    description:
      "Collaborated with local artists to create a festive track blending jazz and soul.",
    position: { top: "-50%" },
  },
];

export default function newTimeline() {
  const [activeNote, setActiveNote] = useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.staff}>
        <img
          src="/Testing/trebleClef.svg"
          alt="Treble Clef"
          className={styles.trebleClef}
        />
        {events.map((event, index) => (
          <div key={index} className={styles.noteWrapper}>
            <img
              src="/Testing/eighthNote.svg"
              alt="Note"
              className={styles.note}
              onClick={() => setActiveNote(activeNote === index ? null : index)}
              style={{ ...event.position, filter: event.note_color }}
            />
            <div
              className={styles.noteInfo}
              style={{ backgroundImage: event.info_color }}
            >
              <strong>{event.title}</strong>
              <br />
              <span>{event.date}</span>
            </div>
            {activeNote === index && (
              <div
                className={styles.popup}
                style={{ backgroundImage: event.info_color }}
                onClick={() => setActiveNote(null)}
              >
                <h3>{event.title}</h3>
                <small>{event.date}</small>
                <p>{event.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
