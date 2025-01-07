/** @format */

"use client";

import { Dialog } from "@headlessui/react";
import useKeypress from "react-use-keypress";
import { useSearchParams } from "next/navigation";
import { CloudinaryImage } from "../../utils/types";
import { setGlobalState } from "app/gallery/home_page";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState } from "react";
import { variants } from "./animations";
import { CldImage } from "next-cloudinary";

export default function Modal({
  artworks,
  currentArtworkId,
}: {
  artworks: CloudinaryImage[];
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

  // The order stored in cloudinary starts from oldest (0) to newest,
  // which is opposite of how the artwworks are shown on the site (newest to oldest)
  const reversedArtworks = [...artworks].reverse();
  const currentPhoto = reversedArtworks[index - 1];
  const leftPhoto =
    index + 1 < artworks.length + 1 ? reversedArtworks[index] : null;
  const rightPhoto = index > 1 ? reversedArtworks[index - 2] : null;
  const aspectClass = `aspect-[${currentPhoto.aspect_ratio}/1]`;
  let modalImagePadding = "";
  let textPlacement = "";
  if (currentPhoto.aspect_ratio > 1) {
    modalImagePadding =
      "pb-[27rem] px-[13rem] pt-20 min-[500px]:pb-80 min-[500px]:px-44 sm:pb-72 sm:px-80 lg:pt-8 md:pb-56 md:px-44";
    textPlacement =
      "max-xl:bottom-0 max-xl:translate-y-full max-xl:text-center max-xl:w-full max-xl:p-3 xl:right-0 xl:translate-x-full xl:p-5";
  } else if (currentPhoto.aspect_ratio < 1) {
    modalImagePadding =
      "pt-20 px-10 pb-56 sm:pb-24 sm:px-16 md:pt-8 md:pb-36 md:px-24";
    textPlacement =
      "max-lg:bottom-0 max-lg:translate-y-full max-lg:text-center max-lg:w-full max-lg:p-3 lg:right-0 lg:translate-x-full lg:p-5";
  } else {
    modalImagePadding =
      "pb-[20rem] px-[3rem] pt-20 min-[500px]:pb-72 min-[500px]:px-44 sm:pb-44 sm:px-44 lg:pt-8 md:pb-36 md:px-36";
    textPlacement =
      "max-xl:bottom-0 max-xl:translate-y-full max-xl:text-center max-xl:w-full max-xl:p-3 xl:right-0 xl:translate-x-full xl:p-5";
  }

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
        className="fixed inset-0 bg-black/20 backdrop-filter backdrop-blur-md overflow-hidden"
      />

      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/40 h-36" />
        <div className="relative z-50 flex w-full">
          <div className="fixed inset-0 w-full" onClick={() => handleClose()} />

          {/* Main image */}
          <div
            className={`fixed inset-0 flex z-60 h-screen w-screen ${modalImagePadding} 2xl:p-8 justify-center pointer-events-none overflow-x-scroll`}
          >
            <div
              className={`relative h-full ${aspectClass} pointer-events-auto`}
            >
              <ul className={`absolute text-lg ${textPlacement}`}>
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
                    width={2000}
                    height={2000}
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
                    className={`absolute bottom-5 left-5 space-x-3 md:bottom-10 md:left-10 lg:space-x-5 flex flex-row items-center justify-start self-end pointer-events-auto cursor-pointer`}
                  >
                    <button
                      className="rounded-full bg-white/80 p-3 text-black/75 backdrop-blur-lg transition hover:bg-white hover:text-black"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                    >
                      <ChevronLeftIcon className="h-4 lg:h-6 w-4 lg:w-6" />
                    </button>
                    <div
                      className={`max-lg:hidden ${leftPhoto.width > leftPhoto.height ? "w-32" : "w-24"
                        }`}
                    >
                      <CldImage
                        src={leftPhoto.secure_url}
                        width={600}
                        height={600}
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
                    className={`absolute bottom-5 right-5 space-x-3 md:bottom-10 md:right-10 lg:space-x-5 flex flex-row items-center pointer-events-auto cursor-pointer`}
                    onClick={() => changeArtworkId(index - 1)}
                  >
                    <p className="text-end">{rightPhoto.context.caption}</p>
                    <div
                      className={`max-lg:hidden ${rightPhoto.width > rightPhoto.height ? "w-32" : "w-24"
                        }`}
                    >
                      <CldImage
                        src={rightPhoto.secure_url}
                        width={600}
                        height={600}
                        priority
                        alt={rightPhoto.context.alt}
                        placeholder="blur"
                        blurDataURL={rightPhoto.blurDataUrl}
                        onLoad={() => setLoaded(true)}
                      />
                    </div>
                    <button
                      className="rounded-full bg-white/80 p-3 text-black/75 backdrop-blur-lg transition hover:bg-white hover:text-black"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                    >
                      <ChevronRightIcon className="h-4 lg:h-6 w-4 lg:w-6" />
                    </button>
                  </div>
                )}
                <div className="absolute top-8 left-8 flex items-center gap-2 text-white">
                  <button
                    onClick={() => handleClose()}
                    className="rounded-full bg-white/80 p-2 text-black/75 backdrop-blur-lg transition hover:bg-white hover:text-black pointer-events-auto"
                  >
                    <XMarkIcon className="h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6" />
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
