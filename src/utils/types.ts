/* eslint-disable no-unused-vars */

import { PlaybackID } from "@mux/mux-node/resources/index.mjs";

export interface SharedModalProps {
    index: number;
    artworks: CloudinaryImage[];
    changeArtworkId: (newVal: number) => void;
    closeModal: () => void;
    direction?: number;
}

export interface Context {
    alt: string;
    caption: string;
    isSold: string;
    height_in: string;
    order: string;
}
export interface CloudinaryImage {
    public_id: string;
    order: string;
    secure_url: string;
    width: number;
    height: number;
    aspect_ratio: number;
    context: Context;
    blurDataUrl: string;
}

export interface VideoAsset {
    playback_ids?: PlaybackID[] | undefined;
    created_at: string;
    passthrough?: string | undefined;
}