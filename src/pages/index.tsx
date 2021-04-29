import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Flex h="100vh" direction="column">
      <Flex as="header" justify="center" align="center" my="4">
        <Box>
          <Image src="./images/logo.png" alt="worldtrip logo" />
        </Box>
      </Flex>
      <Flex as="header" justify="center" align="center" mb="20">
        <Box>
          <Image src="./images/banner.png" alt="worldtrip logo" maxH={368.21}/>
        </Box>
      </Flex>
    </Flex >
  )
}
