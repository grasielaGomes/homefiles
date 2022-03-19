import { Flex, Text, Button, Stack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const Header = () => (
  <Flex justifyContent="space-between" align="center" gap={2}>
    <Stack
      direction={["column", "row"]}
      spacing={2}
    >
      <Text fontSize={["sm", "lg"]} as="b">
        Hi Adam,
      </Text>
      <Text fontSize={["sm", "lg"]}>Welcome to your Property Launchpad</Text>
    </Stack>
    <Button
      leftIcon={<AddIcon />}
      colorScheme="blue"
      variant="solid"
      borderLeftRadius="full"
      borderRightRadius="none"
      paddingRight={["6", "10"]}
      marginRight={["-2", "-4"]}
      textTransform="uppercase"
    >
      view
    </Button>
  </Flex>
);
