import { Flex } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface TravelTypeProps {
    children: ReactNode;
};

export function TravelTypesContainer({ children }: TravelTypeProps) {

    return (
        <Flex as="section" maxW={1280} h="36" align="center" justify="space-between" px="34">
            {children}
        </Flex>
    );
}
