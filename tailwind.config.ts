import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography'; // 👈 esto debería funcionar

const config: Config = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx,md}',
  ],
  theme: {
    extend: {},
  },
  plugins: [typography], 
};

export default config;
