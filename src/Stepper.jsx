// import { useColorModeValue } from "@chakra-ui/color-mode";
// import { Box } from "@chakra-ui/react";
// import { Button, Flex, Heading } from "@chakra-ui/react";
// import { Step,Steps, useSteps } from "chakra-ui-steps";

// const steps = [
//   { label: "Step 1", description: "Business Details" },
//   { label: "Step 2", description: "Business Info" },
//   { label: "Step 3", description: "Activate Account" },
// ];

// export const LineStepper = ({ variant }) => {
//   const { nextStep, prevStep, reset, activeStep } = useSteps({
//     initialStep: 0,
//   });
//   const isLastStep = activeStep === steps.length - 1;
//   const hasCompletedAllSteps = activeStep === steps.length;
//   const bg = useColorModeValue("gray.200", "gray.700");
//   return (
//       <Flex flexDir="column" width="100%">
//         <Steps variant={variant} colorScheme={"green"} activeStep={activeStep}>
//           {steps.map(({ label, description }, index) => (
//             <Step colorScheme={"green"} label={label} key={label} description={description}>
//               <Box sx={{ p: 8, bg, my: 8, rounded: "md" }}>
//                 <Heading fontSize="xl" textAlign="center">
//                   Step {index + 1}
//                 </Heading>
//               </Box>
//             </Step>
//           ))}
//         </Steps>
//         {hasCompletedAllSteps && (
//           <Box sx={{ bg, my: 8, p: 8, rounded: "md" }}>
//             <Heading fontSize="xl" textAlign={"center"}>
//               Woohoo! All steps completed! 🎉
//             </Heading>
//           </Box>
//         )}
//         <Flex width="100%" justify="flex-end" gap={4}>
//           {hasCompletedAllSteps ? (
//             <Button size="sm" onClick={reset}>
//               Reset
//             </Button>
//           ) : (
//             <>
//               <Button
//                 isDisabled={activeStep === 0}
//                 onClick={prevStep}
//                 size="sm"
//                 variant="ghost"
//               >
//                 Prev
//               </Button>
//               <Button size="sm" onClick={nextStep}>
//                 {isLastStep ? "Finish" : "Save & Next"}
//               </Button>
//             </>
//           )}
//         </Flex>
//       </Flex>
//   );
// };

// export default LineStepper;

import {
  ChakraProvider,
  extendTheme,
  Box,
  Flex,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import {  ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

const customTheme = extendTheme({
  components: {
    CustomStepper: {
      baseStyle: {
        bgColor: "gray.100",
      },
    },
  },
});

const CustomStepperHelper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "Step 1", description: "Description for Step 1" },
    { label: "Step 2", description: "Description for Step 2" },
    { label: "Step 3", description: "Description for Step 3" },
  ];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  // const handlePrev = () => {
  //   setActiveStep(activeStep - 1);
  // };

  console.log(activeStep);

  return (
    <>
      <HStack align="flex-start">
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: "32px",
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={step.label}
              display={"flex"}
              style={{ width: "100%", rowGap: "16px" }}
              flexDirection={"column"}
              align="flex-start"
            >
              {/* Step Number */}
              <Box
                boxSize="1"
                bg={
                  index < activeStep
                    ? "green.500" // Completed steps
                    : index === activeStep
                    ? "blue.500" // Active step
                    : index === steps.length
                    ? "green.500" // Last step upon completion
                    : "gray.200" // Incomplete steps
                }
                width={"100%"}
                borderRadius="4"
                textAlign="center"
              >
              </Box>

              {/* Step Description */}
              <Box
                style={{ cursor: "pointer" }}
                onClick={() => setActiveStep(index)}
                ml="0"
              >
                <Text fontWeight={index === activeStep ? "bold" : "normal"}>
                  {step.label}
                </Text>
                <Text color="gray.500">{step.description}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </HStack>
      {/* Navigation Buttons */}
      <Flex mt="4" justify="flex-end">
        {/* <Button onClick={handlePrev} isDisabled={activeStep <= 0} leftIcon={<ChevronLeftIcon />}>
          Previous
        </Button> */}
        {activeStep < steps.length ? (
          <Button
            onClick={handleNext}
            isDisabled={activeStep > steps.length}
            rightIcon={<ChevronRightIcon />}
          >
            Save & Next
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            rightIcon={<ChevronRightIcon />}
          >
            Submit
          </Button>
        )}
      </Flex>
    </>
  );
};

const CustomStepper = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <CustomStepperHelper />
    </ChakraProvider>
  );
};

export default CustomStepper;
