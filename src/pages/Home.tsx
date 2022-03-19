import {
  Box,
  Flex,
  Text,
  VStack,
  Code,
  Grid,
  IconButton,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { HomeIcon, MoreIcon, SendIcon } from "../components/icons";
import { MainCard } from "../components/MainCard";

export const Home = () => (
  <Box textAlign="start" fontSize="xl" bg="gray.300" minH={1024} py={4} px={6}>
    <VStack spacing={3} align="stretch">
      <Header />
      <Flex gap={2}>
        <MainCard
          children={<Text>Hello</Text>}
          icon={<HomeIcon />}
          title="My Homefiles"
          width="75%"
        />
        <MainCard
          children={<Text>Hello</Text>}
          icon={<SendIcon />}
          title="Send Document"
          width="25%"
        />
      </Flex>
    </VStack>
  </Box>
);
