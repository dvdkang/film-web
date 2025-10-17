"use client";
import { useState } from "react";
import styles from "./newTimeline.module.css";

const events = [
  {
    date: "Jan 7, 2022",
    title: "Mother's Birthday",
    description:
      "A day filled with joy, laughter, and cake 🎂. Celebrated with family and music.",
    position: { top: "10%" },
  },
  {
    date: "Jun 14, 2023",
    title: "First Live Performance",
    description:
      "Played an acoustic set at the park. Felt the rhythm of the crowd for the first time.",
    position: { top: "-20%" },
  },
  {
    date: "Dec 25, 2024",
    title: "Holiday Jam Session",
    description:
      "Collaborated with local artists to create a festive track blending jazz and soul.",
    position: { top: "-50%" },
  },
  {
    date: "Dec 25, 2024",
    title: "Holiday Jam Session",
    description:
      "Collaborated with local artists to create a festive track blending jazz and soul.",
    position: { top: "-50%" },
  },
  {
    date: "Dec 25, 2024",
    title: "Holiday Jam Session",
    description:
      "Collaborated with local artists to create a festive track blending jazz and soul.",
    position: { top: "-50%" },
  },
  {
    date: "Dec 25, 2024",
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
              style={event.position}
            />
            <div className={styles.noteInfo}>
              <strong>{event.title}</strong>
              <br />
              <span>{event.date}</span>
            </div>
            {activeNote === index && (
              <div className={styles.popup} onClick={() => setActiveNote(null)}>
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
