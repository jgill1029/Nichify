import { Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <Flex padding={5} gap={10} fontSize={25}>
      <Heading>Nichify</Heading>
      <Flex gap={5} alignItems="center" paddingY={1}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/recommendations">Recommendations</Link>
      </Flex>
      <Spacer />
      <Link to="/login">Login</Link>
    </Flex>
  );
};

export default NavBar;
