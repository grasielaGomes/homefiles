import { Flex, IconButton, Text } from "@chakra-ui/react";
import { IMainCardHeader } from "../interfaces/MainCardHeader.interface";
import { MoreIcon } from "./icons";

export const MainCardHeader = ({ icon, title }: IMainCardHeader) => (
  <Flex justifyContent="space-between" bg="white" align="center" pl={2}>
    <Flex gap={2}>
      {icon}
      <Text fontSize="sm">{title}</Text>
    </Flex>
    <IconButton
      aria-label="Search database"
      icon={<MoreIcon />}
      variant="ghost"
      size="lg"
      isRound={false}
    />
  </Flex>
);
