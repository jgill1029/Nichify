import { Grid, GridItem, Show } from "@chakra-ui/react";
import Meter from "../components/Meter";
import FilterList from "../components/FilterList";
import FilterListSmall from "../components/FilterListSmall";
import RecSongs from "../components/RecSongs";

const Recommendations = () => {
  const recSongs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <Grid
      templateAreas={{
        base: `"meter" "filters" "RecSongs"`,
        lg: `"meter meter" "filters RecSongs"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "150px 1fr",
      }}
    >
      <GridItem area="meter" paddingX={5}>
        <Meter rating={20}></Meter>
      </GridItem>

      <GridItem area="filters" paddingX={5} mt={4}>
        <Show above="lg">
          <FilterList />
        </Show>
        <Show below="md">
          <FilterListSmall />
        </Show>
      </GridItem>

      <GridItem area="RecSongs">
        <RecSongs songs={recSongs}></RecSongs>
      </GridItem>
    </Grid>
  );
};

export default Recommendations;
