import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Text } from "@chakra-ui/layout";

interface CardsProps {
    src: string;
    city: string;
    country: string;
    flag: string;
}

export function Cards({ src, city, country, flag }: CardsProps) {

    return (
        <Grid templateColumns="repeat(4, 1fr)" gap={8}>
            <Box display="flex" flexDirection="column" w="100%" maxH={256} maxW={279} bg="white" borderColor="yellow.850" borderRadius="4" borderWidth={1}>
                <Image maxH={173} src={src} />
                <Flex as="section" h="28" px="6" py="4" align="center" justify="space-between" >
                    <Flex direction="column" fontFamily="mono">
                        <Text as="h4" color="gray.700" fontSize="xl">{city}</Text>
                        <Text color="gray.400" fontSize="md" fontWeight="medium">{country}</Text>
                    </Flex>
                    <Flex>
                        <Image src={flag} h="8" borderRadius="100%" />
                    </Flex>
                </Flex>
            </Box>
        </Grid>
    )
}