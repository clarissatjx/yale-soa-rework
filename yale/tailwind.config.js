/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    './src/**/*.{html,ts}',
    './REPLACE_WITH_PATH_TO_YOUR_COMPONENTS_DIRECTORY/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        condensed: ['"New Icon Serif Condensed"', 'serif'],
        serif: ['"New Icon Serif"', 'serif'],
        script: ['"New Icon Script"', 'serif'],
        jacques: ['"Jacques"', 'serif']
      },
      colors: {
        'custom-black': '#303030',
        'custom-white': '#FAFAFA',  
      },
    },
  },
  plugins: [],
};
