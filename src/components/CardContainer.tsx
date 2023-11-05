import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={20}
      overflow="hidden"
      margin="20px"
      borderBlock="border-box"
    >
      {children}
    </Box>
  );
};

export default CardContainer;
