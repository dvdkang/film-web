import { FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the email. Later you can send it to your database or API
    console.log("Email submitted:", email);
    setEmail("");
  };
  return (
    <footer className="bg-[#DFA92A] py-10 mt-10">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-start px-20 gap-6">
        {/* Left Column: Social Icons + Copyright */}
        <div className="flex flex-col items-start">
          {/* Social Icons */}
          <div className="flex space-x-6 text-3xl text-black/[.7] dark:text-white/[.7]">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-[#B16764]"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-[#5ED4CE]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
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
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
    // <footer className="bg-[#DFA92A] py-6 mt-10">
    //   <div className="max-w-5xl mx-auto flex justify-center space-x-6 mb-4 text-3xl text-black/[.7] dark:text-white/[.7]">
    //     <a href="" target="_blank" rel="noopener noreferrer">
    //       <FaEnvelope />
    //     </a>
    //     <a
    //       href="https://instagram.com"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <FaInstagram />
    //     </a>
    //     <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    //       <FaYoutube />
    //     </a>
    //   </div>

    //   <div className="max-w-md mx-auto mb-6 text-center">
    //     <h3 className="text-lg font-semibold mb-2">
    //       Subscribe to our newsletter
    //     </h3>
    //     <form
    //       onSubmit={handleSubmit}
    //       className="flex flex-col sm:flex-row justify-center gap-2"
    //     >
    //       <input
    //         type="email"
    //         placeholder="Your email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         className="px-4 py-2 rounded-lg border border-black/[.2] focus:outline-none focus:ring-2 focus:ring-black/[.5]"
    //         required
    //       />
    //       <button
    //         type="submit"
    //         className="px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-black/[.8] transition"
    //       >
    //         Subscribe
    //       </button>
    //     </form>
    //   </div>

    //   <div className="max-w-5xl mx-auto text-center text-sm text-black/[.5] dark:text-white/[.5]">
    //     &copy; {new Date().getFullYear()} Jess & Mae. All rights reserved.
    //   </div>

    //   <div className=""></div>
    // </footer>
  );
}
