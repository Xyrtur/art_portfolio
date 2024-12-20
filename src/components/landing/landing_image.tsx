"use client"

import { CldImage } from "next-cloudinary";

export function LandingImage() {
    return (<CldImage className="bg-gray-500 w-[53%] self-center" alt={"meow"} height={600} width={800} aspectRatio={1.333} src="https://res.cloudinary.com/dsdaz0tnz/image/upload/v1734683777/IMG_2649_whqhsv.jpg" />);
}