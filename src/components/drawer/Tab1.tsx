import { Box, Text, Container } from "@chakra-ui/react";
import { HomeIcon2 } from "../icons/HomeIcon";

export const Tab1 = () => (
  <Box bg="gray.300" h={200} display="grid" alignItems="center">
    <Container centerContent>
      <HomeIcon2 />
      <Text fontSize="xs">Add photo</Text>
    </Container>
  </Box>
);