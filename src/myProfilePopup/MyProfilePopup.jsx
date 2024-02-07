import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Avatar,
  Box,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import usersvg from "./userSvg.svg";
import passwordKeySvg from "./passwordKey.svg";
import logoutSvg from "./logoutSvg.svg";

function MyProfilePopup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Popover>
        <PopoverTrigger onClick={isOpen ? onClose : onOpen}>
          <Button
            width={"fit-content"}
            borderRadius={"50%"}
            variant="link"
            onClick={onOpen}
            variantColor="pink"
          >
            <Avatar></Avatar>
          </Button>
        </PopoverTrigger>
        <PopoverContent width={"195px"}>
          <PopoverBody padding={0} margin={0}>
            <Box
              cursor={"pointer"}
              // onClick={handleEnableDisable}
              gap={"8px"}
              display={"flex"}
              alignItems={"center"}
              padding={"8px 12px"}
            >
              <img src={usersvg} alt="enable or disable" />
              <Text fontSize={16} fontWeight={500} color={"#101828"}>
                Profile
              </Text>
            </Box>
            <Box
              cursor={"pointer"}
              // onClick={handleEnableDisable}
              gap={"8px"}
              display={"flex"}
              alignItems={"center"}
              padding={"8px 12px"}
            >
              <img src={passwordKeySvg} alt="enable or disable" />
              <Text fontSize={16} fontWeight={500} color={"#101828"}>
                Change Password
              </Text>
            </Box>{" "}
            <Box
              cursor={"pointer"}
              // onClick={handleEnableDisable}
              gap={"8px"}
              display={"flex"}
              alignItems={"center"}
              padding={"8px 12px"}
            >
              <img src={logoutSvg} alt="enable or disable" />
              <Text fontSize={16} fontWeight={500} color={"#101828"}>
                Logout
              </Text>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default MyProfilePopup;
