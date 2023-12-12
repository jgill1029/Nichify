import axios from 'axios';

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

const clientId: string = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID!;
const redirectUri: string = import.meta.env.VITE_REACT_APP_SPOTIFY_REDIRECT_URI!;
const tokenEndpoint: string = 'https://accounts.spotify.com/api/token';
const client_secret: string = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_SECRET!;
const scopes = [ 'user-read-email', 'user-top-read'];

export const getAuthUrl = (): string => {
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const redirectUriEncoded = encodeURIComponent(redirectUri);
  const scopeString = encodeURIComponent(scopes.join(' '));

  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUriEncoded}&scope=${scopeString}&response_type=code`;
};

export const handleAuthentication = async (code: string): Promise<boolean> => {
  try {
    const params = new URLSearchParams();
    params.append('code', code);
    params.append('redirect_uri', redirectUri);
    params.append('client_id', clientId);
    params.append('client_secret', client_secret);
    params.append('grant_type', 'authorization_code');

    const response = await axios.post<TokenResponse>(tokenEndpoint, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token, refresh_token } = response.data;

    // Store tokens securely (e.g., in localStorage or Redux)
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);

    return true;
  } catch (error) {
    console.error('Error fetching tokens:', error);
    return false;
  }
};