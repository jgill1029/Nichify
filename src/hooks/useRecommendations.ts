import useData from "./useData";
import { Song } from "./useSongs";

const useRecommendations = (genre?: string, seeds?: string) => {
    const params = new URLSearchParams();
    params.append('limit', '50');
    params.append('seed_tracks', seeds || '');
    params.append('seed_tracks', genre || '');
    params.append('max_popularity', '40')
  
    return useData<Song>('/me/top/tracks',{params},[seeds, genre]
  )}
  
  export default useRecommendations;