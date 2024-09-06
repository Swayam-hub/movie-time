import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors:{
        dark:'#0A0A0A',
        light:'#f5f5f5',
        primary:'#863E96',
        primaryDark:'#58E6D9',
        purple: "#CBACF9",
      },
      backgroundImage: {
        circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #0A0A0A 5px, #0A0A0A 100px);",
        circularDark:"repeating-radial-gradient(rgba(255, 255, 255, 255) 2px, #0A0A0A 5px, #0A0A0A 100px);"
        // circularDark: "radial-gradient(circle at 50% 50%, #1b1b1b, #f5f5f5)",
        // circularLightLg: "radial-gradient(circle at 50% 50%, #863E96, #58E6D9)",
        // circularDarkLg: "radial-gradient(circle at 50% 50%, #1b1b1b, #f5f5f5)",
        // circularLightMd: "radial-gradient(circle at 50% 50%, #863E96, #58E6D9)",
        // circularDarkMd: "radial-gradient(circle at 50% 50%, #1b1b1b, #f5f5f5)",
        // circularLightSm: "radial-gradient(circle at 50% 50%, #863E96, #58E6D9)",
        // circularDarkSm: "radial-gradient(circle at 50% 50%, #1b1b1b, #f5f5f5)",
      },
    },
  },
  plugins: [addVariablesForColors,],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  })}
