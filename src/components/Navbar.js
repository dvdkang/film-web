import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { ContentContext } from "@/context/ContentContext";

export default function Navbar({ triggerConfetti }) {
  const content = useContext(ContentContext);
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

  if (!content) return;
  const navbar = content.navbar;
  //className="bg-transparent border-black/[.08] dark:border-white/[.145] py-10 pt-10 fixed top-0 left-0 w-full z-50"
  return (
    <nav
      className={`fixed w-full top-0 z-50 py-7 transition-colors duration-300 ${
        scrolled ? "bg-black/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* LEFT: Navigation Links */}
        <div className="hidden md:flex absolute left-4 xl:left-8 space-x-2 md:space-x-3 lg:space-x-6 xl:space-x-8 2xl:space-x-12">
          {navbar.nav.map((nav) => (
            <Link
              href={nav.link}
              key={nav.name}
              className="font-bold text-sm md:text-base lg:text-lg xl:text-2xl text-white hover:text-[#DFA92A]"
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* CENTER: Title */}
        <div className="flex-1 text-center">
          <Link
            href="/"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white hover:text-[#DFA92A] tracking-wide"
          >
            {navbar.title}
          </Link>
        </div>
        <div className="hidden md:block absolute right-4">
          <Link
            href={navbar.donateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-7 py-5 bg-[#F55151] hover:bg-[#AD4851] text-white text-xl font-semibold rounded transition"
            onMouseEnter={triggerConfetti}
          >
            {navbar.button}
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
        {navbar.mobileNav.map((nav) => (
          <Link
            href={nav.link}
            key={nav.name}
            className="text-4xl text-white my-4"
            onClick={handleLinkClick}
          >
            {nav.name}
          </Link>
        ))}
        <Link
          href={navbar.donateLink}
          target="_blank"
          className="mt-6 px-10 py-4 bg-[#F55151] hover:bg-[#AD4851] text-white font-semibold rounded text-2xl"
        >
          {navbar.button}
        </Link>
      </div>
    </nav>
  );
}
