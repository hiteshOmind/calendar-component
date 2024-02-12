import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import TimelineComponent from "./TimelineComponent";
import SimpleDropDown from "./simpleDropDown/SimpleDropDown";
import CheckBoxFilter from "./CheckBoxFilter/CheckBoxFilter";

function TimeLineIntegration({ TimeLineData, canExpand = true }) {
  const [selectedValue, setSelectedValue] = useState("This Month");
  const [options, setOptions] = useState(source);


  return (
    <Box display={"flex"} flexDir={"column"} gap={"24px"}>
      <Box display={"flex"} gap={"4px"} flexDir={"column"}>
        <Text fontSize={16} color={"#344054"} fontWeight={500}>
          Activity
        </Text>
        <Text fontSize={14} fontWeight={400} color={"#667085"}>
          This contains user activities across multiple sources and gets updated
          dynamically with event and its respective attributes.
        </Text>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>search component here</Box>
        <Box display={"flex"} gap={"16px"} alignItems={"center"}>
          <Box zIndex={1}>
            <SimpleDropDown
              selectedValue={selectedValue}
              options={DWoptions}
              setSelectedValue={setSelectedValue}
            />
          </Box>
          <Box>
            <CheckBoxFilter options={options} setOptions={setOptions} />
          </Box>
        </Box>
      </Box>

      <Box>
        <TimelineComponent canExpand={true} TimeLineData={TimeLineData} />
      </Box>
    </Box>
  );
}

export default TimeLineIntegration;

const DWoptions = [
  {
    value: "This Month",
    label: "This Month",
    index: 0,
  },
  {
    value: "Last 7 Days",
    label: "Last 7 Days",
    index: 1,
  },
  {
    value: "Last 30 Days",
    label: "Last 30 Days",
    index: 2,
  },
  {
    value: "Last 90 Days",
    label: "Last 90 Days",
    index: 3,
  },
  {
    value: "Today",
    label: "Today",
    index: 4,
  },
];

const source = [
  {
    source: "Source 1",
    checked: false,
  },
  {
    source: "Source 2",
    checked: false,
  },
  {
    source: "Source 3",
    checked: false,
  },
  {
    source: "Source 4",
    checked: false,
  },
];
