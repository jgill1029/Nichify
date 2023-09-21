import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
};

const theme = extendTheme({ 
    config,
    styles: {
        global: () => ({
            body: {
                bg: '#131313'
            },
            fonts: {
                
            }
        })
    },
});

export default theme;