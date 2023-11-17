import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Show,
} from "@chakra-ui/react";
import React from "react";
import drake from "../assets/drake.jpg";
import RatingBox from "./RatingBox";

interface props {
  rating: number;
  color: string;
}

const SmallCard = ({ rating, color }: props) => {
  return (
    <Card background={color} direction="row">
      <Image src={drake} boxSize={{ base: "100px", sm: "120px" }}></Image>

      <CardBody>
        <HStack justifyContent={"space-between"}>
          <VStack alignItems={"right"}>
            <Heading size={{ base: "md", md: "lg" }}>Song Name</Heading>
            <Show above="sm">
              <Text fontSize={"lg"}>Artist</Text>
            </Show>
          </VStack>
          <Show above="sm">
            <RatingBox rating={rating} />
          </Show>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default SmallCard;
