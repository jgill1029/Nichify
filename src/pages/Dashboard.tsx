import { Card, Grid, GridItem, Heading } from "@chakra-ui/react";
import CardContainer from "../components/CardContainer";
import CardTemplate from "../components/CardTemplate";
import Meter from "../components/Meter";

const Dashboard = () => {
  const artists = [1, 2, 3, 4, 5];

  return (
    <Grid
      templateAreas={{
        base: `"meter" "artists" "songs"`,
        xl: `"meter meter" "artists songs"`,
      }}
      templateColumns={{
        base: "1fr",
        xl: "1fr 1fr",
      }}
    >
      <GridItem area="meter" paddingX={5}>
        <Meter rating={20}></Meter>
      </GridItem>
      <GridItem area="artists">
        <CardContainer>
          <Card background="#1db954">
            <Heading color="#ffffff" mx="auto">
              Top Artists
            </Heading>
            {artists.map((artist) => (
              <CardContainer key={artist}>
                <CardTemplate rating={40} color="#191414" />
              </CardContainer>
            ))}
          </Card>
        </CardContainer>
      </GridItem>
      <GridItem area="songs">
        <CardContainer>
          <Card background="#1db954">
            <Heading color="#ffffff" mx="auto">
              Top Songs
            </Heading>
            {artists.map((artist) => (
              <CardContainer key={artist}>
                <CardTemplate rating={40} color="#191414" />
              </CardContainer>
            ))}
          </Card>
        </CardContainer>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
