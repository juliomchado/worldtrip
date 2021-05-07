import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";

export function HomeBanner() {

    return (
        <Box w="100%" justify="center" align="center">
            <Image src="./images/banner.png" alt="worldtrip logo" minH={380} maxW={1280} />
        </Box>
    );
};