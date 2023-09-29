import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import drake from "../assets/drake.jpg";
import NicheRating from "./NicheRating";

interface Props {
  rating: number;
}

const BigArtistCard = ({ rating }: Props) => {
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
    return "";
  };

  return (
    <Card background="#191414" direction={{ base: "column", sm: "row" }}>
      <Image src={drake} boxSize={{ base: "100%", sm: "200px" }}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <Heading>Drake</Heading>
          <Text fontSize={25}>{getLabelFromRating(rating)}</Text>
        </HStack>
        <Text>
          Genres:{" "}
          {genres.map((genre, index) => (
            <span>{(index ? ", " : "") + genre}</span>
          ))}
        </Text>
        <NicheRating rating={rating} />
      </CardBody>
    </Card>
  );
};

export default BigArtistCard;
