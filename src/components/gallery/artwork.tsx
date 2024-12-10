"use client";

import { CldImage } from "next-cloudinary";

export function Artwork({ isSold, src, width, height, aspectRatio, alt, title, subtext }:
    {
        isSold: boolean;
        src: string;
        width: number;
        height: number;
        aspectRatio: number;
        alt: string;
        title: string,
        subtext: string
    }) {



    return (
        <div className={`h-min ${width > height ? "w-[90%]" : "w-[70%]"}`}>
            <CldImage
                aspectRatio={aspectRatio}
                width={width}
                height={height}
                src={src}
                alt={alt}

            />
            <div className="grid grid-cols-2 grid-rows-2 w-full h-20 bg-[#121212] pt-3 px-4 grid-flow-col">
                <p className="text-lg ">{title}</p>
                <p className=" text-sm">{subtext}</p>
                <div className={`justify-self-end self-center row-span-2 rounded-full bg-red-500 h-6 w-6 ${isSold ? "visible" : "collapse"}`} />

            </div>
        </div>);
}


