import { Icon } from "@chakra-ui/react";
import { FcPlus } from "react-icons/fc";
import { IIcons } from "../../interfaces/Icons.interface";

export const PlusIcon = ({
  width = 5,
  height = 5,
  color = "green.300",
}: IIcons) => <Icon as={FcPlus} w={width} h={height} color={color} />;
