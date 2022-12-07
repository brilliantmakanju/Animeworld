/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
  ],


  // /give @p command_block

  // /summon ender_crystal
};
