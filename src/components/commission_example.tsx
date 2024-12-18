"use client"

import { CldImage } from "next-cloudinary";

export const CommissionExample = () => {
    return (
        <CldImage className="justify-self-end" alt={"Commission example"} width={393} height={500} aspectRatio={0.786} src={"https://res.cloudinary.com/dsdaz0tnz/image/upload/v1733721839/Mimi_portrait_x2ibcs.jpg"}>
        </CldImage>
    );
}