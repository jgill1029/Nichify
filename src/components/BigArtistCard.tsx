import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import drake from "../assets/drake.jpg";
import NicheRating from "./NicheRating";

const BigArtistCard = () => {
  const genres = ["Rap", "R&B"];

  return (
    <Card direction="row">
      <Image src={drake} boxSize="150px"></Image>
      <CardBody>
        <Heading>Drake</Heading>
        <Text>
          Genres:{" "}
          {genres.map((genre, index) => (
            <span>{(index ? ", " : "") + genre}</span>
          ))}
        </Text>
        <NicheRating rating={20} />
      </CardBody>
    </Card>
  );
};

export default BigArtistCard;
