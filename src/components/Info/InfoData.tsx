import { Flex, Text } from "@chakra-ui/layout";

interface InfoDataProps {
    value: number;
    description: string;
}

export function InfoData({ value, description }: InfoDataProps) {

    return (
        <Flex direction="column" align="center" justify="center">
            <Text as="h3" fontWeight="semibold" fontSize="4xl" color="yellow.900">{value}</Text>
            <Text color="gray.700" fontWeight="semibold" fontSize="xl">{description}</Text>
        </Flex>
    )
}