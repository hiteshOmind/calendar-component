import { Box, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import React, { useEffect, useState } from "react";
import convertedLanguages from "./convertLanguages";

function LeftFixedUserProfile({
  name = "",
  mobileNumber = "",
  email = "",
  language = "",
  timeZone = "",
  addedOn = "",
  editing = false,
  editEmail,
  setEditEmail,
  editMobile,
  setEditMobile,
  editLanguage,
  setEditLanguage,
}) {
  const leftSideUserData = [
    {
      item: "Last Source",
      description: name,
    },
    {
      item: "Mobile Number",
      description: mobileNumber,
      editable: true,
    },
    {
      item: "Email Address",
      description: email,
      editable: true,
    },
    {
      item: "Language",
      description: language,
      editable: true,
    },
    {
      item: "Time Zone",
      description: timeZone,
    },
    {
      item: "Added On",
      description: addedOn,
    },
  ];

  const handleEditChange = (e,data) => {
    if(data?.item === "Mobile Number"){
        setEditMobile(e.target.value)
    }else{
        setEditEmail(e.target.value)
    }
  };

  const getInputValue = (data) => {
    if(data?.item === "Mobile Number"){
        return editMobile
    }else if(data?.item === "Email Address"){
        return editEmail
    }
  };

  const LanguageOptions = convertedLanguages

  const getLanguageIndex = () =>{
    const languageData= LanguageOptions.filter((item) => editLanguage === item.value)
    return languageData[0].index
  }

  const [languageIndex, setlanguageIndex] = useState(getLanguageIndex())


  useEffect(() => {
    getLanguageIndex()
  }, [editLanguage])
  

  const handleSelectChange = (e) =>{
    setEditLanguage(e.value); 
    setlanguageIndex(e.index);
  }

  return (
    <Box maxWidth={"272px"} padding={"24px 32px"}>
      <Flex alignItems={"center"} mt={"12px"} gap={"4px"} mb={"8px"}>
        <Text fontSize={"13px"} fontWeight={500} color="rgba(102, 112, 133, 1)">
          Rechability
        </Text>
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1819_2685)">
            <path
              d="M7.99967 10.6663V7.99967M7.99967 5.33301H8.00634M14.6663 7.99967C14.6663 11.6816 11.6816 14.6663 7.99967 14.6663C4.31778 14.6663 1.33301 11.6816 1.33301 7.99967C1.33301 4.31778 4.31778 1.33301 7.99967 1.33301C11.6816 1.33301 14.6663 4.31778 14.6663 7.99967Z"
              stroke="#667085"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1819_2685">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Flex>

      <Box
        marginTop={"4px"}
        display={"flex"}
        padding={"12px 0px"}
        gap={"8px"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"40px"}
          height={"40px"}
          padding={"8px"}
          borderRadius={"4px"}
          backgroundColor={"rgba(238, 255, 246, 1)"}
        >
          <Icon width={"24px"} height={"24px"}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1819_6571)">
                <path
                  d="M6.60743 2.0332H17.3925C19.9267 2.0332 21.9668 4.0733 21.9668 6.60742V17.3925C21.9668 19.9267 19.9267 21.9667 17.3925 21.9667H6.60743C4.07331 21.9667 2.0332 19.9267 2.0332 17.3925V6.60742C2.0332 4.0733 4.07331 2.0332 6.60743 2.0332Z"
                  fill="url(#paint0_linear_1819_6571)"
                />
                <path
                  d="M6.39978 7.70215C6.29475 7.70215 6.19581 7.72027 6.10216 7.75752L7.97785 9.68858L9.87431 11.6543L9.90891 11.6958L9.96429 11.7512L10.0197 11.8065L10.1304 11.9242L11.7569 13.5922C11.784 13.6091 11.8625 13.6818 11.9238 13.7124C12.0028 13.7519 12.0884 13.7883 12.1766 13.7914C12.2718 13.7948 12.3692 13.7676 12.4548 13.7259C12.519 13.6947 12.5475 13.6499 12.6221 13.5922L14.5047 11.6473L16.4081 9.68858L18.2422 7.79905C18.1245 7.73525 17.9941 7.70215 17.8547 7.70215H6.39978ZM5.8253 7.93748C5.62528 8.127 5.5 8.41193 5.5 8.73343V15.0734C5.5 15.3337 5.58361 15.5702 5.72148 15.7517L5.9845 15.5025L7.94324 13.5992L9.68051 11.9173L9.6459 11.8757L7.74252 9.91699L5.83915 7.95132L5.8253 7.93748ZM18.4914 7.99977L16.6365 9.91699L14.74 11.8757L14.7054 11.9103L16.5119 13.6615L18.4707 15.5648L18.5883 15.6756C18.6938 15.5064 18.7544 15.2979 18.7544 15.0734V8.73343C18.7544 8.44677 18.6551 8.18682 18.4914 7.99977ZM9.90199 12.1457L8.17165 13.8276L6.20598 15.7309L5.95681 15.9732C6.08817 16.0578 6.23766 16.1116 6.39978 16.1116H17.8547C18.0495 16.1116 18.2263 16.0366 18.3738 15.9178L18.2492 15.7932L16.2835 13.8899L14.477 12.1457L12.8505 13.8206C12.7625 13.879 12.7036 13.9437 12.6177 13.9835C12.4793 14.0475 12.3277 14.1016 12.1753 14.0992C12.0225 14.0969 11.8727 14.0371 11.7355 13.9696C11.6667 13.9358 11.63 13.9021 11.5493 13.8345L9.90199 12.1457Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1819_6571"
                  x1="12.1395"
                  y1="21.8867"
                  x2="12.159"
                  y2="2.27385"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#70EFFF" />
                  <stop offset="1" stop-color="#5770FF" />
                </linearGradient>
                <clipPath id="clip0_1819_6571">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(2 2)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Icon>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"40px"}
          height={"40px"}
          padding={"8px"}
          borderRadius={"4px"}
          backgroundColor={"rgba(238, 255, 246, 1)"}
        >
          <Icon width={"24px"} height={"24px"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 23.25C17.799 23.25 22.5 18.549 22.5 12.75C22.5 6.95101 17.799 2.25 12 2.25C6.20101 2.25 1.5 6.95101 1.5 12.75C1.5 14.6332 1.99575 16.4005 2.86386 17.9287L1.5 23.25L6.98615 21.9778C8.47603 22.7891 10.1842 23.25 12 23.25ZM12 21.6346C16.9068 21.6346 20.8846 17.6568 20.8846 12.75C20.8846 7.84316 16.9068 3.86538 12 3.86538C7.09316 3.86538 3.11538 7.84316 3.11538 12.75C3.11538 14.6445 3.70838 16.4006 4.71888 17.8427L3.92308 20.8269L6.95995 20.0677C8.39202 21.0559 10.1284 21.6346 12 21.6346Z"
                fill="#BFC8D0"
              />
              <path
                d="M21 12C21 16.9706 16.9706 21 12 21C10.1041 21 8.34516 20.4138 6.89449 19.4127L3.81818 20.1818L4.62432 17.1588C3.60069 15.698 3 13.9192 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                fill="url(#paint0_linear_1819_6578)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 13.8832 1.99575 15.6505 2.86386 17.1787L1.5 22.5L6.98615 21.2278C8.47603 22.0391 10.1842 22.5 12 22.5ZM12 20.8846C16.9068 20.8846 20.8846 16.9068 20.8846 12C20.8846 7.09316 16.9068 3.11538 12 3.11538C7.09316 3.11538 3.11538 7.09316 3.11538 12C3.11538 13.8945 3.70838 15.6506 4.71888 17.0927L3.92308 20.0769L6.95995 19.3177C8.39202 20.3059 10.1284 20.8846 12 20.8846Z"
                fill="white"
              />
              <path
                d="M9.37502 7.12504C9.12537 6.6236 8.7424 6.668 8.35551 6.668C7.66407 6.668 6.58594 7.49621 6.58594 9.03759C6.58594 10.3008 7.14259 11.6836 9.01831 13.7522C10.8285 15.7485 13.207 16.7812 15.1817 16.7461C17.1563 16.7109 17.5625 15.0117 17.5625 14.4379C17.5625 14.1835 17.4047 14.0566 17.296 14.0221C16.6231 13.6992 15.382 13.0975 15.0996 12.9844C14.8172 12.8714 14.6698 13.0243 14.5781 13.1075C14.3221 13.3515 13.8144 14.0707 13.6406 14.2325C13.4668 14.3942 13.2077 14.3124 13.0999 14.2512C12.7031 14.092 11.6272 13.6134 10.7696 12.7821C9.70899 11.754 9.64675 11.4002 9.44693 11.0854C9.28707 10.8335 9.40437 10.6789 9.46291 10.6114C9.69142 10.3477 10.007 9.94061 10.1485 9.73832C10.29 9.53602 10.1776 9.22889 10.1102 9.03759C9.82033 8.21488 9.57474 7.52618 9.37502 7.12504Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1819_6578"
                  x1="19.875"
                  y1="5.25"
                  x2="3"
                  y2="21"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5BD066" />
                  <stop offset="1" stop-color="#27B43E" />
                </linearGradient>
              </defs>
            </svg>
          </Icon>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"40px"}
          height={"40px"}
          padding={"8px"}
          borderRadius={"4px"}
          backgroundColor={"rgba(238, 255, 246, 1)"}
        >
          <Icon width={"24px"} height={"24px"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10.5"
                fill="url(#paint0_linear_1819_6580)"
              />
              <path
                d="M12 17.25C15.7279 17.25 18.75 14.7316 18.75 11.625C18.75 8.5184 15.7279 6 12 6C8.27208 6 5.25 8.5184 5.25 11.625C5.25 13.5941 6.46417 15.3269 8.30265 16.3319C8.2411 16.832 8.0561 17.4995 7.5 18C8.55159 17.8107 9.39085 17.4303 10.0178 17.0036C10.6446 17.1638 11.3102 17.25 12 17.25Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1819_6580"
                  x1="12"
                  y1="1.5"
                  x2="12"
                  y2="22.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#37BBFE" />
                  <stop offset="1" stop-color="#007DBB" />
                </linearGradient>
              </defs>
            </svg>
          </Icon>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"40px"}
          height={"40px"}
          padding={"8px"}
          borderRadius={"4px"}
          backgroundColor={"rgba(238, 255, 246, 1)"}
        >
          <Icon width={"24px"} height={"24px"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.7C1.5 6.17976 1.5 4.91965 1.99047 3.95704C2.4219 3.11031 3.11031 2.4219 3.95704 1.99047C4.91965 1.5 6.17976 1.5 8.7 1.5H15.3C17.8202 1.5 19.0804 1.5 20.043 1.99047C20.8897 2.4219 21.5781 3.11031 22.0095 3.95704C22.5 4.91965 22.5 6.17976 22.5 8.7V15.3C22.5 17.8202 22.5 19.0804 22.0095 20.043C21.5781 20.8897 20.8897 21.5781 20.043 22.0095C19.0804 22.5 17.8202 22.5 15.3 22.5H8.7C6.17976 22.5 4.91965 22.5 3.95704 22.0095C3.11031 21.5781 2.4219 20.8897 1.99047 20.043C1.5 19.0804 1.5 17.8202 1.5 15.3V8.7Z"
                fill="url(#paint0_linear_1819_6584)"
              />
              <g clip-path="url(#clip0_1819_6584)">
                <path
                  d="M17.6246 14.7675V16.455C17.6252 16.6117 17.5931 16.7667 17.5304 16.9103C17.4676 17.0538 17.3755 17.1826 17.2601 17.2885C17.1447 17.3945 17.0084 17.4751 16.86 17.5253C16.7116 17.5755 16.5543 17.5941 16.3983 17.58C14.6674 17.3919 13.0048 16.8005 11.5439 15.8531C10.1848 14.9895 9.03257 13.8372 8.16894 12.4781C7.2183 11.0107 6.6267 9.33993 6.44207 7.60125C6.42801 7.4457 6.4465 7.28893 6.49635 7.14091C6.5462 6.9929 6.62632 6.85689 6.73162 6.74154C6.83692 6.62619 6.96508 6.53402 7.10795 6.47092C7.25082 6.40781 7.40526 6.37515 7.56144 6.375H9.24894C9.52193 6.37231 9.78657 6.46898 9.99356 6.64699C10.2005 6.82499 10.3357 7.07219 10.3739 7.3425C10.4452 7.88254 10.5773 8.41278 10.7677 8.92313C10.8434 9.12446 10.8598 9.34326 10.8149 9.55362C10.77 9.76398 10.6658 9.95706 10.5146 10.11L9.80019 10.8244C10.6009 12.2326 11.7669 13.3986 13.1752 14.1994L13.8896 13.485C14.0425 13.3338 14.2356 13.2295 14.4459 13.1847C14.6563 13.1398 14.8751 13.1562 15.0764 13.2319C15.5868 13.4223 16.117 13.5544 16.6571 13.6256C16.9303 13.6642 17.1799 13.8018 17.3582 14.0123C17.5366 14.2229 17.6314 14.4916 17.6246 14.7675Z"
                  fill="white"
                />
                <path
                  d="M13.7152 8.0625C14.2646 8.16969 14.7695 8.43839 15.1654 8.83421C15.5612 9.23003 15.8299 9.73496 15.9371 10.2844M13.7152 5.8125C14.8567 5.93931 15.9211 6.45047 16.7337 7.26207C17.5463 8.07366 18.0588 9.13744 18.1871 10.2787M17.6246 14.7675V16.455C17.6252 16.6117 17.5931 16.7667 17.5304 16.9103C17.4676 17.0538 17.3755 17.1826 17.2601 17.2885C17.1447 17.3945 17.0084 17.4751 16.86 17.5253C16.7116 17.5755 16.5543 17.5941 16.3983 17.58C14.6674 17.3919 13.0048 16.8005 11.5439 15.8531C10.1848 14.9895 9.03257 13.8372 8.16894 12.4781C7.2183 11.0107 6.6267 9.33993 6.44207 7.60125C6.42801 7.4457 6.4465 7.28893 6.49635 7.14091C6.5462 6.9929 6.62632 6.85689 6.73162 6.74154C6.83692 6.62619 6.96508 6.53402 7.10795 6.47092C7.25082 6.40781 7.40526 6.37515 7.56144 6.375H9.24894C9.52193 6.37231 9.78657 6.46898 9.99356 6.64699C10.2005 6.82499 10.3357 7.07219 10.3739 7.3425C10.4452 7.88254 10.5773 8.41278 10.7677 8.92313C10.8434 9.12446 10.8598 9.34326 10.8149 9.55362C10.77 9.76398 10.6658 9.95706 10.5146 10.11L9.80019 10.8244C10.6009 12.2326 11.7669 13.3986 13.1752 14.1994L13.8896 13.485C14.0425 13.3338 14.2356 13.2295 14.4459 13.1847C14.6563 13.1398 14.8751 13.1562 15.0764 13.2319C15.5868 13.4223 16.117 13.5544 16.6571 13.6256C16.9303 13.6642 17.1799 13.8018 17.3582 14.0123C17.5366 14.2229 17.6314 14.4916 17.6246 14.7675Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1819_6584"
                  x1="12"
                  y1="1.5"
                  x2="12"
                  y2="22.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5AF575" />
                  <stop offset="1" stop-color="#13BD2C" />
                </linearGradient>
                <clipPath id="clip0_1819_6584">
                  <rect
                    width="13.5"
                    height="13.5"
                    fill="white"
                    transform="translate(5.25 5.25)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Icon>
        </Box>
      </Box>

      {!editing ? (
        <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
          {leftSideUserData?.map((data, index) => (
            <Box
              key={index}
              display={"flex"}
              flexDirection={"column"}
              gap={"4px"}
              padding={"12px 0px 12px 0px"}
            >
              <Text
                fontSize={"13px"}
                fontWeight={500}
                color={"rgba(102, 112, 133, 1)"}
              >
                {data?.item}
              </Text>
              <Text
                fontSize={"14px"}
                fontWeight={500}
                color={"rgba(16, 24, 40, 1)"}
              >
                {data?.description}
              </Text>
            </Box>
          ))}
        </Box>
      ) : (
        <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
          {leftSideUserData?.map((data, index) => (
            <Box
              key={index}
              display={"flex"}
              flexDirection={"column"}
              gap={"4px"}
              padding={"12px 0px 12px 0px"}
            >
              <Text
                fontSize={"13px"}
                fontWeight={500}
                color={"rgba(102, 112, 133, 1)"}
              >
                {data?.item}
              </Text>

              {!data?.editable ? (
                <Text
                  fontSize={"14px"}
                  fontWeight={500}
                  color={"rgba(16, 24, 40, 1)"}
                >
                  {data?.description}
                </Text>
              ) : data?.item !== "Language" ? (
                <Input
                  variant="outline"
                  placeholder={
                    data?.item === "Mobile Number"
                      ? "Enter Here"
                      : data?.item === "Email Address"
                      ? "Enter Here"
                      : ""
                  }
                  name={
                    data?.item === "Mobile Number"
                      ? "mobile"
                      : data?.item === "email"
                      ? "Enter Here"
                      : ""
                  }
                  onChange={(e) => handleEditChange(e,data)}
                  value={getInputValue(data)}
                />
              ) : (
                <>
                  <Select
                    defaultValue={LanguageOptions[languageIndex]}
                    onChange={(e) =>handleSelectChange(e)}
                    useBasicStyles
                    options={LanguageOptions}
                    placeholder="Select"
                  ></Select>
                </>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default LeftFixedUserProfile;
