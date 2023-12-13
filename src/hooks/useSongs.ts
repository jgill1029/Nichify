import { Artist } from "./useArtists";
import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}

interface Album {
    images: images[]
}

export interface images {
    url: string
}

export interface Song {
    id: string;
    name: string;
    popularity: number;
    uri: string;
    artists: Artist[];
    album: Album;
}

const useSongs = (time_range : string) => {
  const params = new URLSearchParams();
  params.append('limit', '5');
  params.append('time_range', time_range);

  return useData<Song>('/me/top/tracks',{params},[time_range]
)}

export default useSongs;