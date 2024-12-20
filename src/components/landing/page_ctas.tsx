"use client"
/** @format */

import { CldImage } from "next-cloudinary";
import Link from "next/link";

export function GenericCTA({
  title,
  description,
  link,
  isGalleryCTA,
}: {
  title: string;
  description: string | undefined;
  link: string;
  isGalleryCTA: boolean;
}) {
  return (
    <Link
      href={link}
      className={`group flex flex-col ml-[8%] ${isGalleryCTA
        ? "mb-16 mt-20"
        : "border-1 border-white p-8 w-1/2 my-16 ml-[11rem] hover:border-secondary-color"
        } `}
    >
      <div
        className={`flex flex-row space-x-8 items-center ${isGalleryCTA ? "visible" : "collapse"
          }`}
      ><div className="w-1/4">
          <CldImage
            aspectRatio={1.27226}
            width={2000 / 5}
            height={1572 / 5}
            src="https://res.cloudinary.com/dsdaz0tnz/image/upload/v1733721840/Waterfall_z9p6oq.jpg"
            alt="14&#34; x 11&#34;, 2024"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMICwsrLi6+fuOGhaUlg7yCwvr1a1+8esHAwMAgJy934OC+/MJ8FTU1ADZxDwqQLp/1AAAAAElFTkSuQmCC"

          /></div><div className="w-1/4">
          <CldImage
            className=""
            aspectRatio={1}
            width={2048 / 5}
            height={2048 / 5}
            src="https://res.cloudinary.com/dsdaz0tnz/image/upload/v1733721841/Polly_rqo6qd.jpg"
            alt="12&#34; x 12&#34;, 2024"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AAcHBCgoJ2pqaRQUEAAyMi+Li4r6+vo7OzoAe3t7iIiIlZWVhYWFAGRkY5ycnJOTk+7v77hAFauJXt7bAAAAAElFTkSuQmCC"

          /></div><div className="">
          <CldImage
            aspectRatio={0.75}
            width={1536 / 5}
            height={2048 / 5}
            src="https://res.cloudinary.com/dsdaz0tnz/image/upload/v1733721842/Turtle_oxyzxw.jpg"
            alt="9&#34; x 12&#34;, 2024"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nAXBQQEAAAQEwQugiBYXQxXP/aopCDPaXaC7NTN3Bygiqsq2ANuZ+YyjEGCUTs4kAAAAAElFTkSuQmCC"

          /></div><div className="w-1/4 ">
          <CldImage
            aspectRatio={1}
            width={2048 / 5}
            height={2048 / 5}
            src="https://res.cloudinary.com/dsdaz0tnz/image/upload/v1733721840/Vinny_ubybay.jpg"
            alt="8&#34; x 8&#34;, 2024"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AKCgoJSUlFBQUAEBAQBfX1/Ly8v6+vpFRUUAjo6Or6+v7u7ueXl5AFNTUyQkJGpqaufn53kHGQ9zZ7QhAAAAAElFTkSuQmCC"

          /></div>
      </div>
      <div className="flex flex-row items-center">
        <p
          className={`text-2xl group-hover:text-secondary-color ${isGalleryCTA ? "pl-20" : ""
            }`}
        >
          {title}
        </p>
        <svg
          className="h-6 w-10 text-white transition ease-in-out duration-300 group-hover:translate-x-2"
          width="30"
          height="24"
          viewBox="0 0 30 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <line x1="5" y1="12" x2="25" y2="12" />{" "}
          <line x1="21" y1="16" x2="25" y2="12" />{" "}
          <line x1="21" y1="8" x2="25" y2="12" />
        </svg>
      </div>
      <p
        className={`${isGalleryCTA ? "pl-28" : "pl-8"} pt-3 ${description == undefined ? "collapse" : ""
          }`}
      >
        {description}
      </p>
    </Link>
  );
}
