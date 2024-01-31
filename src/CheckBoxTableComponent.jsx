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
  Icon,
  Avatar,
} from "@chakra-ui/react";
import Pagination from "./Pagination";
import { MdDelete } from "react-icons/md";

function TableComponent() {
  return (
    <div>
      <TableWithPagination showCheckbox={true} />
    </div>
  );
}

export default TableComponent;

const header = {
  listName: "List Name",
  contacts: "Contacts",
  createdBy: "Created By",
  createdDate: "Created Date",
  icon: <MdDelete />,
};

export const TableWithPagination = () => {
  const [data, setData] = useState([
    {
      id: 1,
      listName: "John Doe",
      contact: "+91 8308058537",
      createdBy: { name: "Hitesh", imgUrl: "" },
      createdDate: "20 July 2023",
      icon: <MdDelete />,
      isChecked: false,
    },
    {
      id: 2,
      listName: "John Doe",
      contact: "+91 8308058537",
      createdBy: { name: "Hitesh", imgUrl: "" },
      createdDate: "20 July 2023",
      icon: <MdDelete />,
      isChecked: false,
    },
    {
      id: 3,
      listName: "John Doe",
      contact: "+91 8308058537",
      createdBy: { name: "Hitesh", imgUrl: "" },
      createdDate: "20 July 2023",
      icon: <MdDelete />,
      isChecked: false,
    },
    {
      id: 4,
      listName: "John Doe",
      contact: "+91 8308058537",
      createdBy: { name: "Hitesh", imgUrl: "" },
      createdDate: "20 July 2023",
      icon: <MdDelete />,
      isChecked: false,
    },
    {
      id: 5,
      listName: "John Doe",
      contact: "+91 8308058537",
      createdBy: { name: "Hitesh", imgUrl: "" },
      createdDate: "20 July 2023",
      icon: <MdDelete />,
      isChecked: false,
    },
    {
      id: 6,
      listName: "John Doe",
      contact: "+91 8308058537",
      createdBy: { name: "Hitesh", imgUrl: "" },
      createdDate: "20 July 2023",
      icon: <MdDelete />,
      isChecked: false,
    },
    {
      id: 7,
      listName: "John Doe",
      contact: "+91 8308058537",
      createdBy: { name: "Hitesh", imgUrl: "" },
      createdDate: "20 July 2023",
      icon: <MdDelete />,
      isChecked: false,
    },
    {
      id: 8,
      listName: "John Doe",
      contact: "+91 8308058537",
      createdBy: { name: "Hitesh", imgUrl: "" },
      createdDate: "20 July 2023",
      icon: <MdDelete />,
      isChecked: false,
    },
    {
      id: 9,
      listName: "John Doe",
      contact: "+91 8308058537",
      createdBy: { name: "Hitesh", imgUrl: "" },
      createdDate: "20 July 2023",
      icon: <MdDelete />,
      isChecked: false,
    },
    // Add more dummy data as needed
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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
            <Th paddingLeft={"16px"} borderTopLeftRadius={10}>
              <Box style={{ display: "flex" }} gap={3}>
                <Checkbox
                  isChecked={selectAll}
                  onChange={handleSelectAllChange}
                />
                <Text fontSize={12} textTransform={"none"} fontWeight={500}>
                  {header.listName}
                </Text>
              </Box>
            </Th>
            <Th>
              <Text fontSize={12} textTransform={"none"} fontWeight={500}>
                {header.contacts}
              </Text>
            </Th>
            <Th>
              <Text fontSize={12} textTransform={"none"} fontWeight={500}>
                {header.createdBy}
              </Text>
            </Th>
            <Th>
              <Text fontSize={12} textTransform={"none"} fontWeight={500}>
                {header.createdDate}{" "}
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.00016 3.33301V12.6663M8.00016 12.6663L12.6668 7.99967M8.00016 12.6663L3.3335 7.99967"
                      stroke="#475467"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Icon>
              </Text>
            </Th>
            <Th borderTopRightRadius={10}></Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((item) => (
            <Tr key={item.id}>
              <Td
                paddingLeft={"16px"}
                position="relative"
                width={"300px"}
                style={{ position: "sticky", left: 0 }}
              >
                <Box style={{ display: "flex" }} gap={3}>
                  <Checkbox
                    isChecked={item.isChecked}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <Text>{header.listName}</Text>
                </Box>
              </Td>
              <Td>
                <Text fontSize={14} textTransform={"none"} fontWeight={400}>
                  {item.contact}
                </Text>
              </Td>
              <Td>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Avatar src="" />
                  <Box>
                    <Text fontSize={14} textTransform={"none"} fontWeight={400}>
                      {item.createdBy.name}
                    </Text>
                    <Text fontSize={14} textTransform={"none"} fontWeight={400}>
                      olivia@untitledui.com
                    </Text>
                  </Box>
                </Box>
              </Td>
              <Td>
                <Text fontSize={14} textTransform={"none"} fontWeight={400}>
                  {item.createdDate}
                </Text>
              </Td>
              <Td>
                <Text fontSize={14} textTransform={"none"} fontWeight={400}>
                  {item.icon}
                </Text>
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
