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
  const key = song?.id || artist?.id || "key";
  const image = song?.album.images[0]?.url || artist?.images[0]?.url || "";
  const rating = song?.popularity || artist?.popularity || 0;
  const genres = artist?.genres || [];
  const name = song?.name || artist?.name || "";
  const filteredSongName = name.replace(/\([^)]*\)/, "").trim();
  const objectRating = 100 - rating;

  const getLabelFromRating = (objectRating: number) => {
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
      if (
        objectRating >= ratingRanges[i] &&
        objectRating < ratingRanges[i + 1]
      ) {
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
            <Text fontSize="2vh">{getLabelFromRating(objectRating)}</Text>
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
            {artist && genres?.length <= 3 && <Text color={color}> Hi </Text>}
            <Box mt={{ base: "0", md: "9" }}>
              {artist && (
                <Text color="white">
                  Genres:{" "}
                  {genres &&
                    genres.map((genre, index) => (
                      <span key={genre}>
                        {index ? ", " : ""} {genre}
                      </span>
                    ))}
                </Text>
              )}
              {song && <Text color={color}> Hi </Text>}
            </Box>
          </VStack>
          <Show below="sm">
            <RatingBox rating={objectRating} />
          </Show>
        </HStack>

        <Hide below="sm">
          <NicheRating rating={objectRating} />
        </Hide>
      </CardBody>
    </Card>
  );
};

export default CardTemplate;
