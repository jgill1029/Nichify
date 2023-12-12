import {
  Flex,
  HStack,
  Hide,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <Flex p={3}>
      <Logo />

      <Hide below="sm">
        <Flex
          justifyContent="space-between"
          width="100vw"
          fontSize={22}
          alignItems="center"
        >
          <HStack px={3}>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/recommendations">Recommendations</Link>
          </HStack>
          <Spacer />
          <Link to="/login">Login</Link>
        </Flex>
      </Hide>

      <Show below="sm">
        <Spacer />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Link to="/dashboard">Dashboard</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/recommendations">Recommendations</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/login">Log Out</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Show>
    </Flex>
  );
};

export default NavBar;
