import { Box, Grid } from "@chakra-ui/react";
import { properties } from "../helpers/Properties";
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
    <Grid mt={4}>
      {properties.map(({ imageUrl, imageAlt, title, address, city, state }) => (
        <HouseCard
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          title={title}
          address={address}
          city={city}
          state={state}
        />
      ))}
    </Grid>
  </Box>
);
