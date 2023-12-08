import axios from 'axios';

interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

const clientId = 'cf25a6083da241a8b72d8062c11e96dd';
const redirectUri = 'http://localhost:5173/dashboard';
const tokenEndpoint = 'your-token-endpoint';
const scopes = [ 'user-read-email', 'user-top-read'];

export const getAuthUrl = (): string => {
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const redirectUriEncoded = encodeURIComponent(redirectUri);
  const scopeString = encodeURIComponent(scopes.join(' '));

  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUriEncoded}&scope=${scopeString}&response_type=code`;
};

export const handleAuthentication = async (code: string): Promise<boolean> => {
  try {
    const response = await axios.post<TokenResponse>(tokenEndpoint, {
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: "client scret",
      grant_type: 'authorization_code',
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