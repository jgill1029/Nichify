import { Button, Heading, List, ListItem } from "@chakra-ui/react";

const FilterList = () => {
  const genres = ["Rap", "Pop", "Country"];
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre} paddingY="5px">
            <Button>{genre}</Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default FilterList;
