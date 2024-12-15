/** @format */

"use client";

import { Dialog } from "@headlessui/react";
import useKeypress from "react-use-keypress";
import { useSearchParams } from "next/navigation";
import { CloudinaryResource } from "./types";
import { setGlobalState } from "app/gallery/home-page";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { variants } from "./animationVariants";
import { CldImage } from "next-cloudinary";

export default function Modal({
  artworks,
  currentArtworkId,
}: {
  artworks: CloudinaryResource[];
  currentArtworkId?: number;
}) {
  const searchParams = useSearchParams();
  const artworkId = searchParams.get("artworkId");
  const index = currentArtworkId ? currentArtworkId : Number(artworkId);

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
    if (index + 1 < artworks.length + 1) {
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

  const [loaded, setLoaded] = useState(false);

  const handlers = useSwipeable({
    onSwipedRight: () => {
      if (index < artworks.length) {
        changeArtworkId(index + 1);
      }
    },
    onSwipedLeft: () => {
      if (index > 1) {
        changeArtworkId(index - 1);
      }
    },
    trackMouse: true,
  });

  // The order stored in cloudinary starts from oldest (0) to newest,
  // which is opposite of how the artwworks are shown on the site (newest to oldest)
  const reversedArtworks = [...artworks].reverse();
  const currentPhoto = reversedArtworks[index - 1];
  const leftPhoto =
    index + 1 < artworks.length + 1 ? reversedArtworks[index] : null;
  const rightPhoto = index > 1 ? reversedArtworks[index - 2] : null;
  const aspectClass = `aspect-[${currentPhoto.aspect_ratio}/1]`;

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
        className="fixed inset-0 bg-black/20 backdrop-filter backdrop-blur-md"
      />

      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60 h-36" />
        <div className="relative z-50 flex w-full" {...handlers}>
          <div className="fixed inset-0 w-full" onClick={() => handleClose()} />

          {/* Main image */}
          <div className="fixed inset-0 flex z-60 h-screen w-screen p-8 justify-center pointer-events-none">
            <div
              className={`relative h-full ${aspectClass} pointer-events-auto`}
            >
              <ul className="absolute right-0 translate-x-full text-xl p-5">
                <li>{currentPhoto.context.caption}</li>
                <li>{currentPhoto.context.alt}</li>
              </ul>

              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute"
                >
                  <CldImage
                    src={currentPhoto.secure_url}
                    width={currentPhoto.width}
                    height={currentPhoto.height}
                    aspectRatio={currentPhoto.aspect_ratio}
                    priority
                    alt={currentPhoto.context.alt}
                    placeholder="blur"
                    blurDataURL={currentPhoto.blurDataUrl}
                    onLoad={() => setLoaded(true)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="fixed inset-0 flex w-screen pointer-events-none">
            {/* Buttons */}
            {loaded && (
              <div className="relative aspect-[3/2] max-h-full w-full">
                {leftPhoto && (
                  <div
                    onClick={() => changeArtworkId(index + 1)}
                    className={`absolute bottom-10 left-10 flex flex-row items-center justify-start self-end space-x-5 pointer-events-auto cursor-pointer`}
                  >
                    <button
                      className="rounded-full bg-white/80 p-3 text-black/75 backdrop-blur-lg transition hover:bg-white hover:text-black focus:outline-none"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <div
                      className={`${
                        leftPhoto.width > leftPhoto.height ? "w-40" : "w-24"
                      }`}
                    >
                      <CldImage
                        src={leftPhoto.secure_url}
                        width={leftPhoto.width / 10}
                        height={leftPhoto.height / 10}
                        aspectRatio={leftPhoto.aspect_ratio}
                        priority
                        alt={leftPhoto.context.alt}
                        placeholder="blur"
                        blurDataURL={leftPhoto.blurDataUrl}
                        onLoad={() => setLoaded(true)}
                      />
                    </div>
                    <p className="">{leftPhoto.context.caption}</p>
                  </div>
                )}
                {rightPhoto && (
                  <div
                    className={`absolute bottom-10 right-10 flex flex-row items-center space-x-5 pointer-events-auto cursor-pointer`}
                    onClick={() => changeArtworkId(index - 1)}
                  >
                    <p className="text-end">{rightPhoto.context.caption}</p>
                    <div
                      className={`${
                        rightPhoto.width > rightPhoto.height ? "w-40" : "w-24"
                      }`}
                    >
                      <CldImage
                        src={rightPhoto.secure_url}
                        width={rightPhoto.width / 10}
                        height={rightPhoto.height / 10}
                        aspectRatio={rightPhoto.aspect_ratio}
                        priority
                        alt={rightPhoto.context.alt}
                        placeholder="blur"
                        blurDataURL={rightPhoto.blurDataUrl}
                        onLoad={() => setLoaded(true)}
                      />
                    </div>
                    <button
                      className="rounded-full bg-white/80 p-3 text-black/75 backdrop-blur-lg transition hover:bg-white hover:text-black focus:outline-none"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </button>
                  </div>
                )}
                <div className="absolute top-8 left-8 flex items-center gap-2 text-white">
                  <button
                    onClick={() => handleClose()}
                    className="rounded-full bg-white/80 p-2 text-black/75 backdrop-blur-lg transition hover:bg-white hover:text-black pointer-events-auto"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </MotionConfig>
    </Dialog>
  );
}
