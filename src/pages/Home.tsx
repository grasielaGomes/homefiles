import {
  Box,
  Flex,
  Text,
  VStack,
  Stack,
  Grid,
  IconButton,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { HomeIcon, MoreIcon, SendIcon } from "../components/icons";
import { MainCard } from "../components/MainCard";

export const Home = () => (
  <Box textAlign="start" fontSize="xl" bg="gray.300" minH={1024} py={4} px={[2,4]}>
    <VStack spacing={3} align="stretch">
      <Header />
      <Stack direction={["column", "row"]} spacing={2}>
        <MainCard
          children={<Text>Hello</Text>}
          icon={<HomeIcon />}
          title="My Homefiles"
          width={["100%", "70%"]}
        />
        <MainCard
          children={<Text>Hello</Text>}
          icon={<SendIcon />}
          title="Send Document"
          width={["100%", "30%"]}
        />
      </Stack>
    </VStack>
  </Box>
);
