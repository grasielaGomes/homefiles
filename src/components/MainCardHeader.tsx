import { Flex, Text } from "@chakra-ui/react";
import { IMainCardHeader } from "../interfaces/MainCardHeader";

export const MainCardHeader = ({
  icon,
  title,
  iconButton,
}: IMainCardHeader) => (
  <Flex justifyContent="space-between">
    <Flex gap={2}>
      {icon}
      <Text fontSize="md">{title}</Text>
    </Flex>
    {iconButton}
  </Flex>
);
