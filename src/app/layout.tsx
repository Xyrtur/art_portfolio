/** @format */

import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Providers } from "./providers";
import Header from "@/components/header";

const latinModernMono = localFont({
  src: "../../public/fonts/lmmono10-regular.otf",
  variable: "--font-lmmono",
});
const kolkerBrush = localFont({
  src: "../../public/fonts/KolkerBrush-Regular.ttf",
  variable: "--font-kolker-brush",
});

export const metadata: Metadata = {
  title: "Scratchboard Art Portfolio | Ysabelle Kmieć",
  description: "Website created by Ysabelle Kmieć to showcase her original works.",
  alternates: {
    canonical: "./",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kolkerBrush.variable} ${latinModernMono.variable} font-lmmono bg-[radial-gradient(100.40%_40.55%_at_180.76%_-20.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.10)_400%)] flex flex-col min-h-lvh`}
      >
        <Providers>
          {" "}
          <section>
            <nav>
              <Header />
            </nav>
            {children}
          </section>
        </Providers>
      </body>
    </html>
  );
}
