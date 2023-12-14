import { useState } from "react";
import CardContainer from "./CardContainer";
import CardTemplate from "./CardTemplate";

import { Button } from "@chakra-ui/react";
import { Song } from "../hooks/useSongs";
import SmallCard from "./smallcard";

interface props {
  songs: Song[];
}

const RecSongs = ({ songs }: props) => {
  const [itemsToShow, setItemsToShow] = useState(5);

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 5);
  };

  return (
    <>
      {songs.slice(0, 5).map((song) => (
        <CardContainer key={song.id}>
          <CardTemplate song={song} color="#1db954" />
        </CardContainer>
      ))}
      {songs.slice(5, itemsToShow).map((lsong) => (
        <CardContainer key={lsong.id}>
          <SmallCard color="#1db954" song={lsong}></SmallCard>
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
