"use client"

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import useKeypress from "react-use-keypress";
import SharedModal from "./anothermodal";
import { useSearchParams } from 'next/navigation';
import { motion } from "framer-motion";
import { CloudinaryResource } from "./types";
import { setGlobalState } from "app/gallery/home-page";

export default function Modal({
    artworks,
    currentArtworkId,

}: {
    artworks: CloudinaryResource[];
    currentArtworkId?: number;

}) {
    const searchParams = useSearchParams();
    const artworkId = searchParams.get('artworkId');
    let index = currentArtworkId ? currentArtworkId : Number(artworkId);

    const [direction, setDirection] = useState(0);
    const [curIndex, setCurIndex] = useState(index);

    function handleClose() {
        window.history.pushState(null, "", `/gallery`);
        setGlobalState("photoToScrollTo", index);
    }

    function changeArtworkId(newVal: number) {
        if (newVal < curIndex) {
            setDirection(1);
        } else {
            setDirection(-1);
        }
        setCurIndex(newVal);
        window.history.pushState(null, "", `/gallery/?artworkId=${newVal}`);

    }

    useKeypress("ArrowLeft", () => {
        if (index + 1 < artworks.length) {
            changeArtworkId(index + 1);
        }
    });


    useKeypress("ArrowRight", () => {
        if (index > 1) {
            changeArtworkId(index - 1);
        }
    });
    useKeypress("Escape", () => {
        setGlobalState("photoToScrollTo", index);
    });

    return (

        <Dialog
            open={true}
            onClose={handleClose}
            className="fixed inset-0 z-30 flex items-center justify-center"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 backdrop-filter backdrop-blur-sm" />

            <SharedModal
                artworks={artworks}
                index={curIndex}
                direction={direction}
                changeArtworkId={changeArtworkId}
                closeModal={handleClose}
            />

        </Dialog>
    );
}
