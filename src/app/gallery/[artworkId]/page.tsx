import { fetchArtworks } from "@/components/gallery/fetch_artworks";
import Modal from "@/components/gallery/modal";

export default async function ArtworkModal({
    params,
}: {
    params: Promise<{ artworkId: string }>
}) {
    const artworks = (await fetchArtworks()).reverse();
    const artworkId = Number((await params).artworkId);

    return (
        <><main className="flex flex-col items-center">
            {Boolean(artworkId) && (
                <Modal
                    artworks={artworks}
                    currentArtworkId={artworkId}
                />
            )}
        </main></>);
}