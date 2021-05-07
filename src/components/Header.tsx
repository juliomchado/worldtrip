import Link from 'next/link';
import { Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";

interface HeaderProps {
    backIcon?: boolean;
}

export function Header({ backIcon = false }: HeaderProps) {
    return (
        <Flex as="header" align="center" maxW={1280} my="auto" maxHeight="24">

            {backIcon && (
                <Flex pl="20" >
                    <Link href="/" passHref>
                        <ChakraLink>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Image h="8" src="./images/temp/back.svg" />
                            </Box>
                        </ChakraLink>
                    </Link>
                </Flex>
            )}
            <Flex w="100%" justify="center" align="center" my="4" px="20" maxW={1280}>

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