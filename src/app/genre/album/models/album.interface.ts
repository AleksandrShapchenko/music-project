import { AlbumAttr } from "./album-attr.interface";
import { Artist } from "./artist.interface";
import { Image } from "./image.interface";

export interface Album {
    '@attr': AlbumAttr,
    artist: Artist,
    image: Image[],
    mbid: string,
    name: string,
    url: string
}