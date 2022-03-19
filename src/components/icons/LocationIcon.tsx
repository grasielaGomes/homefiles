import { Icon } from "@chakra-ui/react";
import { FcGlobe } from "react-icons/fc";
import { IIcons } from "../../interfaces/Icons.interface";

export const LocationIcon = ({ width, height, color = "" }: IIcons) => (
  <Icon as={FcGlobe} w={width} h={height} color={color} />
);

