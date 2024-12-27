/** @format */
"use client";
import { ToTopButton } from "@/components/to_top_button";
import { Artwork } from "@/components/gallery/artwork";
import { CloudinaryImage } from "utils/types";
import { useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Modal from "@/components/gallery/modal";
import { createGlobalState } from "react-hooks-global-state";

const initialState: { photoToScrollTo: number | null } = {
  photoToScrollTo: null,
};
export const { useGlobalState, setGlobalState } =
  createGlobalState(initialState);

function SuspenseItAll({ artworks }: { artworks: CloudinaryImage[] }) {
  const firstColTabIndices: number[] = [];
  const secondColTabIndices: number[] = [];
  const firstColumn = [];
  const secondColumn = [];
  let height1 = 0;
  let height2 = 0;
  firstColumn.push(artworks[0]);
  secondColumn.push(artworks[1]);
  height2 += +artworks[1].context.height_in;
  height1 += +artworks[0].context.height_in;
  firstColTabIndices.push(1);
  secondColTabIndices.push(2);


  for (let j = 2; j < artworks.length; j++) {
    if (height1 < height2) {
      firstColumn.push(artworks[j]);
      height1 += +artworks[j].context.height_in;
      firstColTabIndices.push(j + 1);
    } else {
      secondColumn.push(artworks[j]);
      height2 += +artworks[j].context.height_in;
      secondColTabIndices.push(j + 1);
    }
  }

  const searchParams = useSearchParams();
  const artworkId = Number(searchParams.get("artworkId"));
  const [lastViewedPhoto, setLastViewedPhoto] =
    useGlobalState("photoToScrollTo");

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && artworkId == 0 && lastViewedPhotoRef.current) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [artworkId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <main className="flex flex-col items-center">
      {Boolean(artworkId != 0) && (
        <Modal artworks={artworks} currentArtworkId={artworkId} />
      )}
      <h1 className="text-xl sm:text-2xl xl:text-3xl text-center mt-5">
        Scratchboard Gallery
      </h1>
      <hr className="w-2/3 my-3 sm:my-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 w-[90%] lg:w-[80%] xl:w-[65%] mb-24">
        <div className="flex flex-col space-y-20 items-center">
          {firstColumn.map((resource: CloudinaryImage, index: number) => {
            return (
              <Artwork
                key={resource.public_id}
                lastViewedPhoto={Number(lastViewedPhoto)}
                lastViewedPhotoRef={lastViewedPhotoRef}
                resource={resource}
                tabIndex={firstColTabIndices[index]}
              />
            );
          })}
        </div>
        <div className="flex flex-col max-md:mt-20 space-y-20 items-center">
          {secondColumn.map((resource: CloudinaryImage, index: number) => {
            return (
              <Artwork
                key={resource.public_id}
                lastViewedPhoto={Number(lastViewedPhoto)}
                lastViewedPhotoRef={lastViewedPhotoRef}
                resource={resource}
                tabIndex={secondColTabIndices[index]}
              />
            );
          })}
        </div>
      </div>

      <ToTopButton />
    </main>
  );
}

export default function GalleryPage({
  artworks,
}: {
  artworks: CloudinaryImage[];
}) {
  return (
    <>
      <Suspense>
        <SuspenseItAll artworks={artworks} />
      </Suspense>
      <footer>
        <p className="w-full text-xs lg:text-[0.9rem] text-center pb-8 pt-3">
          Copyright Ysabelle Kmieć ©2024. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
