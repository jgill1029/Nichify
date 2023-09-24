import { Progress } from "@chakra-ui/react";
import React from "react";

interface Props {
  rating: number;
}

const NicheRating = ({ rating }: Props) => {
  return <Progress value={rating} />;
};

export default NicheRating;
