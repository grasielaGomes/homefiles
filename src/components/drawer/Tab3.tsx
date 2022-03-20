import { Box, Flex, VStack, Text, Stack } from "@chakra-ui/react";
import { team } from "../../helpers/TeamContacts";
import { RoundedButton } from "../";
import { TeamCard } from "./";
import { TeamIcon } from "../icons";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const Tab3 = () => {
  const { height } = useWindowDimensions();
  return (
    <VStack spacing={2} align="stratch" key="tab3">
      <Box display="flex" justifyContent="end" mt={2}>
        <RoundedButton
          text="team"
          paddingLeft="4"
          leftRadius="full"
          paddingRight="10"
        />
      </Box>
      <Box bg="gray.100" minH={height - 252}>
        <Stack spacing={4} align="stratch" p={4}>
          <Flex gap={2} alignItems="center">
            <TeamIcon />
            <Text fontSize="xs" textTransform="uppercase">
              Team
            </Text>
          </Flex>
          {team.map(
            (
              {
                firstName,
                lastName,
                email,
                phone,
                isOwner,
                isShared,
                imageUrl,
              },
              index
            ) => (
              <Box key={email}>
                <TeamCard
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  phone={phone}
                  isOwner={isOwner}
                  imageUrl={imageUrl}
                />
              </Box>
            )
          )}
        </Stack>
      </Box>
    </VStack>
  );
};
