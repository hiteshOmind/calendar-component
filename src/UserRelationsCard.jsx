import { Box, Card, Text } from "@chakra-ui/react";
import React from "react";

function UserRelationsCard({
  revenue,
  lastSeen,
  firstOrderDate,
  LastOrderDate,
}) {
  return (
    <Card>
      <Box
        display={"flex"}
        gap={"12px"}
        padding={"24px 16px 24px 16px"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Box
          display={"flex"}
          gap={"8px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            backgroundColor={"rgba(242, 244, 247, 1)"}
            width={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1819_6686)">
                <path
                  d="M8 0.666992V15.3337M11.3333 3.33366H6.33333C5.71449 3.33366 5.121 3.57949 4.68342 4.01708C4.24583 4.45466 4 5.04815 4 5.66699C4 6.28583 4.24583 6.87932 4.68342 7.31691C5.121 7.75449 5.71449 8.00033 6.33333 8.00033H9.66667C10.2855 8.00033 10.879 8.24616 11.3166 8.68374C11.7542 9.12133 12 9.71482 12 10.3337C12 10.9525 11.7542 11.546 11.3166 11.9836C10.879 12.4212 10.2855 12.667 9.66667 12.667H4"
                  stroke="#475467"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1819_6686">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
          <Box>
            <Text
              fontSize={"13px"}
              fontWeight={500}
              color={"rgba(102, 112, 133, 1)"}
            >
              Life Time Revenue{" "}
            </Text>
            <Text
              fontSize={"18px"}
              fontWeight={500}
              color={"rgba(16, 24, 40, 1)"}
            >
              {revenue}
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          gap={"8px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            backgroundColor={"rgba(242, 244, 247, 1)"}
            width={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1819_6693)">
                <path
                  d="M0.666016 8.00033C0.666016 8.00033 3.33268 2.66699 7.99935 2.66699C12.666 2.66699 15.3327 8.00033 15.3327 8.00033C15.3327 8.00033 12.666 13.3337 7.99935 13.3337C3.33268 13.3337 0.666016 8.00033 0.666016 8.00033Z"
                  stroke="#475467"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99935 10.0003C9.10392 10.0003 9.99935 9.10489 9.99935 8.00033C9.99935 6.89576 9.10392 6.00033 7.99935 6.00033C6.89478 6.00033 5.99935 6.89576 5.99935 8.00033C5.99935 9.10489 6.89478 10.0003 7.99935 10.0003Z"
                  stroke="#475467"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1819_6693">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
          <Box>
            <Text
              fontSize={"13px"}
              fontWeight={500}
              color={"rgba(102, 112, 133, 1)"}
            >
              Last Seen
            </Text>
            <Text
              fontSize={"18px"}
              fontWeight={500}
              color={"rgba(16, 24, 40, 1)"}
            >
              {lastSeen}
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          gap={"8px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            backgroundColor={"rgba(242, 244, 247, 1)"}
            width={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 6.26693L5 2.80693M2.18 4.64026L8 8.00693L13.82 4.64026M8 14.7203V8.00026M14 10.6669V5.33359C13.9998 5.09978 13.938 4.87013 13.821 4.6677C13.704 4.46527 13.5358 4.29717 13.3333 4.18026L8.66667 1.51359C8.46397 1.39657 8.23405 1.33496 8 1.33496C7.76595 1.33496 7.53603 1.39657 7.33333 1.51359L2.66667 4.18026C2.46418 4.29717 2.29599 4.46527 2.17897 4.6677C2.06196 4.87013 2.00024 5.09978 2 5.33359V10.6669C2.00024 10.9007 2.06196 11.1304 2.17897 11.3328C2.29599 11.5353 2.46418 11.7034 2.66667 11.8203L7.33333 14.4869C7.53603 14.604 7.76595 14.6656 8 14.6656C8.23405 14.6656 8.46397 14.604 8.66667 14.4869L13.3333 11.8203C13.5358 11.7034 13.704 11.5353 13.821 11.3328C13.938 11.1304 13.9998 10.9007 14 10.6669Z"
                stroke="#475467"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
          <Box>
            <Text
              fontSize={"13px"}
              fontWeight={500}
              color={"rgba(102, 112, 133, 1)"}
            >
              First Order
            </Text>
            <Text
              fontSize={"18px"}
              fontWeight={500}
              color={"rgba(16, 24, 40, 1)"}
            >
              {firstOrderDate}
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          gap={"8px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            backgroundColor={"rgba(242, 244, 247, 1)"}
            width={"40px"}
            height={"40px"}
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1819_6707)">
                <path
                  d="M13.9993 5.33333V14H1.99935V5.33333M6.66602 8H9.33268M0.666016 2H15.3327V5.33333H0.666016V2Z"
                  stroke="#475467"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1819_6707">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
          <Box>
            <Text
              fontSize={"13px"}
              fontWeight={500}
              color={"rgba(102, 112, 133, 1)"}
            >
              Last Order
            </Text>
            <Text
              fontSize={"18px"}
              fontWeight={500}
              color={"rgba(16, 24, 40, 1)"}
            >
              {LastOrderDate}
            </Text>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default UserRelationsCard;
