import Link from 'next/link';
import { Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";

interface HeaderProps {
    backIcon?: boolean;
}

export function Header({ backIcon = false }: HeaderProps) {
    return (
        <Flex as="header" maxW={1280} my="auto" maxHeight="24">


            <Flex justify="center" align="center" my="4" w="100%" maxW={1280}>
                {backIcon && (
                    <Flex position="relative" right="36%">
                        <Link href="/" passHref>
                            <ChakraLink>
                                <Box display="flex" alignItems="center" justifyContent="center">
                                    <Image h="8" src="./images/temp/back.svg" />
                                </Box>
                            </ChakraLink>
                        </Link>
                    </Flex>
                )}
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