import { Grid, GridItem, Show } from "@chakra-ui/react";
import FilterList from "../components/FilterList";
import FilterListSmall from "../components/FilterListSmall";
import RecSongs from "../components/RecSongs";
import { useState } from "react";

const Recommendations = () => {
  const [genre, setGenre] = useState("long_term");
  const recSongs = [1, 2];

  return (
    <Grid
      templateAreas={{
        base: `"filters" "RecSongs"`,
        lg: `"filters RecSongs"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "150px 1fr",
      }}
    >
      <GridItem area="filters" paddingX={5} mt={4}>
        <Show above="lg">
          <FilterList
            onSelectGenre={(time) => setGenre(time)}
            selectedGenre={genre}
          />
        </Show>
        <Show below="md">
          <FilterListSmall
            onSelectGenre={(time) => setGenre(time)}
            selectedGenre={genre}
          />
        </Show>
      </GridItem>

      <GridItem area="RecSongs">
        <RecSongs songs={recSongs}></RecSongs>
      </GridItem>
    </Grid>
  );
};

export default Recommendations;
