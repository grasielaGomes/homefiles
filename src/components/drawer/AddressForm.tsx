import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Flex,
  IconButton,
  Input,
  Stack,
  InputGroup,
  Select,
  Divider,
  Checkbox,
} from "@chakra-ui/react";
import { IAddressForm } from "../../interfaces/AddressForm.interface";
import { LocationIcon } from "../icons";
export const AddressForm = ({ title, sameAsAbove }: IAddressForm) => (
  <Box>
    <Divider my={3} />
    <Stack spacing={2} px={4}>
      <Flex justifyContent="space-between">
        <Flex gap={2} alignItems="center">
          <LocationIcon color="teal" />
          <Text fontSize="xs" textTransform="uppercase">
            {title}
          </Text>
        </Flex>
        {sameAsAbove && (
          <Checkbox colorScheme="cyan">
            <Text fontSize="xs">Same As Above</Text>
          </Checkbox>
        )}
      </Flex>
      <InputGroup gap={2}>
        <Input placeholder="Address" size="md" bg="white" borderRadius="xs" />
        <IconButton
          colorScheme="cyan"
          aria-label="Add new address"
          variant="outline"
          icon={<AddIcon />}
          borderRadius="xs"
        />
      </InputGroup>
      <InputGroup gap={2}>
        <Input placeholder="Zip" size="md" bg="white" borderRadius="xs" />
        <Input placeholder="City" size="md" bg="white" borderRadius="xs" />
        <Select
          placeholder="State"
          bg="white"
          borderRadius="xs"
          color="gray.400"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputGroup>
    </Stack>
  </Box>
);
