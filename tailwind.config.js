/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mywhite: "#FBFCFF",
        mygray: "#f5f5f5",
        myyellow: {
          100: "#FBFFA5",
          200: "#FBFF7D",
          300: "#FAFF69",
          400: "#FAFF55",
          500: "#F9FF41",
          600: "#F8FF2D",
          700: "#F8FF19",
          800: "#F7FF05",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-s2cond(Purple|Pink|Orange|Yellow|Lime|Mint|Test|Test2)/,
    },
  ],
};
