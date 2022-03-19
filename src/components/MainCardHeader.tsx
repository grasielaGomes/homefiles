import { Flex, Text } from "@chakra-ui/react";
import { IMainCardHeader } from "../interfaces/MainCardHeader.interface";
import { MoreButton } from "./";

export const MainCardHeader = ({ icon, title }: IMainCardHeader) => (
  <Flex justifyContent="space-between" bg="white" align="center" pl={2}>
    <Flex gap={2}>
      {icon}
      <Text fontSize="sm">{title}</Text>
    </Flex>
    <MoreButton size="lg"/>
  </Flex>
);
