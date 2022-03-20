import { Box, VStack, Grid, GridItem } from "@chakra-ui/react";
import {
  Header,
  MainCard,
  OutlinedButton,
  HomefileContent,
} from "../components";
import { ColorHomeIcon, SendIcon } from "../components/icons";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const Home = () => {
  const { height } = useWindowDimensions();
  return (
    <Box
      textAlign="start"
      fontSize="xl"
      bg="gray.300"
      minH={height}
      py={4}
      px={[2, 4]}
    >
      <VStack spacing={3} align="stretch">
        <Header />
        <Grid
          templateColumns={["repeat(1, 1fr)", "repeat(8, 1fr)"]}
          gap={2}
          w="100%"
        >
          <GridItem colSpan={[1, 6]} w="100%">
            <MainCard
              children={<HomefileContent />}
              icon={<ColorHomeIcon />}
              title="My Homefiles"
              width="100%"
            />
          </GridItem>
          <GridItem colSpan={[1, 2]} w="100%">
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
};
