import { Box, Image, Flex, Grid, Text, useBreakpointValue } from "@chakra-ui/react";

interface CardsProps {
    src: string;
    city: string;
    country: string;
    flag: string;
}


export function Cards({ src, city, country, flag }: CardsProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });


    return (
        <Box display="flex" flexDirection="column" w="100%" maxH={256} maxW={279} bg="white" borderColor="yellow.850" borderRadius="4" borderWidth={1}>
            <Image maxH={173} src={src} />
            <Flex as="section" h="28" px="6" py="4" align="center" justify="space-between" >
                <Flex direction="column" fontFamily="mono">
                    <Text as="h4" color="gray.700" fontSize={["sm", "md", "xl"]}>{city}</Text>
                    <Text color="gray.400" fontSize={["sm", "sm", "md"]} fontWeight="medium">{country}</Text>
                </Flex>
                {isWideVersion && (
                    <Box>
                        <Image src={flag} h={["4", "4", "8"]} borderRadius="100%" />
                    </Box>
                )}
            </Flex>
        </Box>
    )
}