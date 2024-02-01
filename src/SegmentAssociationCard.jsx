import { Box, Card, Text } from "@chakra-ui/react";
import React from "react";

function SegmentAssociationCard({
  rfmCount,
  customCount,
  staticCount,
}) {
  return (
    <Card boxShadow={"none"} border={"1px solid rgba(234, 236, 240, 1)"}>
      <Box
        display={"flex"}
        gap={"12px"}
        padding={"24px 16px 24px 16px"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Box 
          maxWidth={"256px"}
          width={"100%"}
          display={"flex"}
          gap={"8px"}
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
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2V10M4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14C5.10457 14 6 13.1046 6 12M4 10C5.10457 10 6 10.8954 6 12M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6ZM12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </Box>
          <Box>
            <Text
              fontSize={"13px"}
              fontWeight={500}
              color={"rgba(102, 112, 133, 1)"}
            >
              RFM
            </Text>
            <Text
              fontSize={"18px"}
              fontWeight={500}
              color={"rgba(16, 24, 40, 1)"}
            >
              {rfmCount}
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          gap={"8px"}
          maxWidth={"256px"}
          width={"100%"}
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
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM12 10V5.33333C12 4.97971 11.8595 4.64057 11.6095 4.39052C11.3594 4.14048 11.0203 4 10.6667 4H8.66667M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6ZM4 6V14" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </Box>
          <Box>
            <Text
              fontSize={"13px"}
              fontWeight={500}
              color={"rgba(102, 112, 133, 1)"}
            >
              Custom
            </Text>
            <Text
              fontSize={"18px"}
              fontWeight={500}
              color={"rgba(16, 24, 40, 1)"}
            >
              {customCount}
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          gap={"8px"}
          maxWidth={"256px"}
          width={"100%"}
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
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.699219 3.99967H4.66589M11.3392 3.99967H15.3059M10.6659 3.99967C10.6659 5.47243 9.47198 6.66634 7.99922 6.66634C6.52646 6.66634 5.33255 5.47243 5.33255 3.99967C5.33255 2.52692 6.52646 1.33301 7.99922 1.33301C9.47198 1.33301 10.6659 2.52692 10.6659 3.99967Z" stroke="#475467" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </Box>
          <Box>
            <Text
              fontSize={"13px"}
              fontWeight={500}
              color={"rgba(102, 112, 133, 1)"}
            >
              Static
            </Text>
            <Text
              fontSize={"18px"}
              fontWeight={500}
              color={"rgba(16, 24, 40, 1)"}
            >
              {staticCount}
            </Text>
          </Box>
        </Box>
       
      </Box>
    </Card>
  );
}

export default SegmentAssociationCard;
