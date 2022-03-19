import { Box, VStack, Grid, GridItem } from "@chakra-ui/react";
import {
  Header,
  MainCard,
  OutlinedButton,
  HomefileContent,
} from "../components";
import { HomeIcon, SendIcon } from "../components/icons";

export const Home = () => (
  <Box
    textAlign="start"
    fontSize="xl"
    bg="gray.300"
    minH={1024}
    py={4}
    px={[2, 4]}
  >
    <VStack spacing={3} align="stretch">
      <Header />
      <Grid templateColumns="repeat(8, 1fr)" gap={2} w="100%">
        <GridItem colSpan={6} w="100%">
          <MainCard
            children={<HomefileContent />}
            icon={<HomeIcon />}
            title="My Homefiles"
            width="100%"
          />
        </GridItem>
        <GridItem colSpan={2} w="100%">
          <MainCard
            children={
              <Box p={3}>
                <OutlinedButton text="Set up document" />
              </Box>
            }
            icon={<SendIcon />}
            title="Send Document"
            width="100%"
          />
        </GridItem>
      </Grid>
    </VStack>
  </Box>
);
