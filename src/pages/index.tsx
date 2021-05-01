import { Center, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypesContainer } from "../components/TravelTypesContainer";
import { TravelType } from "../components/TravelTypesContainer/TravelType";

export default function Home() {
  return (
    <Flex h="100vh" direction="column" >
      <Header />
      <Banner />

      <Flex as="main" h="100vh" w={1160} direction="column" mx="auto" mt="36">
        <TravelTypesContainer>
          <TravelType src="./images/travelTypes/cocktail.png" travelName="vida noturna" />
          <TravelType src="./images/travelTypes/surf.png" travelName="praia" />
          <TravelType src="./images/travelTypes/building.png" travelName="moderno" />
          <TravelType src="./images/travelTypes/museum.png" travelName="clássico" />
          <TravelType src="./images/travelTypes/earth.png" travelName="e mais..." />
        </TravelTypesContainer>

        <Center mt="20">
          <Divider orientation="horizontal" w="24" bg="gray.800" color="gray.800" h="0.5" />
        </Center>

        <Center>
          <Text fontWeight="medium" fontSize="4xl" textAlign="center" mt="14" mb="14">
            Vamos nessa? <br />
            Então escolha seu continente
        </Text>
        </Center>

      </Flex>

    </Flex>
  );
};
