import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar({ triggerConfetti }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);

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
        <div className="hidden md:flex absolute left-4 flex space-x-12 pl-4">
          <Link
            href="/synopsis"
            className="font-bold text-2xl text-white hover:text-[#DFA92A]"
          >
            Synopsis
          </Link>
          <Link
            href="/team"
            className="font-bold text-2xl text-white hover:text-[#DFA92A]"
          >
            Team
          </Link>
          <Link
            href="/support"
            className="font-bold text-2xl text-white hover:text-[#DFA92A]"
          >
            Support Us
          </Link>
          <Link
            href="/newTimeline"
            className="font-bold text-2xl text-white hover:text-[#DFA92A]"
          >
            newTimeline
          </Link>
          <Link
            href="/Timeline"
            className="font-bold text-2xl text-white hover:text-[#DFA92A]"
          >
            Timeline
          </Link>
        </div>

        {/* CENTER: Title */}
        <div className="flex-1 text-center">
          <Link
            href="/"
            className="text-6xl md:text-6xl font-bold text-white hover:text-[#DFA92A] tracking-wide"
          >
            Jess & Mae
          </Link>
        </div>
        <div className="hidden md:block absolute right-4">
          <Link
            href="https://www.afi.com/support/?Op=donate&don=621"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-7 py-5 bg-[#F55151] hover:bg-[#AD4851] text-white text-xl font-semibold rounded transition"
            onMouseEnter={triggerConfetti}
          >
            Donate Now
          </Link>
        </div>
        <button
          className="md:hidden text-white text-3xl absolute left-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/90 z-50 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="absolute top-5 right-5 text-white text-4xl"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>

        <Link
          href="/synopsis"
          className="text-4xl text-white my-4"
          onClick={handleLinkClick}
        >
          Synopsis
        </Link>
        <Link
          href="/team"
          className="text-4xl text-white my-4"
          onClick={handleLinkClick}
        >
          Team
        </Link>
        <Link
          href="/support"
          className="text-4xl text-white my-4"
          onClick={handleLinkClick}
        >
          Support Us
        </Link>
        <Link
          href="/newTeam"
          className="text-4xl text-white my-4"
          onClick={handleLinkClick}
        >
          Contact
        </Link>
        <Link
          href="https://www.afi.com/support/?Op=donate&don=621"
          target="_blank"
          className="mt-6 px-10 py-4 bg-[#F55151] hover:bg-[#AD4851] text-white font-semibold rounded text-2xl"
        >
          Donate Now
        </Link>
      </div>
    </nav>
  );
}
