import { Metadata } from "next";
import ArtProcessPage from "./home_page";
import Mux from '@mux/mux-node'


export const metadata: Metadata = {
    title: "Art Process - Ysabelle Kmiec",
    description: "See it be",
};

export default async function Page() {
    const muxClient = new Mux({
        tokenId: process.env.MUX_TOKEN_ID,
        tokenSecret: process.env.MUX_TOKEN_SECRET
    });

    const videos = await muxClient.video.assets.list();

    console.log(videos);
    return <ArtProcessPage videos={[]} />;
}