import { Card, Grid, GridItem, Heading } from "@chakra-ui/react";
import CardContainer from "../components/CardContainer";
import CardTemplate from "../components/CardTemplate";
import Meter from "../components/Meter";
import TimeRange from "../components/TimeRange";
import { useState } from "react";
import useSongs, { Song } from "../hooks/useSongs";
import useArtists, { Artist } from "../hooks/useArtists";

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState("long_term");
  const cardBackgrounColor = "#1db954";
  const cardColor = "#191414";
  const headingColor = "#ffffff";

  const {
    data: songData,
    error: songError,
    isLoading: songIsLoading,
  } = useSongs(timeRange);
  const songs: Song[] = songData;

  const {
    data: artistData,
    error: artistError,
    isLoading: artistIsLoading,
  } = useArtists(timeRange);
  const artists: Artist[] = artistData;

  const overallRating = () => {
    let sum = 0;
    let num = 0;

    songData.forEach((song: Song) => {
      sum += 100 - song.popularity;
      num += 1;
    });

    artistData.forEach((artist: Artist) => {
      sum += 100 - (artist?.popularity || 0);
      num += 1;
    });

    return Math.round(sum / num);
  };

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
        <Meter rating={overallRating()}></Meter>
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
            {artists &&
              artists.map((artist) => (
                <CardContainer key={artist?.id}>
                  <CardTemplate
                    key={artist?.id}
                    color={cardColor}
                    artist={artist}
                  />
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
