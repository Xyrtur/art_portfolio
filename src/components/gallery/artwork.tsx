/** @format */

"use client";

import { CldImage } from "next-cloudinary";
import { CloudinaryResource } from "./types";

export function Artwork({
  resource,
  lastViewedPhoto,
  lastViewedPhotoRef,
}: {
  resource: CloudinaryResource;
  lastViewedPhoto: number;
  lastViewedPhotoRef: any;
}) {
  return (
    <div
      key={resource.order}
      ref={
        Number(resource.context.order) === Number(lastViewedPhoto)
          ? lastViewedPhotoRef
          : null
      }
      className={`cursor-zoom-in h-min ${
        resource.width > resource.height ? "w-[90%]" : "w-[70%]"
      }`}
      onClick={() => {
        window.history.pushState(
          null,
          "",
          `/gallery/?artworkId=${resource.context.order}`
        );
      }}
    >
      <CldImage
        aspectRatio={resource.aspect_ratio}
        width={resource.width / 3}
        height={resource.height / 3}
        src={resource.secure_url}
        alt={resource.context.alt}
        placeholder="blur"
        blurDataURL={resource.blurDataUrl}
      />
      <div className="grid grid-cols-2 grid-rows-2 w-full h-20 bg-[#151517] pt-3 px-4 grid-flow-col">
        <p className="text-lg justify-self-start">{resource.context.caption}</p>
        <p className=" text-sm justify-self-start">{resource.context.alt}</p>
        <div
          className={`justify-self-end self-center row-span-2 rounded-full bg-red-500 h-6 w-6 ${
            resource.context.isSold == "true" ? "visible" : "collapse"
          }`}
        />
      </div>
    </div>
  );
}
