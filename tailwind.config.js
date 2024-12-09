/**
 * @format
 * @type {import('tailwindcss').Config}
 */

import { nextui } from "@nextui-org/react";

export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      kolker_brush: ["var(--font-kolker-brush)"],
      lmmono: ["var(--font-lmmono)"],
    },
    colors: {
      "link-color": "#F4F7BE",
      "secondary-color": "#FAB3A9",
      "primary-gray": "#252527",
      "banner-color": "#EAC435",
    },
  },
};
export const darkMode = "class";
export const plugins = [nextui()];
