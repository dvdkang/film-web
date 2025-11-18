"use client";
import { useEffect, useState } from "react";

export default function BouncingNotes() {
  const [notes, setNotes] = useState([]);

  const colors = [
    "#15CFB0",
    "#AD4851",
    "#DFA92A",
    "#F55151",
    "#D9AA59",
    "#BB7A77",
    "#5ED4CE",
    "#790707",
    "#D8A651",
    "#B16764",
    "#1F7570",
  ];

  const spawnNotes = (count) => {
    const symbols = ["♪", "♫", "♬", "♩"];
    let newNotes = [];
    for (let i = 0; i < count; i++) {
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      const size = Math.random() * 20 + 20; // Size between 20px and 40px
      const left = Math.random() * 100; // Percentage from left
      const duration = Math.random() * 5 + 5; // Duration between 5s and 10s
      const color = colors[Math.floor(Math.random() * colors.length)];
      newNotes.push({
        id: Date.now() + i,
        symbol,
        size,
        left,
        duration,
        color,
      });
    }
    setNotes((prev) => [...prev, ...newNotes]);
  };

  useEffect(() => {
    spawnNotes(5); // initial notes
    const interval = setInterval(() => spawnNotes(1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {notes.map((note) => (
        <span
          key={note.id}
          className="absolute top-0 animate-bounce-note"
          style={{
            left: `${note.left}%`,
            fontSize: `${note.size}px`,
            animationDuration: `${note.duration}s`,
            "--note-color": note.color,
            color: "var(--note-color)",
          }}
        >
          {note.symbol}
        </span>
      ))}
    </div>
  );
}
