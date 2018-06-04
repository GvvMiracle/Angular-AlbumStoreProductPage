import { Track } from './track'

export interface Album {
    name: string;
    releaseDate: string;
    covelImage: string;
    tracks: Track[];
}
