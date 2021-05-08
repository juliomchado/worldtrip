import { Box, Center, Divider, Flex, Link, Text, Link as ChakraLink} from "@chakra-ui/react";
import AwesomeSlider from 'react-awesome-slider';

import { HomeBanner } from "../components/HomeBanner";
import { Header } from "../components/Header";
import { TravelTypesContainer } from "../components/TravelTypes";
import { TravelType } from "../components/TravelTypes/TravelType";

import 'react-awesome-slider/dist/styles.css';


export default function Home() {
  return (
    <Flex w="100vw" h="100vh" direction="column">
      <Header />
      <HomeBanner />

      <Flex as="main" w="100%" h="100vh" maxW={1280} direction="column" mx="auto" mt="20" px="35">
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
          <Text fontWeight="medium" fontSize={["xl", "2xl", "3xl"]} textAlign="center" mt="14" mb="14">
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>
        </Center>
        <AwesomeSlider style={{ heigth: '450px' }}>
              <div data-src="./images/continentSlider/europe.png">
              </div>
        </AwesomeSlider>
      </Flex>

    </Flex>
  );
};
