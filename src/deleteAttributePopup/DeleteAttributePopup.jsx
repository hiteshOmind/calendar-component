import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import deleteAttributeSvg from "./deleteAttribute.svg";
import { useEffect, useState } from "react";

function DeleteAttributePopup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <div>
      <Button
        width={"95px"}
        _hover={{ backgroundColor: "none" }}
        variant={"outline"}
        onClick={onOpen}
      >
        <Box
          display={"flex"}
          justifyContent={"cneter"}
          alignItems={"center"}
          gap={"8px"}
        >
          <Text>Open</Text>
        </Box>
      </Button>
      <Modal
        size={"sm"}
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody
            display={"flex"}
            flexDir={"column"}
            gap={"16px"}
            padding={"24px 24px"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}
              gap={"20px"}
            >
              <Box>
                <img src={deleteAttributeSvg} alt="delete attribute svg" />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"8px"}
                flexDir={"column"}
              >
                <Text fontSize={20} fontWeight={600} color={"#101828"}>
                  Delete Attributes
                </Text>
                <Text textAlign={"center"} fontSize={14} fontWeight={400} color={"#667085"}>
                  Are you sure you want to delete this Attributes? This action
                  cannot be undone.
                </Text>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter
            padding={"8px 24px 16px 24px"}
            gap={"12px"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Button
              width={"170px"}
              border={"1px solid #D0D5DD"}
              height={"40px"}
              variant={"outline"}
              fontSize={14}
              fontWeight={600}
              ref={cancelRef}
              onClick={handleCancelClick}
            >
              Discard
            </Button>
            <Button
              width={"170px"}
              color="#fff"
              padding={"10px 16px"}
              variant={"solid"}
              fontSize={14}
              _hover={{ backgroundColor: "#D92d20" }}
              fontWeight={600}
              backgroundColor={"#D92D20"}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default DeleteAttributePopup;
