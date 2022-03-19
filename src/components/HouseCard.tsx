import { Box, Image, Text, Stack, Flex } from "@chakra-ui/react";
import { IHouseCard } from "../interfaces/HouseCard.interface";
import { MoreButton } from "./";

export const HouseCard = ({
  imageUrl,
  imageAlt,
  title,
  address,
  city,
  state,
}: IHouseCard) => {
  return (
    <Box maxW="200" shadow="base" overflow="hidden" bg="white">
      <Box h={8} display="flex" justifyContent="end" alignItems="center" pr={2}>
        <MoreButton size="small" />
      </Box>
      <Image src={imageUrl} alt={imageAlt} />
      <Stack px={2} my={4}>
        <Text textTransform="uppercase" fontSize="sm" as="b">
          {title}
        </Text>
        <Box>
          <Text fontSize="xs">{address}</Text>
          <Flex gap="1">
            <Text fontSize="xs">{city}</Text>
            <Text fontSize="xs">{state}</Text>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};
