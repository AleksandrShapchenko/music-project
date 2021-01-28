import { Album } from "./album.interface";
import { AlbumsAttr } from "./albums-attr.interface";

export interface Albums {
    '@attr': AlbumsAttr,
    album: Album[]
}
