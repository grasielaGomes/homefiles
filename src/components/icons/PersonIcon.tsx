
import { Icon } from "@chakra-ui/react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { IIcons } from "../../interfaces/Icons.interface";

export const PersonIcon = ({
  width = 20,
  height = 20,
  color = "gray.400",
}: IIcons) => (
  <Icon as={BsFillPersonPlusFill} w={width} h={height} color={color} />
);
