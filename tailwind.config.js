const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/*.{vue,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        app: {
          green: {
            25: "#EAFFE5",
            50: "#DCFFD4",
            100: "#CFFFC4",
            200: "#C1FFB5",
            300: "#B4FFA6",
            400: "#A7FF97",
            500: "#9AFF89",
            600: "#548E4A",
            700: "#77C669",
            700: "#32552C",
            900: "#101C0E",
          },
          gray: {
            50: "#FBFBFF",
            200: "#747474",
            300: "#565656",
            400: "#373737",
            700: "#181818",
            900: "#101010",
            950: "#0D0D0D",
          },
          red: {
            500: "#F03E3E",
          },
        },
      },
    },
  },
  plugins: [],
};
