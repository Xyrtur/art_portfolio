/* eslint-disable no-unused-vars */

export interface SharedModalProps {
    index: number;
    artworks: CloudinaryResource[];
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
export interface CloudinaryResource {
    public_id: string;
    order: string;
    secure_url: string;
    width: number;
    height: number;
    aspect_ratio: number;
    context: Context;
    blurDataUrl: string;
}