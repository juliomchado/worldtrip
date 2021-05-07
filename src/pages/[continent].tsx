import { Flex, Text, Image, Grid, GridItem, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Cards } from '../components/Cards';
import { ContinentBanner } from "../components/ContinentBanner";
import { Header } from '../components/Header';
import { InfoContainer } from '../components/Info';
import { InfoData } from '../components/Info/InfoData';


export default function Continent() {

    const router = useRouter();

    const { continent } = router.query;

    return (
        <Flex h="100vh" direction="column" mx="auto">
            <Header backIcon />
            <ContinentBanner />
            <Flex as="main" w={1280} direction="column" mt="20" px="20">
                <Flex as="article" align="center" justify="center" mb="20">
                    <Text maxH="52" maxW={600} textAlign="justify" color="gray.700" fontSize="xl" fontWeight="normal">
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia,
                        a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
                        o Cáucaso, e o mar Negro a sudeste.
                    </Text>
                    <InfoContainer>
                        <InfoData value={50} description="países" />
                        <InfoData value={60} description="línguas" />
                        <InfoData value={27} description="cidades +100" />
                    </InfoContainer>
                </Flex>
                <Flex direction="column" mb="10">
                    <Text as="h1" fontWeight="medium" color="gray.700" fontSize="3xl" mb="10">Cidades + 100</Text>
                    <Cards src="./images/temp/london.png" city="London" country="Reino Unido" flag="./images/temp/englishFlag.png" />
                </Flex>
            </Flex>
        </Flex>
    )
};