import { Button, DrawerCloseButton } from "@chakra-ui/react";
import { PlusIcon } from "../icons";

export const CustomDrawerHeader = () => (
  <>
    <Button leftIcon={<PlusIcon />} variant="link" _focus={{ outline: "none" }}>
      New Homefile
    </Button>
    <DrawerCloseButton color="cyan.500" size="lg"/>
  </>
);
