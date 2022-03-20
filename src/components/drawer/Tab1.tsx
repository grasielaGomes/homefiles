import {
  VStack,
  Box,
  Flex,
  Text,
  Container,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import { detailsAddress } from "../../helpers/DetailsAddress";
import { HomeIcon, EditIcon } from "../icons";
import { AddressForm } from "./AddressForm";

export const Tab1 = () => (
  <VStack spacing={2} align="stratch" key="tab1">
    <Stack px={4} spacing={2}>
      <Box bg="gray.200" h={200}>
        <Flex justifyContent="space-between" mb={4}>
          <Box />
          <IconButton
            colorScheme="cyan"
            icon={<EditIcon />}
            aria-label="Edit icon"
            variant="ghost"
            _hover={{ bg: "transparent" }}
          />
        </Flex>
        <Container centerContent>
          <HomeIcon color="gray.300" />
          <Text fontSize="xs">Add photo</Text>
        </Container>
      </Box>
      <Input
        placeholder="Create Name or Project Number"
        size="md"
        bg="white"
        borderRadius="xs"
      />
    </Stack>
    {detailsAddress.map((address, index) => (
      <Box key={address}>
        <AddressForm title={address} sameAsAbove={index !== 0} />
      </Box>
    ))}
  </VStack>
);
