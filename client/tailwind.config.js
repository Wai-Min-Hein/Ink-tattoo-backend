import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

 


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },


      colors: {
        dark: "#000",
        "color-primary": "#0D0D0D",
        "color-secondary": "#F2F2F2",
        "color-text": "#D2D2D2",
        "color-accent": "#F2F2F2",
      },
      fontFamily: {
        header: ["Roboto Slab", "serif"],
        para: ["Alegreya", "serif"],
      },
      grayscale: {
        50: "50%",
        80: "80%",
      },
    },
    screens: {
      ssm: "535px",
      // => @media (min-width: 535px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1537px",
      // => @media (min-width: 1537px) { ... }
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}