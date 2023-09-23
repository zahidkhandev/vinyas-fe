import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        offWhite: "#eee",
      },
      padding: {
        c5: "5px",
        c10: "10px",
        c20: "20px",
        c30: "30px",
        c40: "40px",
      },
      margin: {
        c5: "5px",
        c10: "10px",
        c20: "20px",
        c30: "30px",
        c40: "40px",
      },
      maxWidth: {
        "1400": "1400px",
      },
    },
  },
  plugins: [],
};
export default config;
