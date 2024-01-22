import React from "react";
import { FiBriefcase } from "react-icons/fi";
import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,InputGroup,InputLeftAddon
} from "@chakra-ui/react";
import LogoUploader from "./DragAndDropBox";

function BusinessDeatailForm() {
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
            <FiBriefcase size={20} color="rgba(11, 69, 34, 1)" />
          </Box>
          <Box>
            <Text fontSize={16} fontWeight0={500}>
              Business Details
            </Text>
            <Text
              fontSize={14}
              fontWeight={400}
              color={"rgba(102, 112, 133, 1)"}
            >
              Setup your business account by entering following information  
            </Text>
          </Box>
        </Box>
        <Box mt={"40px"} display={"flex"} justifyContent={"space-between"} gap={"48px"}>
          <Box display={"flex"} justifyContent={"space-between"} width={"337px"} gap={"16px"}>
            <LogoUploader/>
          </Box>
          <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"16px"}>
            <FormControl>
              <FormLabel fontSize={"14px"} marginBottom={"4px"} color={"rgba(102, 112, 133, 1)"}>Company Name</FormLabel>
              <Input variant="outline" placeholder="Enter compnay name" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={"14px"} marginBottom={"4px"} color={"rgba(102, 112, 133, 1)"}>Company Website</FormLabel>
              <InputGroup>
                <InputLeftAddon children="https://"/>
                <Input variant="outline" placeholder="Paste company url" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={"14px"} marginBottom={"4px"} color={"rgba(102, 112, 133, 1)"}>Industry</FormLabel>
              <Input variant="outline" placeholder="Write industry" />
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BusinessDeatailForm;
