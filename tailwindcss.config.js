// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,jsx,ts,tsx}", // App Router pages/components
//     "./pages/**/*.{js,jsx,ts,tsx}", // Optional, if you have pages/
//     "./components/**/*.{js,jsx,ts,tsx}", // Reusable components
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           beige: "#E1CFB7",
//           teal: "#15CFB0",
//           wine: "#AD4851",
//           gold: "#DFA92A",
//           red: "#F55151",
//           sand: "#D9AA59",
//           rose: "#B16764",
//           aqua: "#5ED4CE",
//           darkred: "#790707",
//           ochre: "#D8A651",
//           clay: "#B16764",
//           deepteal: "#1F7570",
//         },
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        jost: ["var(--font-jost)"],
        lobster: ["var(--font-lobster)"],
      },
    },
  },
  safelist: [
    "bg-[#790707]",
    "bg-[#15CFB0]",
    "bg-[#1F7570]",
    "bg-[#D8A651]",
    "bg-[#AD4851]",
  ],
  plugins: [],
};
