"use client";
import { useEffect, useState } from "react";

export default function FloatingNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      spawnNotes(1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const colors = [
    "#15CFB0",
    "#AD4851",
    "#F55151",
    "#BB7A77",
    "#5ED4CE",
    "#790707",
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
      const drift = Math.random() * 40 - 20;
      newNotes.push({
        id: Date.now() + i,
        symbol,
        size,
        left,
        duration,
        color,
        drift,
      });
    }
    setNotes((prev) => [...prev, ...newNotes]);
  };

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {notes.map((note) => (
        <span
          key={note.id}
          className="absolute bottom-0 animate-float"
          style={{
            left: `${note.left}%`,
            fontSize: `${note.size}px`,
            animationDuration: `${note.duration}s`,
            "--note-color": note.color,
            color: "var(--note-color)",
            transform: `translateX(${note.drift}px)`,
          }}
        >
          {note.symbol}
        </span>
      ))}
    </div>
  );
}
