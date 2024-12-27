/** @format */

"use client";

import { CldImage } from "next-cloudinary";
import { CloudinaryImage } from "../../utils/types";
import { LegacyRef, RefObject } from "react";

export function Artwork({
  resource,
  lastViewedPhoto,
  lastViewedPhotoRef,
  tabIndex
}: {
  resource: CloudinaryImage;
  lastViewedPhoto: number;
  lastViewedPhotoRef: LegacyRef<HTMLButtonElement> | RefObject<HTMLAnchorElement>;
  tabIndex: number;
}) {
  return (
    <button
      key={resource.context.order}
      tabIndex={tabIndex}
      ref={
        Number(resource.context.order) === Number(lastViewedPhoto)
          ? (lastViewedPhotoRef as LegacyRef<HTMLButtonElement>)
          : null
      }
      className={`cursor-zoom-in h-min ${resource.width > resource.height ? "w-[90%]" : "w-[70%]"
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
        priority

        src={resource.secure_url}
        alt={resource.context.alt}
        placeholder="blur"
        blurDataURL={resource.blurDataUrl}
      />
      <div className="grid grid-cols-3 grid-rows-2 w-full h-14 md:h-16 xl:h-20 bg-black pt-2 xl:pt-3 px-4 grid-flow-col">
        <p className="text-base lg:text-lg justify-self-start col-span-2">
          {resource.context.caption}
        </p>
        <p className="text-sm justify-self-start col-span-2">
          {resource.context.alt}
        </p>
        <div
          className={`justify-self-end self-center row-span-2 rounded-full bg-red-500 h-6 w-6 ${resource.context.isSold == "true" ? "visible" : "collapse"
            }`}
        />
      </div>
    </button>
  );
}
