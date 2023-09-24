import { Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <Flex padding="1rem" gap="1rem" fontSize="1.5rem">
      <Logo />
      <Flex gap=".5rem" alignItems="center" paddingY=".7rem">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/recommendations">Recommendations</Link>
      </Flex>
      <Spacer />
      <Flex paddingY=".7rem">
        <Link to="/login">Login</Link>
      </Flex>
    </Flex>
  );
};

export default NavBar;
