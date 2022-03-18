import { Flex, Text, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const Header = () => (
  <Flex justifyContent="space-between">
    <Flex gap={1}>
      <Text fontSize="lg" as="b">
        Hi Adam,
      </Text>
      <Text fontSize="lg">Welcome to your Property Launchpad</Text>
    </Flex>
    <Button
      leftIcon={<AddIcon />}
      colorScheme="blue"
      variant="solid"
      borderLeftRadius="full"
      borderRightRadius="none"
      paddingRight="14"
      marginRight="-6"
    >
      VIEW
    </Button>
  </Flex>
);
