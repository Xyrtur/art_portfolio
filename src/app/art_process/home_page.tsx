"use client"

import { VideoAsset } from 'utils/types';
import { Timeline } from '@/components/timeline';
import { ToTopButton } from '@/components/to_top_button';
import Video from 'next-video';

function isVideoContext(item: VideoAsset | string): item is VideoAsset {
    return (item as VideoAsset).id !== undefined;
}

export default function ArtProcessPage({ videos }: { videos: VideoAsset[] }) {

    var firstColumn: (VideoAsset | string)[] = [];
    var secondColumn: (VideoAsset | string)[] = [];

    for (var i = 0; i < videos.length; i++) {
        if (i % 2 == 0) {
            firstColumn.push(videos[i]);
            secondColumn.push(videos[i].passthrough ? String(videos[i].passthrough) : "");
        } else {
            firstColumn.push(videos[i].passthrough ? String(videos[i].passthrough) : "");
            secondColumn.push(videos[i]);
        }
    }

    return (
        <>
            <main className="h-screen">
                <ToTopButton />
                <div className="grid grid-cols-4">
                    {/* What is scratchboard sidebar */}
                    <div className="sticky top-10 col-span-1 h-screen mt-8 flex justify-center">
                        <div className="border-1 border-secondary-color p-7 space-y-4 text-base w-[60%] h-max">
                            <p className="text-lg text-secondary-color">What is Scratchboard</p>
                            <p>Scratchboard a board formed of hard backing, white kaolin clay, and black india ink on top.</p>
                            <p>You can use all sorts of sharp tools to scratch away at the ink and produce different textures.</p>
                            <p>Hobby precision knives, microblading needles, tattoo needles, and fibreglass brushes are some examples of tools I use in my works.</p>
                        </div>
                    </div>

                    {/* Scrolling content */}
                    <div className="col-span-2 flex flex-col items-center">

                        <h1 className="text-xl">Art Process</h1>
                        <hr className="w-full my-5" />
                        <div className="grid grid-cols-2 grid-rows-1 mb-24">

                            <div
                                className="flex flex-col">
                                {firstColumn.map((item: VideoAsset | string) => {

                                    if (typeof item === 'string') {
                                        return (
                                            <div key={item} className="mt-10 mb-40 text-end w-2/3 self-end">
                                                <p>{item}</p>
                                                <p></p>
                                            </div>

                                        );
                                    } else {
                                        return (
                                            <div key={item.id} className="pb-10 self-center"><Video src={`https://stream.mux.com/${item.id}.m3u8`} width={315} height={560} /></div>

                                        );
                                    }
                                })}

                            </div>

                            <div
                                className="flex flex-col">

                                {secondColumn.map((item: VideoAsset | string) => {

                                    if (typeof item === 'string') {
                                        return (
                                            <div key={item} className="mt-10 mb-72 text-start w-2/3">
                                                <p>{item}</p>

                                            </div>

                                        );
                                    } else {
                                        return (
                                            <div key={item.id} className="pb-10 self-center"><Video src="https://stream.mux.com/5pJnN8eaxcEtS2vsQ02Pe913Vo3KoRfDbdBxNFqKjySE.m3u8" width={315} height={560} /></div>


                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Timeline sidebar */}
                    <div className="sticky top-10 col-span-1 h-screen flex justify-center mt-8">

                        <Timeline />
                    </div>
                </div>
            </main>
        </>
    );
}