import { useDisclosure } from "@chakra-ui/react";
import React from "react";

export const useDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return { isOpen, onOpen, onClose, btnRef };
};
