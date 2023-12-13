import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: string) => void;
  selectedGenre: string | "";
}

const Genres = [
  { value: "short_term", label: "Personalized" },
  { value: "pop", label: "Pop" },
  { value: "rock", label: "Rock" },
  { value: "hip-hop", label: "Hip-Hop" },
  { value: "r-n-b", label: "R&B" },
  { value: "edm", label: "EDM" },
  { value: "country", label: "Country" },
  { value: "jazz", label: "Jazz" },
  { value: "reggae", label: "reggae" },
  { value: "latin", label: "Latin" },
];

const FilterListSmall = ({ onSelectGenre, selectedGenre }: Props) => {
  const currentGenre = Genres.find((genre) => genre.value === selectedGenre);

  return (
    <Menu>
      <MenuButton
        as={Button}
        aria-label="Options"
        rightIcon={<ChevronDownIcon />}
        variant="outline"
      >
        {currentGenre?.value}
      </MenuButton>
      <MenuList>
        {Genres.map((genre) => (
          <MenuItem
            key={genre.value}
            onClick={() => onSelectGenre(genre.value)}
          >
            {genre.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterListSmall;
