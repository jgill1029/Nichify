import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Flex textColor="#1db954">
      <Link to="/login">
        <Heading>Nichify</Heading>
      </Link>
    </Flex>
  );
};

export default Logo;
