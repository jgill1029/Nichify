import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Hide,
  Image,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import NicheRating from "./NicheRating";
import RatingBox from "./RatingBox";
import { Song } from "../hooks/useSongs";
import { Artist } from "../hooks/useArtists";

interface Props {
  color: string;
  song?: Song;
  artist?: Artist;
}

const CardTemplate = ({ color, song, artist }: Props) => {
  const key = song ? song.id : artist ? artist.id : "key";
  const image = song ? song?.album.images[0].url : artist ? artist.images : "";
  const rating = song ? song.popularity : artist ? artist.popularity : 100;
  const genres = artist ? artist.genres : [];
  const name = song ? song.name : artist ? artist.name : "";
  const filteredSongName = name.replace(/\([^)]*\)/, "").trim();

  const getLabelFromRating = (rating: number) => {
    // Define rating ranges and corresponding labels
    const ratingRanges = [0, 20, 40, 60, 80, 100];
    const labels = [
      "Mainstream af",
      "Mainstream",
      "Average",
      "Niche",
      "Niche af",
    ];

    for (let i = 0; i < ratingRanges.length - 1; i++) {
      if (rating >= ratingRanges[i] && rating < ratingRanges[i + 1]) {
        return labels[i];
      }
    }
  };

  return (
    <Card
      key={key}
      background={color}
      direction={{ base: "column", sm: "row" }}
    >
      <Image src={image} boxSize={{ base: "100%", sm: "200px" }}></Image>

      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Heading>{filteredSongName}</Heading>
          <Hide below="sm">
            <Text fontSize="2vh">{getLabelFromRating(rating || 0)}</Text>
          </Hide>
        </HStack>

        <HStack justifyContent="space-between">
          <VStack align="flex-start">
            {song && (
              <Text color="white">
                {song.artists &&
                  song.artists.map((artists: Artist, index) => (
                    <span key={artists?.id}>
                      {index ? ", " : ""} {artists?.name}
                    </span>
                  ))}
              </Text>
            )}
            <Box mt={{ base: "0", md: "9" }}>
              {artist && (
                <Text color="white">
                  Genres:{" "}
                  {genres &&
                    genres.map((genre, index) => (
                      <Text key={genre}>
                        {index ? ", " : ""} {genre}
                      </Text>
                    ))}
                </Text>
              )}
              <Text color={color}> Hi </Text>
            </Box>
          </VStack>
          <Show below="sm">
            <RatingBox rating={rating || 0} />
          </Show>
        </HStack>

        <Hide below="sm">
          <NicheRating rating={rating || 0} />
        </Hide>
      </CardBody>
    </Card>
  );
};

export default CardTemplate;
