import { Icon } from "@chakra-ui/react";
import { FcContacts } from "react-icons/fc";
import { IIcons } from "../../interfaces/Icons.interface";

export const ContactIcon = ({ width = 5, height = 5, color = "" }: IIcons) => (
  <Icon as={FcContacts} w={width} h={height} color={color} />
);
