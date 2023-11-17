import React, { useState } from "react";
import CardContainer from "./CardContainer";
import CardTemplate from "./CardTemplate";
import SmallCard from "./SmallCard";
import { Button } from "@chakra-ui/react";

interface props {
  songs: number[];
}

const RecSongs = ({ songs }: props) => {
  const [itemsToShow, setItemsToShow] = useState(5);

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 5);
  };

  return (
    <>
      {songs.slice(0, 5).map((song) => (
        <CardContainer key={song}>
          <CardTemplate rating={40} color="#1db954" />
        </CardContainer>
      ))}
      {songs.slice(5, itemsToShow).map((lsong) => (
        <CardContainer key={lsong}>
          <SmallCard color="#1db954" rating={20}></SmallCard>
        </CardContainer>
      ))}
      {itemsToShow < songs.length && (
        <Button onClick={handleShowMore} marginBottom="20px" marginLeft="20px">
          Show More...
        </Button>
      )}
    </>
  );
};

export default RecSongs;
