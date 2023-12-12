import React, { useEffect } from "react";
import { getAuthUrl, handleAuthentication } from "../hooks/useLogin";
import { Button } from "@chakra-ui/react";

const LoginButton: React.FC = () => {
  const handleLogin = (): void => {
    const authUrl = getAuthUrl();
    window.location.href = authUrl;
  };

  useEffect(() => {
    const handleCallback = async (): Promise<void> => {
      const code = new URLSearchParams(window.location.search).get("code");

      if (code) {
        const success = await handleAuthentication(code);

        if (success) {
          // Redirect to the home page or desired route
          window.location.href = "/dashboard";
        } else {
          // Handle authentication failure
          console.error("Authentication failed");
        }
      }
    };

    handleCallback();
  }, []);

  return (
    <Button
      onClick={handleLogin}
      colorScheme="green"
      fontSize={25}
      height="2.5em"
      width="5em"
    >
      Login
    </Button>
  );
};

export default LoginButton;
