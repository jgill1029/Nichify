import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const FilterListSmall = () => {
  const genres = ["Personalized", "Rap", "Country", "Pop"];
  const selectedGenre = "Personalized";

  return (
    <Menu>
      <MenuButton
        as={Button}
        aria-label="Options"
        rightIcon={<ChevronDownIcon />}
        variant="outline"
      >
        {selectedGenre}
      </MenuButton>
      <MenuList>
        {genres.map((genre) => (
          <MenuItem key={genre}>{genre}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterListSmall;
