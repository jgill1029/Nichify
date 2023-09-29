import { HStack, Progress, Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const NicheRating = ({ rating }: Props) => {
  return (
    <HStack>
      <Text>Mainstream</Text>
      <Progress value={rating} width="100%" />
      <Text whiteSpace="nowrap">Niche af</Text>
    </HStack>
  );
};

export default NicheRating;
