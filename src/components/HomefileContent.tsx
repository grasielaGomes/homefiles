import { Box, Grid } from "@chakra-ui/react";
import { RoundedButton, HouseCard } from "./";

export const HomefileContent = () => (
  <Box p={4} h={700}>
    <RoundedButton
      text="new homefile"
      paddingLeft="4"
      paddingRight="4"
      rightRadius="full"
      marginLeft="-4"
    />
    <Grid>
      <HouseCard />
    </Grid>
  </Box>
);
