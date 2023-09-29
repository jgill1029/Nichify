import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Flex textColor="#1db954" margin="10px">
      <Link to="/login">Nichify</Link>
    </Flex>
  );
};

export default Logo;
