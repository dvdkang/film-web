import Link from "next/link";

export default function Navbar({ triggerConfetti }) {
  return (
    <nav className="border-b border-solid border-black/[.08] dark:border-white/[.145] py-4 pt-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="absolute left-4">
          <Link
            href="/"
            className="text-3xl md:text-4xl font-bold text-white hover:text-[#DFA92A] tracking-wide"
          >
            Jess & Mae
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-12">
          {/* <Link href="/" className="font-bold text-lg">
            Home
          </Link> */}
          <Link
            href="/synopsis"
            className="font-bold text-xl text-white hover:text-[#DFA92A]"
          >
            Synposis
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
        </div>
        <div className="absolute right-4">
          <Link
            href="https://www.instagram.com/romcommusical/"
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
