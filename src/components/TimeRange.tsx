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
  const timeRanges = [
    { value: "short_term", label: "Recent" },
    { value: "medium_term", label: "Intermediate" },
    { value: "long_term", label: "All Time" },
  ];

  const currentTimeRange = timeRanges.find(
    (time) => time.value === selectedTime
  );

  return (
    <Flex marginTop={2}>
      <Menu>
        <MenuButton
          as={Button}
          aria-label="Options"
          rightIcon={<ChevronDownIcon />}
          variant="outline"
        >
          {currentTimeRange?.label}
        </MenuButton>
        <MenuList>
          {timeRanges.map((time) => (
            <MenuItem key={time.value} onClick={() => onSelectTime(time.value)}>
              {time.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default TimeRange;
