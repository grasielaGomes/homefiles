import { Icon } from "@chakra-ui/react";
import { FiEdit2 } from "react-icons/fi";
import { IIcons } from "../../interfaces/Icons.interface";

export const EditIcon = ({ width = 5, height = 5, color = "" }: IIcons) => (
  <Icon as={FiEdit2} w={width} h={height} color={color} />
);
