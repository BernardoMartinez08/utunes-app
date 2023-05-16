import { SongDetails } from "./song-details";

export interface AlbumDetails{
    id : number;
    name : string;
    artist : string;
    review : string;
    likes : number;
    rates : number;
    price : number;
    score : any;
    songs : Array<SongDetails>;
}