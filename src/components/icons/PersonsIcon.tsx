
import { Icon } from "@chakra-ui/react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FcConferenceCall, FcBusinessman, FcButtingIn } from "react-icons/fc";
import { IIcons } from "../../interfaces/Icons.interface";

export const PersonIcon = ({
  width = 20,
  height = 20,
  color = "gray.400",
}: IIcons) => (
  <Icon as={BsFillPersonPlusFill} w={width} h={height} color={color} />
);

export const TeamIcon = ({ width = 4, height = 4, color = "" }: IIcons) => (
  <Icon as={FcConferenceCall} w={width} h={height} color={color} />
);

export const OwnerIcon = ({ width = 4, height = 4, color = "" }: IIcons) => (
  <Icon as={FcBusinessman} w={width} h={height} color={color} />
);

export const MemberIcon = ({ width = 4, height = 4, color = "" }: IIcons) => (
  <Icon as={FcButtingIn} w={width} h={height} color={color} />
);