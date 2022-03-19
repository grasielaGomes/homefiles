import { Box } from "@chakra-ui/react";
import { IMainCard } from "../interfaces/MainCard.interface";
import { MainCardHeader } from "./MainCardHeader";

export const MainCard = ({
  icon,
  title,
  children,
  width = "100%",
}: IMainCard) => (
  <Box bg="gray.100" w={width} boxShadow="base">
    <MainCardHeader icon={icon} title={title} />
    {children}
  </Box>
);
