import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={20} overflow="hidden" padding="10px">
      {children}
    </Box>
  );
};

export default CardContainer;
