/** @format */

"use client";

import { ToTopButton } from "@/components/to_top_button";
import useMasonry from "hooks/use_masonry";
import Head from "next/head";

export default function GalleryPage() {
  const masonryContainer = useMasonry();
  return (
    <>
      <Head>
        <title>Gallery - Ysabelle Kmiec</title>
        <meta name="description">View her original works</meta>
      </Head>

      <main className="flex flex-col items-center">
        <p className="text-3xl text-center">Scratchboard Gallery</p>
        <hr className="w-2/3 my-5" />
        <div
          ref={masonryContainer}
          className="w-[60%] grid grid-cols-2 grid-flow-row-dense gap-20 space-y-12 mb-24"
        >
          <div className="h-min w-full">
            <div className="bg-red-500 aspect-[5/7] w-full" />
            <div className="w-full h-26 bg-slate-500 p-4">
              <p className="text-bold text-lg">On The Railing</p>
              <p>5&#34; x 7&#34;</p>
              <p>2023</p>
            </div>
          </div>
          <div className="h-min w-full">
            <div className="bg-purple-500 aspect-[12/9] w-full" />
            <div className="w-full h-26 bg-slate-500 p-4">
              <p className="text-bold text-lg">On The Railing</p>
              <p>9&#34; x 12&#34;</p>
              <p>2023</p>
            </div>
          </div>
          <div className="h-min w-full">
            <div className="bg-yellow-500 aspect-[9/12] w-full" />
            <div className="w-full h-26 bg-slate-500 p-4">
              <p className="text-bold text-lg">On The Railing</p>
              <p>9&#34; x 12&#34;</p>
              <p>2023</p>
            </div>
          </div>
          <div className="h-min w-full">
            <div className="bg-green-500 aspect-[8/10] w-full" />
            <div className="w-full h-26 bg-slate-500 p-4">
              <p className="text-bold text-lg">On The Railing</p>
              <p>12&#34; x 14&#34;</p>
              <p>2023</p>
            </div>
          </div>
          <div className="h-min w-full">
            <div className="bg-blue-500 aspect-[14/11] w-full" />
            <div className="w-full h-26 bg-slate-500 p-4">
              <p className="text-bold text-lg">On The Railing</p>
              <p>12&#34; x 14&#34;</p>
              <p>2023</p>
            </div>
          </div>
        </div>
        <ToTopButton />
      </main>
    </>
  );
}
