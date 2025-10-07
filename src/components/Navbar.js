import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar({ triggerConfetti }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // threshold for changing background
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //className="bg-transparent border-black/[.08] dark:border-white/[.145] py-10 pt-10 fixed top-0 left-0 w-full z-50"
  return (
    <nav
      className={`fixed w-full top-0 z-50 py-7 transition-colors duration-300 ${
        scrolled ? "bg-black/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* LEFT: Navigation Links */}
        <div className="absolute left-4 flex space-x-12 pl-4">
          <Link
            href="/synopsis"
            className="font-bold text-xl text-white hover:text-[#DFA92A]"
          >
            Synopsis
          </Link>
          <Link
            href="/team"
            className="font-bold text-xl text-white hover:text-[#DFA92A]"
          >
            Team
          </Link>
          <Link
            href="/support"
            className="font-bold text-xl text-white hover:text-[#DFA92A]"
          >
            Support Us
          </Link>
          <Link
            href="/newTeam"
            className="font-bold text-xl text-white hover:text-[#DFA92A]"
          >
            Contact Us
          </Link>
        </div>

        {/* CENTER: Title */}
        <div className="flex-1 text-center">
          <Link
            href="/"
            className="text-6xl md:text-5xl font-bold text-white hover:text-[#DFA92A] tracking-wide"
          >
            Jess & Mae
          </Link>
        </div>
        <div className="absolute right-4">
          <Link
            href="https://www.afi.com/support/?Op=donate&don=621"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-7 py-5 bg-[#F55151] hover:bg-[#AD4851] text-white font-semibold rounded transition"
            onMouseEnter={triggerConfetti}
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
