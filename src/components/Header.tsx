import { Flex, Text, Stack } from "@chakra-ui/react";
import { RoundedButton } from "./";

export const Header = () => (
  <Flex justifyContent="space-between" align="center" gap={2}>
    <Stack direction={["column", "row"]} spacing={2}>
      <Text fontSize={["sm", "lg"]} as="b">
        Hi Adam,
      </Text>
      <Text fontSize={["sm", "lg"]}>Welcome to your Property Launchpad</Text>
    </Stack>
    <RoundedButton
      text="view"
      marginRight={["-2", "-4"]}
      paddingRight={["6", "10"]}
      paddingLeft="4"
      leftRadius="full"
    />
  </Flex>
);
