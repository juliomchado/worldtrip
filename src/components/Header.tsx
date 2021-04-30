import Link from 'next/link';
import { Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";

export function Header() {
    return (
        <Link href="/" passHref>
            <ChakraLink>
                <Flex as="header" justify="center" align="center" my="4">
                    <Box>
                        <Image src="./images/logo.png" alt="worldtrip logo" />
                    </Box>
                </Flex>
            </ChakraLink>
        </Link>
    );
};