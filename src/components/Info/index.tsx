import { Flex } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface InfoContainerProps {
    children: ReactNode;
};

export function InfoContainer({ children }: InfoContainerProps) {

    return (
        <Flex flex="1" align="center" justify={["space-between", "space-around", "space-between"]}>
            {children}
        </Flex>
    )
};