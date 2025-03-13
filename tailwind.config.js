/**
 * @format
 * @type {import('tailwindcss').Config}
 */

import { nextui } from "@nextui-org/react";

export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];

export const safelist = ['aspect-[1/1]', 'aspect-[0.786/1]', 'aspect-[1.33333/1]', 'aspect-[0.75/1]', 'aspect-[1.27226/1]'];

export const theme = {

  extend: {
    fontFamily: {
      kolker_brush: ["var(--font-kolker-brush)"],
      lmmono: ["var(--font-lmmono)"],
    },
    colors: {
      "link-color": "#E8D2B4",
      "secondary-color": "#FAB3A9",
      "primary-gray": "#252527",
      "accent-gray": "#3F3F44",
      "accent-gray-border": "#2E333C",
      "banner-color": "#EAC435",
    }
  },
};
export const darkMode = "class";
export const plugins = [nextui()];
