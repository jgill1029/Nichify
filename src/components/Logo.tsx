import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Flex fontSize="2.3rem">
      <Link to="/login">Nichify</Link>
    </Flex>
  );
};

export default Logo;
