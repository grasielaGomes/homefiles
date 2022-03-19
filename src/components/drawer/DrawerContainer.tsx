import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
} from "@chakra-ui/react";
import { IDrawerContainer } from "../../interfaces/Drawer.interface";
import { CustomDrawerHeader } from "./CustomDrawerHeader";
import { DrawerTab } from "./DrawerTab";

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

      <DrawerFooter>
        <Button variant="outline" mr={3} onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="blue">Save</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
