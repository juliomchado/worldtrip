import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";

export function Banner() {

    return (
        <Flex justify="center" align="center" >
            <Box>
                <Image src="./images/banner.png" alt="worldtrip logo" maxH={368.21} />
            </Box>
        </Flex>
    );
};