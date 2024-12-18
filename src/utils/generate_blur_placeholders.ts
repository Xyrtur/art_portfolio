/** @format */

import { getPlaiceholder } from "plaiceholder";
import { CloudinaryImage } from "../../utils/types";

const cache = new Map<CloudinaryImage, string>();

export default async function getBase64ImageUrl(image: CloudinaryImage) {
  const url = cache.get(image);
  if (url) {
    return url;
  }
  const buffer = await fetch(image.secure_url).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const { base64 } = await getPlaiceholder(buffer);

  return base64;
}
