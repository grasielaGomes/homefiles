import { Box, Center } from "@chakra-ui/react";
import { OutlinedButton } from "..";

export const CustomDrawerFooter = () => (
  <Box bg="white" sx={{ shadow: "0px 0px 10px -5px #00000041" }} w="full" h={100}>
    <Center h="full">
      <OutlinedButton text="SAVE" width={200}/>
    </Center>
  </Box>
);