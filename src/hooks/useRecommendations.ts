import useSongs, { Song } from "./useSongs";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {CanceledError } from "axios";

export interface recommendations{
    seeds: string[];
    tracks: Song[]
}

const useRecommendations = (genre?: string) => {
    const [data, setData] = useState<Song[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    console.log(genre)

    useEffect(() => {
        const fetchData = async () => {
            try {
              let seedTracks = '';
              const params = new URLSearchParams();
              params.append('limit', '50');
              params.append('max_popularity', '40')

              if (genre === 'personalized') {
                const topSongs = JSON.parse(localStorage.getItem("topSongs")!)
                seedTracks = topSongs.map( (song : Song) => song.id).join(',');
                params.append('seed_tracks', seedTracks);
              }else{
                genre && params.append('seed_genres', genre || '');
              }

              const res = await apiClient.get<recommendations>('/recommendations', {params})
                setData(res.data.tracks);
                setLoading(false);
            } catch (err: any) {
                if (err instanceof CanceledError) return;
    
               else {
                setError(err.message);
                setLoading(false);
            }
        }
    };

    const controller = new AbortController();

    fetchData();

    return () => {
      controller.abort()
    }

    }, [genre]);

    return {data, error, isLoading}
};

export default useRecommendations;