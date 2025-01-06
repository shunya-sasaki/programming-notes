import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#82a0aa",
        secondary: "#b4c6cc",
        tertiary: "#3c5d69",
        "primary-gray": {
          20: "#e6ecee",
          40: "#cdd9dd",
          60: "#b4c6cc",
          80: "#9bb3bb",
          100: "#82a0aa",
        },
        accent: {
          20: "#d4e2ef",
          40: "#aac6e0",
          60: "#7faad1",
          80: "#558ec2",
          100: "#2b72b3",
        },
        "dark-yellow": {
          20: "#f8e1d0",
          40: "#f1c3a1",
          60: "#eaa572",
          80: "#e38743",
          100: "#dc6914",
        },
        "light-yellow": {
          20: "#fff1cc",
          40: "#ffe399",
          60: "#ffd566",
          80: "#ffc732",
          100: "#ffb900",
        },
        "dark-blue": {
          20: "#cce0e7",
          40: "#99c1cf",
          60: "#66a2b7",
          80: "#32839f",
          100: "#006487",
        },
        "middle-blue": {
          20: "#d4e2ef",
          40: "#aac6e0",
          60: "#7faad1",
          80: "#558ec2",
          100: "#2b72b3",
        },
        "light-blue": {
          20: "#e0eff6",
          40: "#c1dfed",
          60: "#a2cfe4",
          80: "#83bfdb",
          100: "#64afd2",
        },
        "dark-green": {
          20: "#e0e5d5",
          40: "#c1cbab",
          60: "#a2b181",
          80: "#839757",
          100: "#647d2d",
        },
        "light-green": {
          20: "#e9efd2",
          40: "#d3dfa5",
          60: "#bdcf78",
          80: "#a7bf4b",
          100: "#91af1e",
        },
        "dark-purple": {
          20: "#e2d2db",
          40: "#c5a5b7",
          60: "#a87893",
          80: "#8b4b6f",
          100: "#6e1e4b",
        },
        "light-purple": {
          20: "#efd3df",
          40: "#dfa7bf",
          60: "#cf7b9f",
          80: "#bf4f7f",
          100: "#af235f",
        },
        "dark-blue-gray1": {
          20: "#dde3e6",
          40: "#bbc8cd",
          60: "#99adb4",
          80: "#77929b",
          100: "#567783",
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
