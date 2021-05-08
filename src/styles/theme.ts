import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "700": "#47585B",
            "400": "#999999",
            "50": "#FFFFFF40",
        },
        yellow: {
            "900": "#FFBA08",
            "850": "#FFBA0880"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
        mono: 'Barlow'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.700'
            }
        }
    }
});
