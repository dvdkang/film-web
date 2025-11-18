import { FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  return (
    <footer className="bg-[#DFA92A] py-10 mt-10">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-start px-20 gap-6">
        {/* Left Column: Social Icons + Copyright */}
        <div className="flex flex-col items-start">
          {/* Social Icons */}
          <div className="flex space-x-6 text-3xl text-black/[.7] dark:text-white/[.7]">
            <a
              href="mailto:northbynorthridge.musical@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-[#B16764]"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/northbynorthridge/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-[#5ED4CE]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@northbynorthridge-amusical"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-[#F55151]"
            >
              <FaYoutube />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-black/[.5] dark:text-white/[.5] mt-8">
            &copy; {new Date().getFullYear()} Jess & Mae. All rights reserved.
          </div>
        </div>

        {/* Right Column: Newsletter */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-semibold mb-2">
            Subscribe to our newsletter
          </h3>
          <form
            action="https://gmail.us11.list-manage.com/subscribe/post?u=40f436d6288f8f40bf3cf7783&amp;id=33f162ca59&amp;f_id=00749ce0f0"
            method="post"
            target="_blank"
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg border border-black/[.2] focus:outline-none focus:ring-2 focus:ring-black/[.5] w-full sm:w-auto"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-[#5ED4CE] transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
