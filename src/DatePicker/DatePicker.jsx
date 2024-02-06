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
  InputRightAddon,
} from "@chakra-ui/react";

export const DateRangePickerPopover = ({
  selectedRange,
  setSelectedRange,
  mode="range",
  left=true,
}) => {
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

    if (mode === "range") {
      setInputValue(`${formattedStartDate} - ${formattedEndDate}`);
    } else {
      setInputValue(formattedStartDate);
    }
  };

  const handleApply = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Popover isOpen={isOpen}>
      <PopoverTrigger>
        <InputGroup borderRadius={"0.375rem"} border={"1px solid #e2e8f0"} width={"fit-content"} onClick={() => setIsOpen(!isOpen)}>
          {left ? (
            <InputLeftAddon border="none" backgroundColor={"#fff"}>
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
          ) : (
            ""
          )}
          <Input border={"none"} borderLeft={left ? "none" : "default"} borderRight={!left ? "none" : "default"} value={inputValue} readOnly />
          {!left ? (
            <InputRightAddon border={"none"} backgroundColor={"#fff"}>
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
            </InputRightAddon>
          ) : (
            ""
          )}
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
                  mode: mode,
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
            <Button variant={"outline"} width={"100%"} onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              backgroundColor={"rgba(7, 43, 21, 0.5)"}
              width={"100%"}
              _hover={{ backgroundColor: "rgba(7, 43, 21, 1)", color: "#fff" }}
              onClick={handleApply}
            >
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
