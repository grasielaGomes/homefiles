import { Box, Text, Link, VStack, Code, Grid } from "@chakra-ui/react";

import { Header } from "../components/Header";

export const Home = () => (
  <Box
    textAlign="start"
    fontSize="xl"
    bg="gray.300"
    minH={1024}
    py={4}
    px={6}
  >
    <Header />
  </Box>
);
