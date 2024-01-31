import React, { useRef, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import "./DatePicker.css";
import {
  Box,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  InputLeftAddon,
  InputGroup,
  PopoverBody,
  PopoverFooter,
  Button,
} from "@chakra-ui/react";


export const DateRangePickerPopover = ({selectedRange, setSelectedRange}) => {
  const flatpickrRef = useRef(null);
  // const [selectedRange, setSelectedRange] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleDateChange = (selectedDates) => {
    setSelectedRange(selectedDates);
    dateConvertHelper(selectedDates);
  };

  const dateConvertHelper = (selectedDates) => {
    const dateOptions = { month: "short", day: "numeric", year: "numeric" };
    const formattedStartDate = selectedDates[0]?.toLocaleDateString(
      "en-US",
      dateOptions
    );
    const formattedEndDate = selectedDates[1]
      ? selectedDates[1].toLocaleDateString("en-US", dateOptions)
      : "";
    setInputValue(`${formattedStartDate} - ${formattedEndDate}`);
  };

  const handleApply = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  console.log(isOpen);

  return (
    <Popover placement="auto-start" isOpen={isOpen}>
      <PopoverTrigger>
        <InputGroup width={"fit-content"} onClick={() => setIsOpen(!isOpen)}>
          <InputLeftAddon backgroundColor={"#fff"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.3333 1.66699V5.00033M6.66667 1.66699V5.00033M2.5 8.33366H17.5M4.16667 3.33366H15.8333C16.7538 3.33366 17.5 4.07985 17.5 5.00033V16.667C17.5 17.5875 16.7538 18.3337 15.8333 18.3337H4.16667C3.24619 18.3337 2.5 17.5875 2.5 16.667V5.00033C2.5 4.07985 3.24619 3.33366 4.16667 3.33366Z"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </InputLeftAddon>
          <Input value={inputValue} width={"240px"} readOnly />
        </InputGroup>
      </PopoverTrigger>
      {isOpen ? (
        <PopoverContent width={"332px"}>
          <PopoverBody>
            <Box>
              <Flatpickr
                ref={flatpickrRef}
                value={selectedRange}
                onChange={handleDateChange}
                options={{
                  enableTime: false,
                  closeOnSelect: false,
                  mode: "range",
                  inline: isOpen,
                  dateFormat: "m-d-Y",
                }}
              />
            </Box>
          </PopoverBody>
          <PopoverFooter
            display={"flex"}
            gap={"12px"}
            padding={"16px 24px"}
            justifyContent={"space-between"}
          >
            <Button width={"100%"} onClick={handleCancel}>
              Cancel
            </Button>
            <Button width={"100%"} colorScheme="blue" onClick={handleApply}>
              Apply
            </Button>
          </PopoverFooter>
        </PopoverContent>
      ) : (
        ""
      )}
    </Popover>
  );
};
