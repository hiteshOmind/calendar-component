
import { Box, Flex, Icon, SlideFade } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";


const images = [
  "https://images.unsplash.com/photo-1556401193-a9dda25073e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1556575157-75a0d60e4835?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1556379092-dca659792591?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];


const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box position="relative" overflow="hidden">
      <Box position="relative" height="300px" overflow="hidden">
        <SlideFade in={true} offsetX="0px" offsetY="0px">
          <Flex transition="transform 0.5s" transform={`translateX(-${currentIndex * 100}%)`} h="100%">
            {images.map((image, index) => (
              <Box padding={"0 10px"} key={index} flex="0 0 100%" textAlign="center">
                <img src={image} alt={`${index + 1}`} width="100%" height="100%" objectFit="cover" />
              </Box>
            ))}
          </Flex>
        </SlideFade>
      </Box>
      <Box position="absolute" bottom="10px" left="50%" transform="translateX(-50%)" display="flex" justifyContent="center" alignItems="center">
        {images.map((_, index) => (
          <Icon
            key={index}
            as={FaCircle}
            color={currentIndex === index ? "blue.500" : "gray.300"}
            boxSize={4}
            mx={1}
            onClick={() => handleDotClick(index)}
            cursor="pointer"
          />
        ))}
      </Box>
      <Box position="absolute" top="50%" left="0" right="0" display="flex" justifyContent="space-between" alignItems="center">
        <Icon as={FaCircle} color="blue.500" boxSize={4} onClick={handlePrev} cursor="pointer" />
        <Icon as={FaCircle} color="blue.500" boxSize={4} onClick={handleNext} cursor="pointer" />
      </Box>
    </Box>
  );
};

export default CustomCarousel;
