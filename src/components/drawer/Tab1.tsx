import {
  VStack,
  Box,
  Text,
  Container,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { detailsAddress } from "../../helpers/DetailsAddress";
import { HomeIcon2, EditIcon } from "../icons";
import { AddressForm } from "./AddressForm";

export const Tab1 = () => (
  <VStack spacing={2} align="stratch">
    <Box bg="gray.300" h={200}>
      <Box display="flex" justifyContent="end" mb={4}>
        <IconButton
          icon={<EditIcon color="blue.300" />}
          aria-label="Edit icon"
          variant="ghost"
          _hover={{ bg: "transparent" }}
        />
      </Box>
      <Container centerContent>
        <HomeIcon2 />
        <Text fontSize="xs">Add photo</Text>
      </Container>
    </Box>
    <Input
      placeholder="Create Name or Project Number"
      size="md"
      bg="white"
      borderRadius="xs"
    />
    {detailsAddress.map((address, index) => (
      <Box key={address}>
        <AddressForm title={address} sameAsAbove={index !== 0} />
      </Box>
    ))}
  </VStack>
);
