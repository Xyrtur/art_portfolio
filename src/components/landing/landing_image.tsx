/** @format */

"use client";

import { CldImage } from "next-cloudinary";

export function LandingImage() {
  return (
    <CldImage
      className="px-10 2xl:max-[1800px]:px-0 self-center md:max-lg:px-36"
      alt={"meow"}
      height={800}
      width={1000}
      aspectRatio={1.333}
      src="https://res.cloudinary.com/dsdaz0tnz/image/upload/v1734683777/IMG_2649_whqhsv.jpg"
    />
  );
}
