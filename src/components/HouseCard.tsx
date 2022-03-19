import { Box, Image, Text, Stack, Flex } from "@chakra-ui/react";
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
    <Box maxW="200" shadow="base" overflow="hidden" bg="white">
      <Box h={8} display="flex" justifyContent="end" alignItems="center" pr={2}>
        <MoreButton size="small" />
      </Box>
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Stack px={2} my={4}>
        <Text textTransform="uppercase" fontSize="sm" as="b">
          {property.title}
        </Text>
        <Box>
          <Text fontSize="xs">{property.address}</Text>
          <Flex gap="1">
            <Text fontSize="xs">{property.city}</Text>
            <Text fontSize="xs">{property.state}</Text>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};
