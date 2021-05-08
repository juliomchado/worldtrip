import Link from 'next/link';
import { Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";

interface HeaderProps {
    backIcon?: boolean;
}

export function Header({ backIcon = false }: HeaderProps) {
    return (
        <Flex justify="center" align="center">
            {backIcon && (
                <Flex pl={["12", "16", "20"]}>
                    <Link href="/" passHref>
                        <ChakraLink>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Image h="8" src="./images/temp/back.svg" />
                            </Box>
                        </ChakraLink>
                    </Link>
                </Flex>
            )}
            <Flex w="100%" justify="center" align="center" my="4" mr="5%" px="20" maxW={1280}>
                <Link href="/" passHref>
                    <ChakraLink>
                        <Box>
                            <Image src="./images/logo.svg" alt="worldtrip logo" />
                        </Box>
                    </ChakraLink>
                </Link>
            </Flex>
        </Flex>
    );
};