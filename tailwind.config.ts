import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
          veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
          desaturatedDarkBlue: "hsl(214, 17%, 51%)",
          grayishBlue: "hsl(212, 23%, 69%)",
          lightGrayishBlue: "hsl(210, 46%, 95%)",
        
      },
    },
  },
  plugins: [],
};
export default config;
