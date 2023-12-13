import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios, { AxiosRequestConfig, CanceledError } from "axios";
import { TokenResponse } from "./useLogin";

export interface FetchResponse<T>{
    items: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController()
        setLoading(true);

        const fetchData = async () => {
            try {
                const res = await apiClient
                .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig })
            
                setData(res.data.items);
                setLoading(false);
            } catch (err: any) {
                if (err instanceof CanceledError) return;
    
                if (err.response && err.response.status === 401 && err.response.data.error.message === "The access token expired") {
                    try {
                      const params = new URLSearchParams();
                      params.append('grant_type', 'refresh_token');
                      params.append('refresh_token', localStorage.getItem("refresh_token")!);
                      params.append('client_id', import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID!);
                      params.append('client_secret', import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_SECRET!);
                      
                      const refreshResponse = await axios.post<TokenResponse>('https://accounts.spotify.com/api/token', params, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        }
                        });
                        const { access_token, refresh_token} = refreshResponse.data

                      localStorage.setItem("access_token", access_token);
                      localStorage.setItem("refresh_token", refresh_token);
                    } catch (refreshError) {
                        setError("Error refreshing access token");
                        setLoading(false);
                    }
                    
            } else {
                setError(err.message);
                setLoading(false);
            }
        }
    controller.abort()
    };

    fetchData();

    return () => {}

    }, deps ? [...deps] : []);

    return {data, error, isLoading}
};

export default useData;