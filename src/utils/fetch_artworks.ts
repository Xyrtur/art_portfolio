/** @format */

import getBase64ImageUrl from "./generate_blur_placeholders";
import { CloudinaryImage } from "../../utils/types";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export async function fetchArtworks() {
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
