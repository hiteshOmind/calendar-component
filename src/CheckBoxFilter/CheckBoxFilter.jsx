import {
  Box,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import React, { useState } from "react";
import imgSrc from "./source.svg";

function CheckBoxFilter(props) {

  const [open, setOpen] = useState(false)

  const handleCheckBoxChange = (index) => {
    // Create a copy of options array to avoid mutating state directly
    const updatedOptions = [...props.options];
    // Toggle the checked state of the checkbox
    updatedOptions[index].checked = !updatedOptions[index].checked;
    // Update the state with the new options array
    props.setOptions(updatedOptions);
  };

  const handleClearAll = () => {
    // Create a copy of options array and reset all checkboxes to unchecked
    const clearedOptions = props?.options?.map(option => ({ ...option, checked: false }));
    // Update the state with the cleared options
    props.setOptions(clearedOptions);
  }


  const handleApply = () =>{
    setOpen(false)
  }

  return (
    <>
      <Popover isOpen={open}>
        <PopoverTrigger >
          <Button onClick={()=>setOpen(!open)} _hover={{ backgroundColor: "none" }} variant={"outline"}>
            <Box
              display={"flex"}
              justifyContent={"cneter"}
              alignItems={"center"}
              gap={"8px"}
            >
              <img alt="source filter" src={imgSrc}></img> <Text>Source</Text>
            </Box>
          </Button>
        </PopoverTrigger>
        <PopoverContent width={"fit-content"}>
          <Box minWidth={"160px"}>
            {props?.options?.map((item, index) => (
              <Box
                cursor={"pointer"}
                onClick={() => handleCheckBoxChange(index)}
                key={index}
                display={"flex"}
                gap={"12px"}
                alignItems={"center"}
                padding={"10px 16px"}
              >
                <Checkbox
                  _checked={{
                    borderColor: "#23CE6B",
                    _hover: { backgroundColor: "#D8FFEA" },
                    "& .chakra-checkbox__control": {
                      background: "#D8FFEA",
                      _hover: { background: "#D8FFEA", borderColor: "#23CE6B" },
                      borderColor: "#23CE6B",
                      _focus: { boxShadow: "none" },
                    },
                    "& .chakra-checkbox": { borderColor: "#23CE6B" },
                  }}
                  _hover={{ backgroundColor: "#fff", background: "none" }}
                  backgroundColor={"#fff"}
                  boxShadow="none"
                  background={"none"}
                  colorScheme="green"
                  isChecked={item?.checked}
                  onChange={() => handleCheckBoxChange(index)}
                  iconColor="#23CE6B"
                />
                <Text fontSize={"16px"} fontWeight={500} color="#344054">
                  {item?.source}
                </Text>
              </Box>
            ))}
          </Box>
          <Box
            padding={"8px 16px"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Button
              fontSize={14} fontWeight={600}
              width={"128px"}
              backgroundColor={"#072B15"}
              color="#fff"
              _hover={{backgroundColor:"#072B1580"}}
              variant={"solid"}
              onClick={handleApply}
            >
              Apply
            </Button>
            <Button fontSize={14} fontWeight={600} _hover={{backgroundColor:"none"}} onClick={handleClearAll} width={"128px"} variant={"ghost"}>
              Clear All
            </Button>
          </Box>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default CheckBoxFilter;
