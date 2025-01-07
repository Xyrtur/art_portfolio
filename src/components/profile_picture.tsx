/** @format */

"use client";
import { CldImage } from "next-cloudinary";

export function ProfilePicture() {
  return (
    <div className="rounded-full border-secondary-color border-1 p-5 mt-5 min-[800px]:mt-10 max-[800px]:mb-3">
      <div className="w-44 h-44 lg:w-56 lg:h-56 bg-slate-500 rounded-full overflow-hidden relative">
        <CldImage
          className="object-cover"
          fill
          alt={"Headshot picture of Ysabelle Kmieć, looking to the side with head turned."}
          src={
            "https://res.cloudinary.com/dsdaz0tnz/image/upload/v1733721839/Mimi_portrait_x2ibcs.jpg"
          }
        ></CldImage>
      </div>
    </div>
  );
}
