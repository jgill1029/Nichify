import { Center } from "@chakra-ui/react";
import React from "react";
import BigRating from "./BigRating";
import NicheRating from "./NicheRating";

interface props {
  rating: number;
}

const Meter = ({ rating }: props) => {
  return (
    <>
      <Center>
        <BigRating rating={rating} label="Average" />
      </Center>
      <NicheRating rating={rating} />
    </>
  );
};

export default Meter;
