import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  rating: number;
}

const RatingBox = ({ rating }: Props) => {
  let color =
    rating > 80
      ? "#a0c15a"
      : rating > 60
      ? "#add633"
      : rating > 40
      ? "#ffd934"
      : rating > 20
      ? "#ffb234"
      : "#ff8c5a";

  return (
    <Box bg={color} color="white" borderRadius="md" p={2}>
      {rating}
    </Box>
  );
};

export default RatingBox;
