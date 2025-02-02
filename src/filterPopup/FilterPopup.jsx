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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import img from "./filter.svg";
import { Select as RSelect } from "chakra-react-select";
import { CustomSelectDropDown } from "../customSelectDropDown/CustomSelectDropDown";

function FilterPopup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const [status, setStatus] = useState("");
  const [pii, setPii] = useState("");
  const [dataType, setDataType] = useState("");


  const handleCancelClick = () =>{
    setStatus("")
    setPii("")
    setDataType("")
    onClose()
  }



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
          <img alt="source filter" src={img}></img> <Text>Filter</Text>
        </Box>
      </Button>
      <Modal
        size={"xl"}
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader padding={"24px 32px 16px 32px"} fontSize={20} fontWeight={600}>
            Filter
          </ModalHeader>
          <ModalCloseButton mt={2} color={"#101828"} />
          <ModalBody padding={"24px 32px"}>
            <Box
              display={"flex"}
              gap="16px"
              width={"100%"}
              flexDirection="column"
            >
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                gap={"16px"}
              >
                <Box width={"241px"}>
                  <FormLabel
                    fontSize={14}
                    fontWeight={500}
                    marginBottom={"4px"}
                    color="#667085"
                  >
                    Status
                  </FormLabel>
                  <CustomSelectDropDown
                    options={StatusOptions}
                    key={"status"}
                    isSearchable={false}
                    useBasicStyles
                    multiInputValues={status}
                    setMultiInputValues={setStatus}
                    isMulti={false}
                  />
                </Box>
                <Box width={"241px"}>
                  <FormLabel
                    fontSize={14}
                    fontWeight={500}
                    marginBottom={"4px"}
                    color="#667085"
                  >
                    Data Type
                  </FormLabel>
                  <CustomSelectDropDown
                    key={"data type"}
                    isSearchable={false}
                    useBasicStyles
                    options={DataTypeOptions}
                    multiInputValues={dataType}
                    setMultiInputValues={setDataType}
                    isMulti={false}
                  />
                </Box>
              </Box>
              <Box width={"241px"}>
                <FormLabel
                  fontSize={14}
                  fontWeight={500}
                  marginBottom={"4px"}
                  color="#667085"
                >
                  PII
                </FormLabel>
                <CustomSelectDropDown
                  options={PIIOptions}
                  key={"pii"}
                  isSearchable={false}
                  useBasicStyles
                  multiInputValues={pii}
                  setMultiInputValues={setPii}
                  isMulti={false}
                />
              </Box>
            </Box>
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
              Clear Filter
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
              Apply Filter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default FilterPopup;


const StatusOptions = [
  {
    label: "Enabled",
    value: "Enabled",
    index: 0,
  },
  {
    label: "Disabled",
    value: "Disabled",
    index: 1,
  },
];

const PIIOptions = [
  {
    label: "Defined",
    value: "Defined",
    index: 0,
  },
  {
    label: "Not Defined",
    value: "Not Defined",
    index: 1,
  },
];

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
