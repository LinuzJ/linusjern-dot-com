import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-bg': '#ffffff',
        'yellow-bg': '#fee7cc',
        'title-big': '#666666',
        'link-color': '#0645AD',
        'text-color': '#373737',
      },
    },
  },
  plugins: [],
};
export default config;
