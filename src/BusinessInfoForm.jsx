import React from "react";
import { GoTag } from "react-icons/go";
import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { Select as SearchSelect } from "chakra-react-select";

export const Options = [
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
];

function BusinessInfoForm() {
  return (
    <Box>
      <Box>
        <Box display={"flex"} gap={5}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width="48px"
            height={"48px"}
            borderRadius={"50%"}
            bgColor={"rgba(238, 255, 246, 1)"}
          >
            <GoTag size={20} color="rgba(11, 69, 34, 1)" />
          </Box>
          <Box>
            <Text fontSize={16} fontWeight0={500}>
              Business Info
            </Text>
            <Text
              fontSize={14}
              fontWeight={400}
              color={"rgba(102, 112, 133, 1)"}
            >
              Provide the necessary information for efficient account management
            </Text>
          </Box>
        </Box>
        <Box mt={"40px"} display={"flex"} flexDir={"column"} gap={"16px"}>
          <Box display={"flex"} justifyContent={"space-between"} gap={"16px"}>
            <FormControl>
              <FormLabel
                fontSize={"14px"}
                color={"rgba(102, 112, 133, 1)"}
                marginBottom={"4px"}
              >
                Address Line 1
              </FormLabel>
              <Input variant="outline" placeholder="Address line 1" />
            </FormControl>
            <FormControl>
              <FormLabel
                fontSize={"14px"}
                color={"rgba(102, 112, 133, 1)"}
                marginBottom={"4px"}
              >
                Address Line 2
              </FormLabel>
              <Input variant="outline" placeholder="Address line 2" />
            </FormControl>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} gap={"16px"}>
            <FormControl>
              <FormLabel
                fontSize={"14px"}
                color={"rgba(102, 112, 133, 1)"}
                marginBottom={"4px"}
              >
                Zip Code
              </FormLabel>
              <Input variant="outline" placeholder="Enter zipcode" />
            </FormControl>
            <FormControl>
              <FormLabel
                fontSize={"14px"}
                color={"rgba(102, 112, 133, 1)"}
                marginBottom={"4px"}
              >
                City
              </FormLabel>
              <Input variant="outline" placeholder="Enter city" />
            </FormControl>
            <FormControl>
              <FormLabel
                fontSize={"14px"}
                color={"rgba(102, 112, 133, 1)"}
                marginBottom={"4px"}
              >
                Country
              </FormLabel>
              <SearchSelect
                name="country selector"
                options={Options}
                placeholder="Country"
                variant="outline"
                useBasicStyles 
              />
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BusinessInfoForm;
