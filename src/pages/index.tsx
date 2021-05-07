import { Center, Divider, Flex, Text } from "@chakra-ui/react";

import { HomeBanner } from "../components/HomeBanner";
import { Header } from "../components/Header";
import { TravelTypesContainer } from "../components/TravelTypes";
import { TravelType } from "../components/TravelTypes/TravelType";


export default function Home() {
  return (
    <Flex h="100vh" direction="column" mx="auto">
      <Header />
      <HomeBanner />
    
      <Flex as="main" h="100vh" w={1280} direction="column" mx="auto" mt="20" px="35">
        <TravelTypesContainer>
          <TravelType src="./images/travelTypes/cocktail.svg" travelName="vida noturna" />
          <TravelType src="./images/travelTypes/surf.svg" travelName="praia" />
          <TravelType src="./images/travelTypes/building.svg" travelName="moderno" />
          <TravelType src="./images/travelTypes/museum.svg" travelName="clássico" />
          <TravelType src="./images/travelTypes/earth.svg" travelName="e mais..." />
        </TravelTypesContainer>

        <Center mt="20">
          <Divider orientation="horizontal" w="24" bg="gray.800" color="gray.800" h="0.5" />
        </Center>

        <Center>
          <Text fontWeight="medium" fontSize="3xl" textAlign="center" mt="14" mb="14">
            Vamos nessa? <br />
            Então escolha seu continente
        </Text>
        </Center>
      </Flex>

    </Flex>
  );
};
