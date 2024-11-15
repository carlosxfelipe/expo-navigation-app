/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "work-regular": ["WorkSans-Regular", "sans-serif"],
        "work-black": ["WorkSans-Black", "sans-serif"],
        "work-medium": ["WorkSans-Medium", "sans-serif"],
        "work-light": ["WorkSans-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
