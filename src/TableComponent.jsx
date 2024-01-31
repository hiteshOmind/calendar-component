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
import { ArrowDownIcon } from "@chakra-ui/icons";

function TableComponent() {
  return (
    <div>
      <TableWithPagination showCheckbox={true} />
    </div>
  );
}

export default TableComponent;

const header = {
  name: "Full Name",
  mobile: "Mobile Number",
  email: "Email",
  addedOn: "Contact Added On",
  lastKnownSource: "Last Known Source",
  recentcampaign: "Recent Campaign",
};

export const TableWithPagination = ({ checkBoxTable = false }) => {
  const [data, setData] = useState([
    {
      imgUrl: "http://placehold.it/32x32",
      name: "Ingrid Frederick",
      email: "ingridfrederick@corecom.com",
      phone: "+1 (930) 496-2179",
      addedOn: "Fri Sep 15 1978 12:17:17 GMT+0530 (India Standard Time)",
      lastKnownSource: "Gloucester",
      recentCampaign:
        "Non dolor anim veniam duis occaecat voluptate ex consectetur quis consectetur aliqua proident. Dolor cillum eu incididunt dolore sit amet pariatur ullamco.",
    },
    {
      imgUrl: "http://placehold.it/32x32",
      name: "Silvia Hunt",
      email: "silviahunt@corecom.com",
      phone: "+1 (923) 451-2385",
      addedOn: "Wed Mar 03 2021 14:15:03 GMT+0530 (India Standard Time)",
      lastKnownSource: "Villarreal",
      recentCampaign:
        "Est anim minim consectetur tempor consequat officia qui labore adipisicing consectetur. Fugiat duis aute excepteur elit voluptate non duis incididunt quis quis.",
    },
    {
      imgUrl: "http://placehold.it/32x32",
      name: "Lauri Estes",
      email: "lauriestes@corecom.com",
      phone: "+1 (821) 527-3839",
      addedOn: "Wed Aug 08 1973 17:09:09 GMT+0530 (India Standard Time)",
      lastKnownSource: "Gorst",
      recentCampaign:
        "Do do cupidatat tempor ullamco sint aliquip ex eiusmod est dolore amet aute elit. Magna est ut sit cillum incididunt et ipsum exercitation aute ea sint ea.",
    },
    {
      imgUrl: "http://placehold.it/32x32",
      name: "Maura Whitney",
      email: "maurawhitney@corecom.com",
      phone: "+1 (906) 575-3073",
      addedOn: "Sat Dec 31 1977 00:58:35 GMT+0530 (India Standard Time)",
      lastKnownSource: "Maybell",
      recentCampaign:
        "Cillum magna minim elit labore. Quis qui mollit cillum nostrud dolore aliquip ullamco laborum exercitation.",
    },
    {
      imgUrl: "http://placehold.it/32x32",
      name: "Dominique Burnett",
      email: "dominiqueburnett@corecom.com",
      phone: "+1 (968) 440-2715",
      addedOn: "Sun Apr 26 1987 22:53:28 GMT+0530 (India Standard Time)",
      lastKnownSource: "Masthope",
      recentCampaign:
        "Fugiat proident Lorem commodo Lorem deserunt do mollit commodo sunt. Laborum duis dolore deserunt duis sit laboris occaecat.",
    },
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
        <Thead color="475467">
          <Tr style={{ backgroundColor: "rgba(249, 250, 251, 1)" }}>
            <Th paddingLeft={"16px"} borderTopLeftRadius={10}>
              <Box style={{ display: "flex" }} gap={3}>
                {checkBoxTable ? (
                  <Checkbox
                    isChecked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                ) : (
                  ""
                )}
                <Text fontSize={12} textTransform={"none"} fontWeight={500}>
                  {header.name}
                </Text>
              </Box>
            </Th>
            <Th>
              <Text fontSize={12} textTransform={"none"} fontWeight={500}>
                {header.mobile}
              </Text>
            </Th>
            <Th>
              <Text fontSize={12} textTransform={"none"} fontWeight={500}>
                {header.email}
              </Text>
            </Th>
            <Th>
              <Text fontSize={12} textTransform={"none"} fontWeight={500}>
                {header.addedOn}
              </Text>
            </Th>
            <Th>
              <Text fontSize={12} textTransform={"none"} fontWeight={500}>
                {header.lastKnownSource}
              </Text>
            </Th>
            <Th>
              <Text fontSize={12} textTransform={"none"} fontWeight={500}>
                {header.recentcampaign}
              </Text>
            </Th>
            <Th borderTopRightRadius={10}></Th>
          </Tr>
        </Thead>
        <Tbody color={"#667085"}>
          {currentItems.map((item, index) => (
            <Tr key={index}>
              <Td paddingLeft={"16px"}>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Avatar width={"32px"} height={"32px"} src="" />
                  <Box>
                    <Text fontSize={14} textTransform={"none"} fontWeight={400}>
                      {item.name}
                    </Text>
                  </Box>
                </Box>
              </Td>
              <Td>
                <Text fontSize={14} textTransform={"none"} fontWeight={400}>
                  {item.phone}
                </Text>
              </Td>

              <Td>
                <Text fontSize={14} textTransform={"none"} fontWeight={400}>
                  {item.email}
                </Text>
              </Td>
              <Td>
                <Text fontSize={14} textTransform={"none"} fontWeight={400}>
                  {formatDate(item.addedOn)}
                </Text>
              </Td>
              <Td>
                <Text fontSize={14} textTransform={"none"} fontWeight={400}>
                  {item.lastKnownSource}
                </Text>
              </Td>
              <Td>
                <Box style={{display:"flex", alignItems:"center", gap:"8px"}}>

                <Icon mt={1} width={"20px"} height={"20px"} fill={"none"}>
                    <path
                      d="M18.3337 4.99967C18.3337 4.08301 17.5837 3.33301 16.667 3.33301H3.33366C2.41699 3.33301 1.66699 4.08301 1.66699 4.99967M18.3337 4.99967V14.9997C18.3337 15.9163 17.5837 16.6663 16.667 16.6663H3.33366C2.41699 16.6663 1.66699 15.9163 1.66699 14.9997V4.99967M18.3337 4.99967L10.0003 10.833L1.66699 4.99967"
                      stroke="#667085"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                </Icon>
                <Text
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "170px",
                  }}
                  fontSize={14}
                  textTransform={"none"}
                  fontWeight={400}
                >
                  {item.recentCampaign}
                </Text>

                </Box>
              </Td>
              <Td paddingRight={"16px"}>
                <Text
                  fontSize={14}
                  color={"#126E36"}
                  textTransform={"none"}
                  fontWeight={600}
                >
                  View
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

function formatDate(inputDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(inputDate);
  // Get the day, month, and year
  const day = date.getDate();
  const monthIndex = date.getMonth(); // Note: Month starts from 0
  const year = date.getFullYear();

  // Format the date
  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  return formattedDate;
}
