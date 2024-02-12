import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  Button,
  FormLabel,
  Text,
  useDisclosure,
  Input,
  Textarea,
  Switch,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { CustomSelectDropDown } from "../customSelectDropDown/CustomSelectDropDown";

function AddAttributePopup(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const [labelName, setlabelName] = useState("");
  const [description, setdescription] = useState("");
  const [dataType, setdataType] = useState("");
  const [markPII, setmarkPII] = useState(false);
  const [enableStatus, setenableStatus] = useState(false);

  const handleCancelClick = () => {
    setdataType("");
    setdescription("");
    setlabelName("");
    setenableStatus(false);
    setmarkPII(false);
    onClose();
  };

  return (
    <div>
      <Button
        leftIcon={<AddIcon />}
        backgroundColor={"#072B15"}
        color="#fff"
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
          <Text fontSize={"14px"} fontWeight={600}>
            Add Attribute
          </Text>
        </Box>
      </Button>
      <Modal
        size={"md"}
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            padding={"24px 32px 16px 32px"}
            fontSize={20}
            fontWeight={600}
          >
            Add Attribute
          </ModalHeader>
          <ModalCloseButton mt={2} color={"#101828"} />
          <ModalBody
            display={"flex"}
            flexDir={"column"}
            gap={"16px"}
            padding={"24px 32px"}
          >
            <Box>
              <FormLabel
                fontSize={"14px"}
                fontWeight={500}
                marginBottom={"4px"}
                color="#667085"
              >
                Default Label Name
              </FormLabel>
              <Input
                value={labelName}
                onChange={(e) => setlabelName(e.target.value)}
                variant="outline"
                placeholder="Label Name"
              />
            </Box>

            <Box display={"flex"} alignItems={"center"} gap="16px">
              <Text fontSize={16} fontWeight={500} color="#667085">
                Variable Name
              </Text>
              <Text fontSize={16} fontWeight={500} color={"#101828"}>
                {labelName}
              </Text>
            </Box>
            <Box>
              <FormLabel
                fontSize={14}
                fontWeight={500}
                marginBottom={"4px"}
                color="#667085"
              >
                Description
              </FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                height={"68px"}
              />
            </Box>

            <Box>
              <FormLabel
                fontSize={14}
                fontWeight={500}
                marginBottom={"4px"}
                color="#667085"
              >
                Data Type
              </FormLabel>
              <CustomSelectDropDown
                options={DataTypeOptions}
                key={"Data Type"}
                isSearchable={false}
                useBasicStyles
                multiInputValues={dataType}
                setMultiInputValues={setdataType}
                isMulti={false}
              />
            </Box>
            <Box
              borderRadius={"4px"}
              padding={"16px 12px"}
              display={"flex"}
              alignItems={"center"}
              border={"1px solid #D0D5DD"}
              justifyContent={"space-between"}
            >
              <Text
                fontSize={14}
                fontWeight={500}
                color="#667085"
                marginBottom={0}
              >
                Mark Attributes PII
              </Text>
              <CustomSwitch />
            </Box>
            <Box
              borderRadius={"4px"}
              padding={"16px 12px"}
              border={"1px solid #D0D5DD"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text
                marginBottom={0}
                fontSize={14}
                fontWeight={500}
                color="#667085"
              >
                Enable Status
              </Text>
              <CustomSwitch />
            </Box>
            {props.hasUniqueAttribute ? (
              <Box
                borderRadius={"4px"}
                padding={"16px 12px"}
                border={"1px solid #D0D5DD"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text
                  marginBottom={0}
                  fontSize={14}
                  fontWeight={500}
                  color="#667085"
                >
                  Mark Unique Identifier
                </Text>
                <CustomSwitch />
              </Box>
            ) : (
              ""
            )}
          </ModalBody>
          <ModalFooter
            padding={"16px 32px"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Button
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
              border={"1px solid #072B1580"}
              color="#fff"
              _hover={{ backgroundColor: "#072B15" }}
              padding={"10px 16px"}
              variant={"solid"}
              fontSize={14}
              fontWeight={600}
              backgroundColor={"#072B1580"}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AddAttributePopup;

const CustomSwitch = (props) => {
  const customTheme = extendTheme({
    colors: {
      customColor: {
        500: "#23CE6B", // You can replace this with your custom color
      },
    },
  });
  return (
    <ChakraProvider theme={customTheme}>
      <Switch colorScheme="customColor" {...props} />
    </ChakraProvider>
  );
};

const DataTypeOptions = [
  {
    label: "String",
    value: "String",
    index: 0,
  },
  {
    label: "Boolean",
    value: "Boolean",
    index: 1,
  },
  {
    label: "Date",
    value: "Date",
    index: 3,
  },
  {
    label: "Number",
    value: "Number",
    index: 4,
  },
];
