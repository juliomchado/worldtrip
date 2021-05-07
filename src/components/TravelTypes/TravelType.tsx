import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/react";

interface TravelTypeProps {
    src: string;
    travelName: string;
};

export function TravelType({src, travelName}: TravelTypeProps) {

    return (
        <Flex direction="column" align="center">
            <Image src={src} h="16" mb="6"/>
            <Text fontWeight="semibold" fontSize="1xl" color="gray.700">{travelName}</Text>
        </Flex>
    );
};