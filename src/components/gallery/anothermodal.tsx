import {
    ChevronLeftIcon,
    ChevronRightIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { variants } from "./animationVariants";
import { SharedModalProps } from "./types";
import { CldImage } from "next-cloudinary";

export default function SharedModal({
    index,
    artworks,
    changeArtworkId,
    closeModal,
    direction,
}: SharedModalProps) {
    const [loaded, setLoaded] = useState(false);


    const handlers = useSwipeable({
        onSwipedRight: () => {
            if (index < artworks.length - 1) {
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
    let reversedArtworks = [...artworks].reverse();
    let currentPhoto = reversedArtworks[index - 1];
    const aspectClass = `aspect-[${currentPhoto.aspect_ratio}/1]`;
    return (
        <MotionConfig
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            }}
        >
            <div
                className="relative z-50 flex w-full max-w-7xl items-center"
                {...handlers}
            >
                <div className="fixed inset-0 w-full" onClick={() => closeModal()}></div>
                {/* Main image */}
                <div className="w-full overflow-hidden">
                    <div className={`relative flex ${aspectClass} items-center justify-center`}>
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
                                    onLoad={() => setLoaded(true)}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Buttons + bottom nav bar */}
                <div className="fixed inset-0 flex w-screen pointer-events-none">
                    {/* Buttons */}
                    {loaded && (
                        <div className="relative aspect-[3/2] max-h-full w-full">
                            {index + 1 < artworks.length && (
                                <button
                                    className="absolute left-10 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none pointer-events-auto"
                                    style={{ transform: "translate3d(0, 0, 0)" }}
                                    onClick={() => changeArtworkId(index + 1)}
                                >
                                    <ChevronLeftIcon className="h-6 w-6" />
                                </button>
                            )}
                            {index > 1 && (
                                <button
                                    className="absolute right-10 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none pointer-events-auto"
                                    style={{ transform: "translate3d(0, 0, 0)" }}
                                    onClick={() => changeArtworkId(index - 1)}
                                >
                                    <ChevronRightIcon className="h-6 w-6" />
                                </button>
                            )}

                            <div className="absolute top-0 left-0 flex items-center gap-2 p-3 text-white">
                                <button
                                    onClick={() => closeModal()}
                                    className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white pointer-events-auto"
                                >

                                    <XMarkIcon className="h-5 w-5" />

                                </button>
                            </div>


                        </div>
                    )}
                    {/* Bottom Nav bar
                    <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
                        <motion.div
                            initial={false}
                            className="mx-auto mt-6 mb-6 flex aspect-[3/2] h-14"
                        >
                            <AnimatePresence initial={false}>
                                {filteredImages.map(({ public_id, format, id }) => (
                                    <motion.button
                                        initial={{
                                            width: "0%",
                                            x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                                        }}
                                        animate={{
                                            scale: id === index ? 1.25 : 1,
                                            width: "100%",
                                            x: `${Math.max(index * -100, 15 * -100)}%`,
                                        }}
                                        exit={{ width: "0%" }}
                                        onClick={() => changeArtworkId(id)}
                                        key={id}
                                        className={`${id === index
                                            ? "z-20 rounded-md shadow shadow-black/50"
                                            : "z-10"
                                            } ${id === 0 ? "rounded-l-md" : ""} ${id === artworks.length - 1 ? "rounded-r-md" : ""
                                            } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
                                    >
                                        <Image
                                            alt="small photos on the bottom"
                                            width={180}
                                            height={120}
                                            className={`${id === index
                                                ? "brightness-110 hover:brightness-110"
                                                : "brightness-50 contrast-125 hover:brightness-75"
                                                } h-full transform object-cover transition`}
                                            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_180/${public_id}.${format}`}
                                        />
                                    </motion.button>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div> */}

                </div>
            </div>
        </MotionConfig>
    );
}
