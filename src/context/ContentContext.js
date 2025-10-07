"use client";
import { createContext, useEffect, useState } from "react";

export const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/dvdkang/film-content/refs/heads/main/labels/en.json"
    )
      .then((res) => res.json())
      .then(setContent)
      .catch((err) => console.error("Failed to fetch content:", err));
  }, []);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}
