import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";

export function HomeBanner() {

    return (
        <Box justify="center" align="center">
            <Image src="./images/banner.png" alt="worldtrip logo"/>
        </Box>
    );
};