import { Box, Flex, Icon, SlideFade } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";
import { Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export const TestimonialCard = ({
  rating,
  name,
  designation,
  description,
  image,
}) => {
  return (
    <Box p={"20px"} borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Flex justifyContent={"space-between"}>
        <Flex flex={"start"}>
          <Image
            src={image}
            alt="User Avatar"
            borderRadius="full"
            boxSize="50px"
            mr={3}
          />
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Text fontSize={14} fontWeight={600}>
              {name}
            </Text>
            <Text color="gray.500" fontSize={12}>
              {designation}
            </Text>
          </Box>
        </Flex>
        <Flex mt={3}>
          {[...Array(rating)]?.map((_, index) => (
            <Icon as={FaStar} key={index} color="yellow.500" boxSize={4} />
          ))}
        </Flex>
      </Flex>

      <Box mt={3}>
        <Text fontSize={12} color={"#475467"} fontWeight={400}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

const CustomCarousel = ({ ratingData, sideNavigation = false }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ratingData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ratingData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box position="relative" overflow="hidden">
      <Box position="relative" height="300px" overflow="hidden">
        <SlideFade in={true} offsetX="0px" offsetY="0px">
          <Flex
            pl={25}
            mr={25}
            gap={10}
            transition="transform 0.5s"
            transform={`translateX(-${currentIndex * 73}%)`}
            h="100%"
          >
            {ratingData?.map((data, index) => (
              <Box key={index} flex="0 0 80%" textAlign="center">
                <Box width="100%" height="100%">
                  <TestimonialCard
                    rating={data.rating}
                    name={data.name}
                    designation={data.designation}
                    description={data.description}
                    image={data.image}
                  />
                </Box>
              </Box>
            ))}
          </Flex>
        </SlideFade>
      </Box>
      <Box
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {ratingData?.map((_, index) => (
          <Icon
            key={index}
            as={FaCircle}
            color={currentIndex === index ? "blue.500" : "gray.300"}
            boxSize={2}
            mx={1}
            onClick={() => handleDotClick(index)}
            cursor="pointer"
          />
        ))}
      </Box>
      {sideNavigation ? (
        <Box
          position="absolute"
          top="50%"
          left="0"
          right="0"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Icon
            as={FaCircle}
            color="blue.500"
            boxSize={2}
            onClick={handlePrev}
            cursor="pointer"
          />
          <Icon
            as={FaCircle}
            color="blue.500"
            boxSize={2}
            onClick={handleNext}
            cursor="pointer"
          />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default CustomCarousel;
