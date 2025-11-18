"use client";

import { Bebas_Neue, Jost, Lobster_Two } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useContext } from "react";
import { ContentContext } from "@/context/ContentContext";
import Confetti from "react-confetti";
import { ContentProvider } from "../context/ContentContext";
import { usePathname } from "next/navigation";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const lobsterFont = Lobster_Two({
  variable: "--font-lobster",
  weight: "700",
  subsets: ["latin"],
});

function BackgroundWrapper({ children, triggerConfetti }) {
  const content = useContext(ContentContext);
  const pathname = usePathname();

  if (!content) return children;

  const background = content.background;
  const backgroundImage =
    pathname === "/"
      ? background.homePage
      : pathname === "/synopsis"
      ? background.synopsisPage
      : pathname === "/support"
      ? background.supportPage
      : pathname === "/team"
      ? background.teamPage
      : pathname === "/contact"
      ? background.contactPage
      : "none";

  return (
    <>
      <div
        className="fixed inset-0 w-full h-full object-cover -z-10"
        style={{
          backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Navbar triggerConfetti={triggerConfetti} />
      {children}
    </>
  );
}

export default function RootLayout({ children }) {
  const [confettiActive, setConfettiActive] = useState(false);

  const triggerConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 3000); // 3-second burst
  };

  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`antialiased ${bebasNeue.className} ${jost.variable} ${lobsterFont.variable}`}
      >
        <ContentProvider>
          <BackgroundWrapper triggerConfetti={triggerConfetti}>
            <div className="pt-[5rem] md:pt-[6rem]">{children}</div>
            {confettiActive && (
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={500}
                recycle={false}
                gravity={0.3}
              />
            )}
            <Footer />
          </BackgroundWrapper>
        </ContentProvider>
        {/* <Navbar triggerConfetti={triggerConfetti} />
        <div className="pt-[5rem] md:pt-[6rem]">
          <ContentProvider>{children}</ContentProvider>
        </div>
        {confettiActive && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={500}
            recycle={false}
            gravity={0.3}
          />
        )} */}
      </body>
    </html>
  );
}
