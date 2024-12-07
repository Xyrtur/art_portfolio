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
  },
};
export const darkMode = "class";
export const plugins = [nextui()];
