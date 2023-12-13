import useData from "./useData";
import { images } from "./useSongs";

export interface Artist {
    id: string;
    name: string;
    images: images[];
    genres?: string[];
    popularity?: number;
}

const useArtists = (time_range : string) => {
    const params = new URLSearchParams();
    params.append('limit', '5')
    params.append('time_range', time_range)

    return useData<Artist>('/me/top/artists', {params},[time_range]
)}

export default useArtists;