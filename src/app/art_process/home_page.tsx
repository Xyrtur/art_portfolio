"use client"

import { VideoAsset } from 'utils/types';
import { Timeline } from '@/components/timeline';
import { ToTopButton } from '@/components/to_top_button';
import Video from 'next-video';
import { PlaybackID } from '@mux/mux-node/resources/shared.mjs';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export default function ArtProcessPage({ videos }: { videos: VideoAsset[] }) {

    const [isExpanded, setExpanded] = useState(false);

    useEffect(() => {

        document.body.classList.add("h-screen");
        document.body.classList.add("overflow-scroll");
        // unmount action
        return () => {
            document.body.classList.remove('h-screen');
            document.body.classList.remove('overflow-scroll');
        }
    });


    const firstColumn: (VideoAsset | string)[] = [];
    const secondColumn: (VideoAsset | string)[] = [];
    const singleVideoColumn: JSX.Element[] = [];

    for (let i = 0; i < videos.length; i++) {
        if (i % 2 == 0) {
            firstColumn.push(videos[i]);
            secondColumn.push(videos[i].passthrough ? String(videos[i].passthrough) : "");
        } else {
            firstColumn.push(videos[i].passthrough ? String(videos[i].passthrough) : "");
            secondColumn.push(videos[i]);
        }
    }

    const isMinMd = useMediaQuery({ query: "(min-width: 768px)" })
    const isSmolScreen = useMediaQuery({ query: "(max-width: 437px)" });

    for (let i = 0; i < videos.length; i++) {
        singleVideoColumn.push(<div key={(videos[i].playback_ids as PlaybackID[])[0].id} className="md:pb-10 self-center">
            <Video src={`https://stream.mux.com/${(videos[i].playback_ids as PlaybackID[])[0].id}.m3u8`} accentColor="#FAB3A9" width={isMinMd ? 315 : 276} height={isMinMd ? 560 : 490.6} className="lg:h-full" />
        </div>);
        const [title, date, desc] = videos[i].passthrough!.split(';');

        singleVideoColumn.push(<div key={videos[i].passthrough} className="mt-3 md:mt-10 max-md:mb-10 max-md:text-center w-3/4">
            <p className="text-sm">{date}</p><p>{title}</p>
            <p className="mt-5">{desc}</p>

        </div>);


    }

    function WhatIsScratchboard({ isMainContent = false }: { isMainContent?: boolean }) {
        {/* What is scratchboard sidebar */ }
        return (
            <aside onClick={() => {
                if (isMainContent) {
                    setExpanded((currentState) => !currentState);

                }
            }} className={`${isMainContent ? "min-[1250px]:hidden w-full" : "max-[1250px]:hidden sticky top-10 col-span-1 h-screen w-64"} mt-8 flex 2xl:w-full justify-self-center 2xl:justify-center`}>
                <motion.div initial={isMainContent ? { height: isSmolScreen ? 80 : 40 } : false} animate={isMainContent ? { height: isExpanded ? "auto" : (isSmolScreen ? 80 : 40) } : false} transition={{ duration: 0.5 }} className={`${isMainContent ? `px-7 pb-5 pt-2` : " h-max p-7"} overflow-y-hidden border-1 border-secondary-color max-[1250px]:rounded-md min-[1250px]:space-y-4 text-base w-full 2xl:w-[60%]`}>
                    <div className="flex flex-row justify-between "><p className={`${isMainContent ? "pr-8" : ""} place-self-center text-lg text-secondary-color`}>What is Scratchboard?</p>{isMainContent && (<ChevronDownIcon strokeWidth={2} className="w-4 h-4 place-self-center text-secondary-color" />)}</div>

                    <p className="pt-2">Scratchboard is formed of hard backing, white kaolin clay, and black india ink on top.</p>
                    <p>You can use all sorts of sharp tools to scratch away at the ink and produce different textures.</p>
                    <p>Hobby precision knives, microblading needles, tattoo needles, and fibreglass brushes are some examples of tools I use in my works.</p>
                </motion.div>
            </aside>);
    }

    const SingleColumn = () => {
        return (<div className="lg:hidden grid grid-cols-1 md:grid-cols-2 mb-24 mt-10 justify-items-center">
            {singleVideoColumn}
        </div>);
    }

    const DoubleColumn = () => {
        return (<div className="max-lg:hidden grid md:grid-cols-[1fr_max-c] lg:grid-cols-2 grid-rows-1 mb-24 mt-10">

            <div
                className="flex flex-col">

                {firstColumn.map((item: VideoAsset | string) => {

                    if (typeof item === 'string') {
                        const [title, date, desc] = item.split(';');
                        return (
                            <div key={item} className="mt-10 mb-40 text-end w-2/3 self-end">
                                <p className="text-sm">{date}</p><p>{title}</p>
                                <p className="mt-5">{desc}</p>
                            </div>

                        );
                    } else {
                        return (
                            <div key={(item.playback_ids as PlaybackID[])[0].id} className="pb-10 self-center">
                                <Video src={`https://stream.mux.com/${(item.playback_ids as PlaybackID[])[0].id}.m3u8`} accentColor="#FAB3A9" width={315} height={560} className="lg:h-full" />
                            </div>

                        );
                    }
                })}

            </div>

            <div
                className="flex flex-col">

                {secondColumn.map((item: VideoAsset | string) => {

                    if (typeof item === 'string') {
                        const [title, date, desc] = item.split(';');
                        return (
                            <div key={item} className="mt-10 mb-72 text-start w-2/3">
                                <p className="text-sm">{date}</p><p>{title}</p>
                                <p className="mt-5">{desc}</p>

                            </div>

                        );
                    } else {
                        return (
                            <div key={(item.playback_ids as PlaybackID[])[0].id} className="pb-10 self-center">
                                <Video src={`https://stream.mux.com/${(item.playback_ids as PlaybackID[])[0].id}.m3u8`} accentColor="#FAB3A9" width={315} height={560} className="lg:h-full" />
                            </div>


                        );
                    }
                })}
            </div>
        </div>);
    }

    return (
        <>
            <div>
                <ToTopButton />
                <div className="grid grid-cols-2 min-[1250px]:grid-cols-3 2xl:grid-cols-4">
                    <WhatIsScratchboard />

                    {/* Scrolling content */}
                    <div className="col-span-2 flex flex-col items-center 2xl:mr-0 ml-[15%] mr-[15%] min-[1250px]:ml-0 ">
                        <main className="min-h-screen">
                            <WhatIsScratchboard isMainContent={true} />
                            <h1 className="text-2xl mt-5">Art Process</h1>
                            <hr className="w-full mt-5 mb-3" />
                            <span className="mb-3 ">Welcome! Here you&#39;ll find short form videos of how I work as well as any interesting textures I come across and how I tackle them.</span>
                            {Boolean(videos.length == 0) && (<span className="mt-24 flex place-items-center">No videos yet! Uploads will happen every month or two so check back for updates :)</span>)}
                            {Boolean(videos.length !== 0) && (
                                <SingleColumn />
                            )}
                            {Boolean(videos.length !== 0) && (
                                <DoubleColumn />
                            )}
                        </main>
                        <footer>
                            <p className="w-full text-[0.9rem] text-center pb-8 pt-3">
                                Copyright Ysabelle Kmieć ©2024. All Rights Reserved.
                            </p>
                        </footer>
                    </div>

                    {/* Timeline sidebar */}
                    <aside className="max-2xl:hidden sticky top-10 col-span-1 h-screen flex justify-center mt-8">

                        <Timeline showDates={false} />
                    </aside>
                </div>
                <ToTopButton />
            </div>
        </>
    );
}