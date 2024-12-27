/** @format */

"use client";
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
      className={`group flex flex-col mx-[8%] ${isGalleryCTA
        ? "mb-8 2xl:mb-16 mt-8 md:mt-20"
        : "border-1 border-white p-8 max-[520px]:w-5/6 w-3/4 lg:w-2/3 2xl:w-1/2 my-8 2xl:my-16 min-[520px]:mx-20  xl:ml-44 hover:border-secondary-color"
        } `}
    >
      {isGalleryCTA && (
        <div className="grid grid-rows-2 grid-cols-2 sm:flex sm:flex-row gap-x-8 items-center">
          <div className="sm:w-1/4">
            <CldImage
              width={2000 / 5}
              height={1572 / 5}
              src="https://res.cloudinary.com/dsdaz0tnz/image/upload/v1733721840/Waterfall_z9p6oq.jpg"
              alt="Waterfall landscape, 14&#34; x 11&#34;, 2024"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMICwsrLi6+fuOGhaUlg7yCwvr1a1+8esHAwMAgJy934OC+/MJ8FTU1ADZxDwqQLp/1AAAAAElFTkSuQmCC"
            />
          </div>
          <div className="sm:w-1/4">
            <CldImage
              className=""
              aspectRatio={1}
              width={2048 / 5}
              height={2048 / 5}
              src="https://res.cloudinary.com/dsdaz0tnz/image/upload/v1733721841/Polly_rqo6qd.jpg"
              alt="Polly the cat, 12&#34; x 12&#34;, 2024"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AAcHBCgoJ2pqaRQUEAAyMi+Li4r6+vo7OzoAe3t7iIiIlZWVhYWFAGRkY5ycnJOTk+7v77hAFauJXt7bAAAAAElFTkSuQmCC"
            />
          </div>
          <div className="sm:w-1/4">
            <CldImage
              aspectRatio={0.75}
              width={1536 / 5}
              height={2048 / 5}
              src="https://res.cloudinary.com/dsdaz0tnz/image/upload/v1733721842/Turtle_oxyzxw.jpg"
              alt="Turtle, 9&#34; x 12&#34;, 2024"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nAXBQQEAAAQEwQugiBYXQxXP/aopCDPaXaC7NTN3Bygiqsq2ANuZ+YyjEGCUTs4kAAAAAElFTkSuQmCC"
            />
          </div>
          <div className="sm:w-1/4">
            <CldImage
              aspectRatio={1}
              width={2048 / 5}
              height={2048 / 5}
              src="https://res.cloudinary.com/dsdaz0tnz/image/upload/v1733721840/Vinny_ubybay.jpg"
              alt="Vinny the cat, 8&#34; x 8&#34;, 2024"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AKCgoJSUlFBQUAEBAQBfX1/Ly8v6+vpFRUUAjo6Or6+v7u7ueXl5AFNTUyQkJGpqaufn53kHGQ9zZ7QhAAAAAElFTkSuQmCC"
            />
          </div>
        </div>
      )}
      <div className="flex flex-row items-center">
        <p
          className={`text-2xl group-hover:text-secondary-color ${isGalleryCTA ? "max-lg:pt-5 pl-10 sm:pl-20" : ""
            }`}
        >
          {title}
        </p>
        <svg
          className={`h-6 w-10 ${isGalleryCTA ? "max-lg:mt-5" : ""
            } text-white transition ease-in-out duration-300 group-hover:translate-x-2`}
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
        className={`${isGalleryCTA ? "pl-16 sm:pl-28" : "pl-8"} pt-3 ${description == undefined ? "hidden" : ""
          }`}
      >
        {description}
      </p>
    </Link>
  );
}
