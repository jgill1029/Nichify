import { Card, Grid, GridItem, Heading } from "@chakra-ui/react";
import BigArtistCard from "../components/BigArtistCard";
import CardContainer from "../components/CardContainer";
import NicheRating from "../components/NicheRating";

const Dashboard = () => {
  const artists = [1, 2, 3, 4, 5];

  return (
    <Grid
      templateAreas={{
        base: `"meter" "artists" "songs"`,
        lg: `"meter meter" "artists songs"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 1fr",
      }}
    >
      <GridItem area="meter" paddingX={5}>
        <NicheRating rating={20} />
      </GridItem>
      <GridItem area="artists">
        <CardContainer>
          <Card background="#1db954">
            <Heading color="#ffffff" mx="auto">
              Top Artists
            </Heading>
            {artists.map((artist) => (
              <CardContainer key={artist}>
                <BigArtistCard rating={40} />
              </CardContainer>
            ))}
          </Card>
        </CardContainer>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
