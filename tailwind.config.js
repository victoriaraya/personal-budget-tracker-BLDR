// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         spicy_rice: ["Spicy Rice", "serif"],
//         // spicy_rice: ["var(--font-spicy-rice-regular)"],
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spicy_rice: ["'Spicy Rice'", "serif"],
      },
    },
  },
  plugins: [],
};
