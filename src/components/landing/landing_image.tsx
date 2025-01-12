/** @format */

"use client";

import { CldImage } from "next-cloudinary";

export function LandingImage() {
  return (
    <CldImage
      priority
      className="px-10 2xl:max-3xl:px-0 self-center md:max-lg:px-36 w-[20rem] md:w-[35rem] lg:w-[24rem] 2xl:w-[24rem] 3xl:mr-24"
      alt={"Self-portrait placeholder. To be replaced."}
      height={2364}
      width={2000}
      aspectRatio={0.846}
      src="https://res.cloudinary.com/dsdaz0tnz/image/upload/v1736656185/profile_pic_1_xkf3pu.jpg"
    />
  );
}
