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
        'blue-500': 'hsl(220, 98%, 61%)',
        'gray-50': 'hsl(0, 0%, 98%)',
        'purple-300': 'hsl(234, 39%, 85%)',
        'gray-300': 'hsl(233, 11%, 84%)',
        'gray-600': 'hsl(236, 9%, 61%)',
        'navy-850': 'hsl(235, 19%, 35%)',
        'navy-950': 'hsl(235, 21%, 11%)',
        'navy-900': 'hsl(235, 24%, 19%)',
        'purple-100': 'hsl(236, 33%, 92%)',
        'purple-600': 'hsl(235, 16%, 43%)',
        'purple-700': 'hsl(233, 14%, 35%)',
        'purple-800': 'hsl(237, 14%, 26%)',
      },
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
      maxWidth: {
        'mobile': '375px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
};
export default config;