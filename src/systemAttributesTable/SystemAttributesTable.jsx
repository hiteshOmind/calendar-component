import React from "react";
import { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Text,
  Td,
  Checkbox,
  PopoverTrigger,
  Popover,
  PopoverContent,
} from "@chakra-ui/react";
import Pagination from "../Pagination";
import BurgerMenuImg from "./burgerMenu.svg"
import editIcon from "./editIcon.svg"
import eyeIcon from "./eyeIcon.svg"
import closeEyeIcon from "./closeEyeIcon.svg"

function SystemAttributesTablecomponent() {
  return (
    <div>
      <TableWithPagination showCheckbox={true} />
    </div>
  );
}

export default SystemAttributesTablecomponent;

const header = [
  "Default Label Name",
  "Variable",
  "Status",
  "Data Type",
  "PII",
  "",
];

export const TableWithPagination = () => {
  const [data, setData] = useState([
    {
      id: 1,
      label: "Lorem ipsum dolor sit",
      uniqueIdentifier: true,
      variable: "visitor_first_name",
      status: true,
      dataType: "String",
      isPii: "Marked PII",
      isChecked: true,
    },
    {
      id: 2,
      label: "Lorem ipsum dolor sit",
      uniqueIdentifier: false,
      variable: "visitor_first_name",
      status: false,
      dataType: "String",
      isPii: "Not PII",
      isChecked: false,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleCheckboxChange = (id) => {
    // Your logic to handle individual checkbox change
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      }
      return item;
    });

    // Update your data state or perform any other action based on your application's logic
    setData(updatedData);
  };

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);

    const updatedData = data.map((item) => ({
      ...item,
      isChecked: !selectAll, // Toggle based on the current state of selectAll
    }));

    setData(updatedData);
  };

  return (
    <Box border={"1px solid rgba(234, 236, 240, 1)"} borderRadius={10}>
      <Table>
        <Thead>
          <Tr style={{ backgroundColor: "rgba(249, 250, 251, 1)" }}>
            {header.map((e, index) => (
              <Th
                key={index}
                paddingLeft={index === 0 ? "16px" : "16px"}
                borderTopLeftRadius={10}
              >
                {index === 0 ? (
                  <Box style={{ display: "flex" }} gap={3}>
                    {" "}
                    <CustomCheckBox
                      isChecked={selectAll}
                      onChange={handleSelectAllChange}
                    />
                    <Text fontSize={12} textTransform={"none"} fontWeight={500}>
                      {e}
                    </Text>
                  </Box>
                ) : (
                  <Text fontSize={12} textTransform={"none"} fontWeight={500}>
                    {e}
                  </Text>
                )}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td
                paddingLeft={"16px"}
                position="relative"
                style={{ position: "sticky", left: 0 }}
              >
                <Box style={{ display: "flex" }} gap={3}>
                  <CustomCheckBox
                    isChecked={item.isChecked}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <Text>{item?.label}</Text>
                  {item.uniqueIdentifier ? (
                    <Text
                      fontSize={12}
                      fontWeight={500}
                      borderRadius={"16px"}
                      padding="2px 8px"
                      color="#fff"
                      bgColor={"#1D2939"}
                    >
                      Unique Identifier
                    </Text>
                  ) : null}
                </Box>
              </Td>
              <Td paddingLeft={"16px"}>
                <Text fontSize={14} textTransform={"none"} fontWeight={400}>
                  {item?.variable}
                </Text>
              </Td>
              <Td paddingLeft={"16px"}>
                <Text
                  color="#fff"
                  width={"fit-content"}
                  padding="2px 8px"
                  backgroundColor={item?.status ? "#12B76A" : "#667085"}
                  borderRadius={"16px"}
                  fontSize={12}
                  textTransform={"none"}
                  fontWeight={500}
                >
                  {item?.status ? "Enable" : "Disable"}
                </Text>
              </Td>
              <Td paddingLeft={"16px"}>
                <Text fontSize={14} textTransform={"none"} fontWeight={400}>
                  {item.dataType}
                </Text>
              </Td>
              <Td paddingLeft={"16px"}>
                <Text fontSize={14} textTransform={"none"} fontWeight={400}>
                  {item.isPii}
                </Text>
              </Td>
              <Td paddingLeft={"16px"}>
                <Text
                  fontSize={14}
                  textTransform={"none"}
                  fontWeight={400}
                ><BurgerMenu id={item.id} enabled={item.status} key={item.id} /></Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box
        flex
        justifyContent={"center"}
        alignItems={"center"}
        padding={"12px 16px 16px 16px"}
      >
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handleChangePage}
        />
      </Box>
    </Box>
  );
};

const CustomCheckBox = (props) => {
  return (
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
      iconColor="#23CE6B"
      {...props}
    />
  );
};

const BurgerMenu = (props) => {

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    // your id here
    console.log(props.id)

    //handle functions here
    const handleEdit = () => {
        handleClose()
    }

    // enable disable logic below
    const handleEnableDisable = () =>{
       if(props.enabled){

        handleClose()
       }else{

        handleClose()
       } 
    }

  return (
    <>
      <Popover {...props}>
        <PopoverTrigger>
          <img onClick={()=>setOpen(!open)} style={{cursor:"pointer"}} alt="burger menu" src={BurgerMenuImg}></img>
        </PopoverTrigger>
        <PopoverContent width="118px">
         <Box cursor={"pointer"} onClick={handleEnableDisable} gap={"8px"} display={"flex"} alignItems={"center"} padding={"8px 14px"}>
            <img src={props.enabled ? closeEyeIcon : eyeIcon } alt="enable or disable" />
            <Text>{props.enabled ? "Disable" : "Enable"}</Text>
         </Box>
         <Box cursor={"pointer"} onClick={handleEdit} gap={"8px"} display={"flex"} alignItems={"center"} padding={"8px 14px"}>
            <img src={editIcon} alt="editIcon"/>
            <Text>Edit</Text>
         </Box>
        </PopoverContent>
      </Popover>
    </>
  );
};
