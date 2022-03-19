import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { IDrawerContainer } from "../../interfaces/Drawer.interface";
import { CustomDrawerFooter, CustomDrawerHeader, DrawerTab } from "./";

export const DrawerContainer = ({ isOpen, onClose, btnRef }: IDrawerContainer) => (
  <Drawer
    isOpen={isOpen}
    placement="left"
    onClose={onClose}
    finalFocusRef={btnRef}
    size="md"
  >
    <DrawerOverlay />
    <DrawerContent bg="gray.50">
      <DrawerHeader bg="white" px={4}>
        <CustomDrawerHeader />
      </DrawerHeader>

      <DrawerBody padding={0}>
        <DrawerTab />
      </DrawerBody>

      <DrawerFooter padding={0}>
        <CustomDrawerFooter />
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
