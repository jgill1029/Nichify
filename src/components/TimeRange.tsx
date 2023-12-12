import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

interface Props {
  onSelectTime: (timeRange: string) => void;
  selectedTime: string | "long_term";
}

const TimeRange = ({ onSelectTime, selectedTime }: Props) => {
  const timeRange = ["short_term", "medium_term", "long_term"];

  return (
    <Flex marginTop={2}>
      <Menu>
        <MenuButton
          as={Button}
          aria-label="Options"
          rightIcon={<ChevronDownIcon />}
          variant="outline"
        >
          {selectedTime}
        </MenuButton>
        <MenuList>
          {timeRange.map((time) => (
            <MenuItem key={time} onClick={() => onSelectTime(time)}>
              {time}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default TimeRange;
