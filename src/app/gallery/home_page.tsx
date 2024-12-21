/** @format */
"use client"
import { ToTopButton } from "@/components/to_top_button";
import { Artwork } from "@/components/gallery/artwork";
import { CloudinaryImage } from "utils/types";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Modal from "@/components/gallery/modal";
import { createGlobalState } from "react-hooks-global-state";

const initialState: { photoToScrollTo: number | null } = { photoToScrollTo: null };
export const { useGlobalState, setGlobalState } = createGlobalState(initialState);

export default function GalleryPage({ artworks }:
    { artworks: CloudinaryImage[] }) {

    const firstColumn = [];
    const secondColumn = [];
    let height1 = 0;
    let height2 = 0;
    firstColumn.push(artworks[0]);
    secondColumn.push(artworks[1]);
    height2 += +artworks[1].context.height_in;
    height1 += +artworks[0].context.height_in;


    for (let j = 2; j < artworks.length; j++) {

        if (height1 < height2) {
            firstColumn.push(artworks[j]);
            height1 += +artworks[j].context.height_in;
        } else {
            secondColumn.push(artworks[j]);
            height2 += +artworks[j].context.height_in;
        }
    }

    const searchParams = useSearchParams();
    const artworkId = Number(searchParams.get('artworkId'));
    const [lastViewedPhoto, setLastViewedPhoto] = useGlobalState("photoToScrollTo");

    const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
        if (lastViewedPhoto && artworkId == 0 && lastViewedPhotoRef.current) {
            lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
            setLastViewedPhoto(null);
        }
    }, [artworkId, lastViewedPhoto, setLastViewedPhoto]);


    return (
        <>
            <main className="flex flex-col items-center">
                {Boolean(artworkId != 0) && (
                    <Modal
                        artworks={artworks}
                        currentArtworkId={artworkId}
                    />
                )}
                <h1 className="text-3xl text-center mt-5">Scratchboard Gallery</h1>
                <hr className="w-2/3 my-5" />
                <div className="grid grid-cols-2 grid-rows-1 w-[65%] mb-24">
                    <div
                        className="flex flex-col space-y-20 items-center"
                    >
                        {firstColumn.map((resource: CloudinaryImage) => {
                            return (
                                <Artwork
                                    key={resource.public_id}
                                    lastViewedPhoto={Number(lastViewedPhoto)}
                                    lastViewedPhotoRef={lastViewedPhotoRef}
                                    resource={resource} />

                            );
                        })}

                    </div>
                    <div
                        className="flex flex-col space-y-20 items-center"
                    >
                        {secondColumn.map((resource: CloudinaryImage) => {
                            return (
                                <Artwork
                                    key={resource.public_id}
                                    lastViewedPhoto={Number(lastViewedPhoto)}
                                    lastViewedPhotoRef={lastViewedPhotoRef}
                                    resource={resource} />

                            );
                        })}

                    </div>
                </div>

                <ToTopButton />
            </main>
            <footer>
                <p className="w-full text-[0.9rem] text-center pb-8 pt-3">
                    Copyright Ysabelle Kmieć ©2024. All Rights Reserved.
                </p>
            </footer>
        </>
    );
}