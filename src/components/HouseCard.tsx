import { Box, Image } from "@chakra-ui/react";
import { MoreButton } from "./";


export const HouseCard = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "The Edmunds",
    address: "Address",
    city: "City",
    state: "State",
  };

  return (
    <Box maxW="sm" shadow="base" overflow="hidden">
      <Box h={10}>
        <MoreButton/>
      </Box>
      <Image src={property.imageUrl} alt={property.imageAlt} />
    </Box>
  );
}
