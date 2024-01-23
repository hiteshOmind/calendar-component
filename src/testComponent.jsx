import { Image, Text, Box, Heading } from "@chakra-ui/react";
import CustomCarousel from "./Testimonial";
import { testimonials } from "./App";
import blueImg from "./Image.jpg";

const SideBannerSignUp = () => {
  return (
    <Box style={{display:"flex"}} minHeight={"100vh"}>
      <Box backgroundImage={`url(${blueImg})`} backgroundRepeat={"no-repeat"} width="40%" position={"relative"}>
        <Box>
          <Image width={30} height={30} src={blueImg} alt="Logo" />
        </Box>
        <Box>
          <Heading color={"white"}>
            Elevate your Customer Experience with us!
          </Heading>
          <Text color={"#FFFFFFBF"}>
            Our platform helps you drive seamless interactions with customers
            using AI based predictive behaviour and automated journeys across
            multiple channels
          </Text>
          <Box></Box>
        </Box>
        <Box style={{position:"absolute", bottom:"40px", width:"100%"}}>
          <CustomCarousel ratingData={testimonials} />
        </Box>
      </Box>
      <Box width="60%" bgColor={"cyan"}>Right Content</Box>
    </Box>
  );
};
export default SideBannerSignUp;
