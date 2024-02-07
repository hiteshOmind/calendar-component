import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import markAllReadsvg from "./MarkAllReadSvg.svg";
import notificationBellsvg from "./notificationBell.svg";

function NotificationPopup({children, newNotification}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMarkAllRead = () => {};

  return (
    <>
      <Box cursor={"pointer"} width={"fit-content"} position={"relative"} onClick={onOpen}>
        {newNotification ? <Box border={"1px solid #FDA29B"} position={"absolute"} top={0} right={0.5} borderRadius={"50%"} width={"8px"} height={"8px"} variant={"solid"} bgColor="#F04438"></Box> :<></>}
        <img src={notificationBellsvg} alt="view notifications" />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody padding={"12px 16px"}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text fontSize={16} fontWeight={500} color="#101828">
                Notification
              </Text>
              <Box
                onClick={handleMarkAllRead}
                gap={"4px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                cursor={"pointer"}
              >
                {" "}
                <Text fontSize={14} fontWeight={500} color={"#101828"}>
                  Mark all as read{" "}
                </Text>
                <img src={markAllReadsvg} alt="mark all read" />
              </Box>
            </Box>
            <Box mt={"16px"}>
                {children}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NotificationPopup;
