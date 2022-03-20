import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { ITeamCard } from "../../interfaces/TeamCard.interface";
import { MemberIcon, MoreIcon, OwnerIcon } from "../icons";

export const TeamCard = ({
  isOwner,
  isShared,
  firstName,
  lastName,
  phone,
  email,
  imageUrl,
}: ITeamCard) => (
  <Box bg="white" shadow="base" p={4}>
    <Flex justifyContent="space-between">
      <Flex gap={1} alignItems="center">
        {isOwner ? <OwnerIcon /> : <MemberIcon />}
        <Text fontSize="xs" textTransform="uppercase">
          {isOwner ? "owner" : "member"}
        </Text>
      </Flex>
      <Flex gap={2} alignItems="center">
        {!isShared && (
          <Text
            fontSize="xs"
            textTransform="uppercase"
            color="green.400"
            fontWeight="bold"
          >
            shared
          </Text>
        )}
        <MoreIcon />
      </Flex>
    </Flex>
    <Flex justifyContent="space-between" alignItems="end" mt={4}>
      <Flex gap={2} alignItems="center">
        <Avatar name={`${firstName} ${lastName}`} src={imageUrl} />
        <Box>
          <Text fontSize="md" fontWeight="bold">
            {firstName} {lastName}
          </Text>
          <Text fontSize="xs">{phone}</Text>
        </Box>
      </Flex>
      <Box>
        <Text fontSize="xs" color="teal" textAlign="right">
          {email}
        </Text>
      </Box>
    </Flex>
  </Box>
);
