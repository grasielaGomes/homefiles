import {
  Box,
  Text,
  Flex,
  Input,
  Stack,
  Center,
  Divider,
  Radio,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { formPlaceholders } from "../../helpers/ClientContact";
import { IContactForm } from "../../interfaces/ContactForm.interface";
import { ContactIcon, PersonIcon } from "../icons";

export const ContactForm = ({ title, radioValue }: IContactForm) => {
  const isFirstItem = radioValue === '0';
  return (
    <Box>
      {!isFirstItem && <Divider my={3} />}
      <Stack spacing={2} px={4} mt={isFirstItem ? '4' : ''}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex gap={2} alignItems="center">
            <ContactIcon />
            <Text fontSize="xs" textTransform="uppercase">
              {title}
            </Text>
          </Flex>
          <Radio value={radioValue} colorScheme="teal">
            <Text fontSize="xs">Point of Contact</Text>
          </Radio>
        </Flex>
        <Grid templateColumns="repeat(8, 1fr)" gap={2} w="100%">
          <GridItem colSpan={2} w="100%" h={120} bg="gray.100">
            <Center h="full">
              <PersonIcon width={10} height={10} color="gray.300" />
            </Center>
          </GridItem>
          <GridItem colSpan={6} w="100%">
            <Stack>
              {formPlaceholders.map((placeholder) => (
                <Input
                  key={placeholder}
                  placeholder={placeholder}
                  size="md"
                  bg="white"
                  borderRadius="xs"
                />
              ))}
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
    </Box>
  );
};
