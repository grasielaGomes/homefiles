import { Box, Image, Text, Stack, Flex, Skeleton } from "@chakra-ui/react";
import { useImage } from "../hooks/useImage";
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
  const { hasLoaded } = useImage(imageUrl);
  return (
    <Box maxW="200" shadow="base" overflow="hidden" bg="white">
      <Flex justifyContent="space-between" h={8} alignItems="center" pr={2}>
        <Box />
        <MoreButton size="small" />
      </Flex>
      {hasLoaded ? (
        <Image src={imageUrl} alt={imageAlt} />
      ) : (
        <Skeleton height="133px" width="200px"/>
      )}
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
