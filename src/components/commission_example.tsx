"use client"

import { CldImage } from "next-cloudinary";

export const CommissionExample = () => {
    return (
        <div className="relative h-72 w-56">
            <CldImage
                fill priority className="object-cover sm:items-center lg:justify-self-center w-56 lg:w-72  max-sm:mb-4 border-4 border-[#D1C6AD]" alt={"Commission example"} src={"https://res.cloudinary.com/dsdaz0tnz/image/upload/v1733721839/Mimi_portrait_x2ibcs.jpg"}>
            </CldImage></div>
    );
}