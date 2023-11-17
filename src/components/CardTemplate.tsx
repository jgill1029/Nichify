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
import React from "react";
import drake from "../assets/drake.jpg";
import NicheRating from "./NicheRating";
import RatingBox from "./RatingBox";

interface Props {
  rating: number;
  color: string;
}

const CardTemplate = ({ rating, color }: Props) => {
  const genres = ["Rap", "R&B"];

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
    <Card background={color} direction={{ base: "column", sm: "row" }}>
      <Image src={drake} boxSize={{ base: "100%", sm: "200px" }}></Image>

      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Heading>Artist/Song Name</Heading>
          <Hide below="sm">
            <Text fontSize="2vh">{getLabelFromRating(rating)}</Text>
          </Hide>
        </HStack>

        <HStack justifyContent="space-between">
          <VStack align="flex-start">
            <Show>Artist</Show>
            <Box mt={{ base: "0", md: "9" }}>
              <Text>
                Genres:{" "}
                {genres.map((genre, index) => (
                  <span>{(index ? ", " : "") + genre}</span>
                ))}
              </Text>
            </Box>
          </VStack>
          <Show below="sm">
            <RatingBox rating={rating} />
          </Show>
        </HStack>

        <Hide below="sm">
          <NicheRating rating={rating} />
        </Hide>
      </CardBody>
    </Card>
  );
};

export default CardTemplate;
