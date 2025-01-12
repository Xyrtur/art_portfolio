/** @format */

"use client";
import { CldImage } from "next-cloudinary";

export function AboutArtistPicture() {
  return (
    <div className="z-0 rounded-full border-secondary-color border-1 p-5 mt-5 min-[800px]:mt-10 max-[800px]:mb-3">
      <div className="w-44 h-44 lg:w-56 lg:h-56 bg-slate-500 rounded-full overflow-hidden relative">
        <CldImage
          className="object-cover"
          fill
          priority
          alt={"Headshot picture of Ysabelle Kmieć, looking to the side with head turned."}
          src={
            "https://res.cloudinary.com/dsdaz0tnz/image/upload/v1736658954/profile_pic_circle_npszub.jpg"
          }
        ></CldImage>
      </div>
    </div>
  );
}

export function ContactPicture() {
  return (
    <div className="z-0 rounded-full border-secondary-color border-1 p-5 mt-5 min-[800px]:mt-10 max-[800px]:mb-3">
      <div className="w-44 h-44 lg:w-56 lg:h-56 bg-slate-500 rounded-full overflow-hidden relative">
        <CldImage
          className="object-cover"
          fill
          priority
          alt={"Headshot picture of Ysabelle Kmieć, looking to the side with head turned."}
          src={
            "https://res.cloudinary.com/dsdaz0tnz/image/upload/v1736656185/profile_pic_1_xkf3pu.jpg"
          }
        ></CldImage>
      </div>
    </div>
  );
}