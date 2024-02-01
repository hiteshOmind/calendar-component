import {
  VStack,
  Box,
  Circle,
  Flex,
  useColorModeValue,
  Text,
  Button,
  Card,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";

const TimelineComponent = ({ TimeLineData }) => {
  return (
    <Box width={"100%"}>
      <VStack textAlign="start" align="start" mb={5}>
        <Box width={"100%"} zIndex={5}>
          <Box width={"100%"}>
            {TimeLineData?.map((item, index) => (
              <MilestoneItem
                key={index}
                item={item}
                icon={FiPlusCircle}
                skipTrail={index === TimeLineData.length - 1 ? true : false}
              ></MilestoneItem>
            ))}
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

const MilestoneItem = ({
  icon = FiCheckCircle,
  boxProps = {},
  skipTrail,
  children,
  item,
  ...props
}) => {
  const color = useColorModeValue("gray.700", "gray.500");
  const [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <Flex width={"100%"} minH={"70px"} {...props}>
      <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
        <Circle
          size={"40px"}
          bg={useColorModeValue("gray.600", "gray.500")}
          opacity={useColorModeValue(0.07, 0.15)}
        />
        <Box as={icon} size="16px" color={color} pos="absolute" top={"12px"} />
        {!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
      </Flex>
      <Box width={"100%"} {...boxProps}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2px",
          }}
        >
          <Box width={"100%"}>
            <Box style={{ display: "flex", gap: "16px" }}>
              <Text color={"#101828"} fontSize={14} fontWeight={500}>
                {item.eventName}
              </Text>
              <Text
                padding={"2px 8px"}
                fontSize={12}
                fontWeight={500}
                borderRadius={16}
                bgColor={"#D8FFEA"}
              >
                {item.source}
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={13}
                fontWeight={500}
                mt={1}
                color={"rgba(102, 112, 133, 1)"}
              >
                {item.time}
              </Text>
            </Box>
          </Box>
          <Box>
            <Button
              onClick={() => setIsCardOpen(!isCardOpen)}
              rightIcon={<IoChevronDown size={20} />}
              fontSize={14}
              fontWeight={600}
              colorScheme="none"
              color="rgba(18, 110, 54, 1)"
              variant="outline"
              border={"none"}
              backgroundColor={"none"}
              _hover={{ backgroundColor: "none" }}
            >
              Show Details
            </Button>
          </Box>
        </Box>
        {isCardOpen ? (
          <Card padding={"16px 16px 0px 16px"} mt={"16px"} mb={"24px"} borderRadius={"8px"}>
            <Box>
              <Text fontSize={16} mb={"8px"} fontWeight={500} color={"rgba(52, 64, 84, 1)"}>
                Event Attributes
              </Text>
              {item?.attributeData?.map((attData, index) =><Box 
                  display={"flex"}
                  width={"100%"}
                  justifyContent={"space-between"}
                  padding={"16px 0px"}
                  borderBottom={index !== item?.attributeData.length - 1 ? "1px solid rgba(234, 236, 240, 1)":""}
                >
                  <Text fontSize={13} fontWeight={500} color={"rgba(102, 112, 133, 1)"}>
                    {attData.attribute}
                  </Text>
                  <Text fontSize={14} fontWeight={500} color={"rgba(16, 24, 40, 1)"}>
                    {attData.attributeDetail}
                  </Text>
                </Box> )}
            </Box>
          </Card>
        ) : (
          ""
        )}
      </Box>
    </Flex>
  );
};

export default TimelineComponent;
