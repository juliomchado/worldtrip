import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";

export function ContinentBanner() {

    return (
        <Box w="100%" justify="center" align="center">
            <Image src="./images/EuropeBanner.png" alt="Europa" minH={500} maxW={1280} />
        </Box>
    );
};