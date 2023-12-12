import { Text } from "@chakra-ui/react";

interface Props {
  rating: number;
  label: string;
}

const BigRating = ({ rating, label }: Props) => {
  return (
    <>
      <Text fontSize={{ base: "2.5rem", md: "4rem" }}>
        {label} - {rating}%
      </Text>
    </>
  );
};

export default BigRating;
