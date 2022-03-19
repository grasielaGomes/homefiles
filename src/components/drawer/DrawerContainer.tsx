import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
} from "@chakra-ui/react";
import { IDrawerContainer } from "../../interfaces/Drawer.interface";

export const DrawerContainer = ({ isOpen, onClose, btnRef }: IDrawerContainer) => (
  <Drawer
    isOpen={isOpen}
    placement="left"
    onClose={onClose}
    finalFocusRef={btnRef}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Create your account</DrawerHeader>

      <DrawerBody>
        <Input placeholder="Type here..." />
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
