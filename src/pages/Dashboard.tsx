import { Card, Grid, GridItem, Heading } from "@chakra-ui/react";
import CardContainer from "../components/CardContainer";
import CardTemplate from "../components/CardTemplate";
import Meter from "../components/Meter";
import TimeRange from "../components/TimeRange";
import { useState } from "react";
import useSongs, { Song } from "../hooks/useSongs";

const Dashboard = () => {
  const artists = [1, 2, 3, 4, 5];
  const [timeRange, setTimeRange] = useState("long_term");
  const cardBackgrounColor = "#1db954";
  const cardColor = "#191414";
  const headingColor = "#ffffff";

  const { data, error, isLoading } = useSongs(timeRange);
  const songs: Song[] = data;

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
        <TimeRange
          onSelectTime={(time) => setTimeRange(time)}
          selectedTime={timeRange}
        />
      </GridItem>

      <GridItem area="artists">
        <CardContainer>
          <Card background={cardBackgrounColor}>
            <Heading color={headingColor} mx="auto">
              Top Artists
            </Heading>
            {artists.map((artist) => (
              <CardContainer key={artist}>
                <CardTemplate key={artist} color={cardColor} />
              </CardContainer>
            ))}
          </Card>
        </CardContainer>
      </GridItem>
      <GridItem area="songs">
        <CardContainer>
          <Card background={cardBackgrounColor}>
            <Heading color={headingColor} mx="auto">
              Top Songs
            </Heading>
            {songs.map((song) => (
              <CardContainer key={song.id}>
                <CardTemplate key={song.id} color={cardColor} song={song} />
              </CardContainer>
            ))}
          </Card>
        </CardContainer>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
