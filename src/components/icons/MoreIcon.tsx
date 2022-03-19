import { Icon } from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";
import { IIcons } from "../../interfaces/Icons.interface";

export const MoreIcon = ({ width = 6, height = 6, color = "" }: IIcons) => (
  <Icon as={FiMoreHorizontal} w={width} h={height} color={color}/>
);
