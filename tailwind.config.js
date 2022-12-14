// module.exports = {
//   mode: "jit",
//   purge: [
//     "./src/pages/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       colors: {
//         amazon_blue: {
//           light: "#232F3E",
//           DEFAULT: "#131921",
//         },
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/line-clamp")],
// };

// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//        extend: {
//      colors: {
//        amazon_blue: {
//          light: "#232F3E",
//         DEFAULT: "#131921",
//        },
//      },
//    },

//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};