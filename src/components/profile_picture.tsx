"use client"
import { CldImage } from "next-cloudinary";

export function ProfilePicture() {
    return (
        <div className="rounded-full border-secondary-color border-1 p-5 mt-10">
            <div className="w-64 h-64 bg-slate-500 rounded-full overflow-hidden">
                <CldImage alt={"Profile picture"} width={393} height={500} aspectRatio={0.786} src={"https://res.cloudinary.com/dsdaz0tnz/image/upload/v1733721839/Mimi_portrait_x2ibcs.jpg"}>
                </CldImage>
            </div>
        </div>
    );
}