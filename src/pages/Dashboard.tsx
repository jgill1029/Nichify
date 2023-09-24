import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import BigArtistCard from "../components/BigArtistCard";
import CardContainer from "../components/CardContainer";

const Dashboard = () => {
  const artists = [1, 2, 3, 4, 5];

  return (
    <SimpleGrid minChildWidth="200px" spacing={6} padding="10px" columns={1}>
      <Box>
        <Heading>Top Artists</Heading>
        {artists.map((artist) => (
          <CardContainer key={artist}>
            <BigArtistCard />
          </CardContainer>
        ))}
      </Box>
      <Box>
        <Heading>Top Songs</Heading>
        {artists.map((artist) => (
          <CardContainer key={artist}>
            <BigArtistCard />
          </CardContainer>
        ))}
      </Box>
      <CardContainer>
        <BigArtistCard />
      </CardContainer>
    </SimpleGrid>
  );
};

export default Dashboard;
