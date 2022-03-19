import { Box, Grid } from "@chakra-ui/react";
import { properties } from "../helpers/Properties";
import { useDrawer } from "../hooks/useDrawer";
import { RoundedButton, HouseCard } from "./";
import { DrawerContainer } from "./drawer/DrawerContainer";

export const HomefileContent = () => {
  const {btnRef, onOpen, isOpen, onClose,} = useDrawer();
  return (
    <Box p={4} h={700}>
      <RoundedButton
        ref={btnRef}
        text="new homefile"
        paddingLeft="4"
        paddingRight="4"
        rightRadius="full"
        marginLeft="-4"
        handleClick={onOpen}
      />
      <DrawerContainer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      <Grid mt={4}>
        {properties.map(
          ({ imageUrl, imageAlt, title, address, city, state }) => (
            <HouseCard
              imageUrl={imageUrl}
              imageAlt={imageAlt}
              title={title}
              address={address}
              city={city}
              state={state}
            />
          )
        )}
      </Grid>
    </Box>
  );
};
