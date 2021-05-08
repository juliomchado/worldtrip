import { Flex, Text, Image, Grid, GridItem, Box, Divider, useBreakpointValue } from '@chakra-ui/react';
import { GetServerSideProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Cards } from '../components/Cards';
import { ContinentBanner } from "../components/ContinentBanner";
import { Header } from '../components/Header';
import { InfoContainer } from '../components/Info';
import { InfoData } from '../components/Info/InfoData';
import { api } from '../services/api';

interface ContinentProps {
    id: number;
    imageSrc: string;
    countryImage: string;
    city: string;
    country: string;
}


export default function Continent() {
    const [cardValue, setCardValue] = useState<ContinentProps[]>([]);

    const router = useRouter();


    const { continent } = router.query;

    useEffect(() => {
        if (continent) {

            const value = async () => {
                await api.get(`/${continent}`)
                    .then(response => setCardValue(response.data));
            }

            value();
        }

        console.log(cardValue)

    }, [continent])


    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Flex w="100vw" h="100vh" direction="column">
            <Header backIcon />
            <ContinentBanner />
            <Flex as="main" w="100%" maxW={1280} mx="auto" direction="column" mt={["12", "16", "20"]} px={["12", "16", "20"]}>
                <Flex as="article" align="center" justify="space-between" mb={["12", "16", "20"]}>
                    {isWideVersion && (
                        <>
                            <Text maxH="52" maxW={600} textAlign="justify" color="gray.700" fontSize="xl" fontWeight="normal">
                                A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia,
                                a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
                                o Cáucaso, e o mar Negro a sudeste.
                            </Text>
                            <Flex w="10%" maxW="5%" />
                        </>
                    )}
                    <InfoContainer>
                        <InfoData value={50} description="países" />
                        <InfoData value={60} description="línguas" />
                        <InfoData value={27} description="cidades +100" />
                    </InfoContainer>
                </Flex>
                <Flex direction="column" mb="10">
                    <Text as="h1" fontWeight="medium" color="gray.700" fontSize={["xl", "2xl", "3xl"]} mb="10">Cidades + 100</Text>
                    <Grid templateColumns={isWideVersion ? "repeat(4, 1fr)" : "repeat(2, 1fr)"} gap={8}>
                        {cardValue && cardValue.map(value => (
                            <Cards key={value.id} src={value.countryImage} city={value.city} country={value.country} flag={value.countryFlag} />
                        ))}
                    </Grid>

                </Flex>
            </Flex>
        </Flex>
    )
};
