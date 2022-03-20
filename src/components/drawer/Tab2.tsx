import { RadioGroup, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { clientContacts } from "../../helpers/ClientContact";
import { ContactForm } from "./";
import { AddressForm } from "./AddressForm";

export const Tab2 = () => {
  const [value, setValue] = useState("0");
  return (
    <VStack spacing={2} align="stratch" key="tab2">
      {clientContacts.map((contact, index) => (
        <RadioGroup onChange={setValue} value={value} key={contact}>
          <ContactForm title={contact} radioValue={String(index)} />
        </RadioGroup>
      ))}
      <AddressForm title="Current Address" />
    </VStack>
  );
};
