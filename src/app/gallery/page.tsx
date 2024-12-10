/** @format */

import { ToTopButton } from "@/components/to_top_button";
import { v2 as cloudinary } from 'cloudinary';
import { Metadata } from "next";
import { Artwork } from "@/components/gallery/artwork";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const metadata: Metadata = {
  title: 'Gallery - Ysabelle Kmiec',
  description: 'View her original works'
}

interface Context {
  alt: string;
  caption: string;
  isSold: string;
  height_in: string;
}
interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  aspect_ratio: number;
  context: Context;
}

export default async function GalleryPage() {

  const { resources }: { resources: CloudinaryResource[] } =
    await cloudinary.search.expression("tags=artwork").with_field("context").sort_by("display_name", "desc").execute();

  var firstColumn = [];
  var secondColumn = [];
  var height1 = 0;
  var height2 = 0;
  firstColumn.push(resources[0]);
  secondColumn.push(resources[1]);
  height2 += +resources[1].context.height_in;
  height1 += +resources[0].context.height_in;


  for (var j = 2; j < resources.length; j++) {

    if (height1 < height2) {
      firstColumn.push(resources[j]);
      height1 += +resources[j].context.height_in;
    } else {
      secondColumn.push(resources[j]);
      height2 += +resources[j].context.height_in;
    }
  }

  return (
    <>
      <main className="flex flex-col items-center">
        <p className="text-3xl text-center">Scratchboard Gallery</p>
        <hr className="w-2/3 my-5" />
        <div className="grid grid-cols-2 grid-rows-1 w-[65%] mb-24">
          <div
            className="flex flex-col space-y-20 items-center"
          >
            {firstColumn.map((product: CloudinaryResource) => {
              return (
                <Artwork
                  key={product.public_id}
                  isSold={product.context.isSold == "true"}
                  src={product.secure_url}
                  width={product.width}
                  height={product.height}
                  aspectRatio={product.aspect_ratio}
                  alt={"art"}
                  title={product.context.caption}
                  subtext={product.context.alt} />

              );
            })}

          </div>
          <div
            className="flex flex-col space-y-20 items-center"
          >
            {secondColumn.map((product: CloudinaryResource) => {
              return (
                <Artwork
                  key={product.public_id}
                  isSold={product.context.isSold == "true"}
                  src={product.secure_url}
                  width={product.width}
                  height={product.height}
                  aspectRatio={product.aspect_ratio}
                  alt={"art"}
                  title={product.context.caption}
                  subtext={product.context.alt} />

              );
            })}

          </div>
        </div>

        <ToTopButton />
      </main>
    </>
  );
}
