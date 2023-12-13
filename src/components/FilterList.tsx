import { Button, Heading, List, ListItem } from "@chakra-ui/react";

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

const FilterList = ({ onSelectGenre, selectedGenre }: Props) => {
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {Genres.map((genre) => (
          <ListItem
            key={genre.label}
            paddingY="5px"
            onClick={() => onSelectGenre(genre.label)}
          >
            <Button>{genre.label}</Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default FilterList;
