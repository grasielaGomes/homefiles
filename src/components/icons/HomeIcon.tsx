import { Icon } from "@chakra-ui/react";
import { FcHome } from "react-icons/fc";
import { BiHomeAlt } from "react-icons/bi";
import { IIcons } from "../../interfaces/Icons.interface";

export const HomeIcon = () => <Icon as={FcHome} />;

export const HomeIcon2 = ({
  width = 20,
  height = 20,
  color = "gray.400",
}: IIcons) => <Icon as={BiHomeAlt} w={width} h={height} color={color} />;
