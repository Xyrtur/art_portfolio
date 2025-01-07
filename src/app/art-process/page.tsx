import { Metadata } from "next";
import ArtProcessPage from "./home_page";
import Mux from '@mux/mux-node'
import { VideoAsset } from "utils/types";

export const revalidate = 300; // seconds

export const metadata: Metadata = {
    title: "Scratchboard Art Process - Ysabelle Kmieć",
    description: "See how scratchboard art is created in these short form videos. Any interesting techniques or sections I come across on various artworks are uploaded here.",
};

export default async function Page() {
    const muxClient = new Mux({
        tokenId: process.env.MUX_TOKEN_ID,
        tokenSecret: process.env.MUX_TOKEN_SECRET
    });

    const { data }: { data: VideoAsset[] } = (await muxClient.video.assets.list());
    return <ArtProcessPage videos={data} />;
}