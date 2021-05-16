module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Screens/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        ssm: {
          min: "320px",
          max: "639px",
        },
        small: { min: "640px", max: "767px" },
        mid: { min: "768px", max: "1023px" },
        lrg: { min: "1024px", max: "1279px" },
        xlrg: { min: "1280px", max: "1535px" },
        "2xl": { min: "1536px" },
      },

      colors: {
        Navy: "#0a192f",
        LightNavy: "#112240",
        LightestNavy: "#233554",
        Slate: "#8892b0",
        LightSlate: "#a8b2d1",
        LightestSlate: "#ccd6f6",
        White: "#e6f1ff",
        Green: "#64ffda",
      },
      fontFamily: {
        custom: ["Montserrat"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
