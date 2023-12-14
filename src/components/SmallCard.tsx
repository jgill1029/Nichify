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
import RatingBox from "./RatingBox";
import { Song } from "../hooks/useSongs";

interface props {
  song: Song;
  color: string;
}

const SmallCard = ({ song, color }: props) => {
  return (
    <Card background={color} direction="row">
      <Image
        src={song?.album.images[0]?.url}
        boxSize={{ base: "100px", sm: "120px" }}
      ></Image>

      <CardBody>
        <HStack justifyContent={"space-between"}>
          <VStack alignItems={"right"}>
            <Heading size={{ base: "md", md: "lg" }}>{song.name}</Heading>
            <Show above="sm">
              <Text fontSize={"lg"}>{song.artists[0].name}</Text>
            </Show>
          </VStack>
          <Show above="sm">
            <RatingBox rating={song.popularity} />
          </Show>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default SmallCard;
