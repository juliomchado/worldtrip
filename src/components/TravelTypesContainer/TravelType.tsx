import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";

interface TravelTypeProps {
    src: string;
    travelName: string;
};

export function TravelType({src, travelName}: TravelTypeProps) {

    return (
        <Flex as="div" direction="column" align="center"  >
            <Image src={src} h="20" mb="6"/>
            <Text fontWeight="semibold" fontSize="2xl" color="gray.700">{travelName}</Text>
        </Flex>
    );
}