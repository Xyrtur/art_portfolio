/** @format */

import { CloudinaryImage } from "utils/types";
import GalleryPage from "./home_page";

import { v2 as cloudinary } from "cloudinary";
import { Metadata } from "next";
import getBase64ImageUrl from "utils/generate_blur_placeholders";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
async function fetchArtworks() {
  const { resources }: { resources: CloudinaryImage[] } =
    await cloudinary.search
      .expression("tags=artwork")
      .with_field("context")
      .sort_by("display_name", "desc")
      .execute();

  const blurImagePromises = resources.map((image: CloudinaryImage) => {
    return getBase64ImageUrl(image);
  });
  const blurDataURLs = await Promise.all(blurImagePromises);

  for (let i = 0; i < resources.length; i++) {
    resources[i].blurDataUrl = blurDataURLs[i];
  }

  return resources;
}

export const metadata: Metadata = {
  title: "Gallery - Ysabelle Kmiec",
  description: "View her original works",
};

export default async function Page() {
  const artworks = await fetchArtworks();
  return <GalleryPage artworks={artworks} />;
}
