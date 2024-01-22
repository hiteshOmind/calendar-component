import {
  ChakraProvider,
  extendTheme,
  Box,
  Flex,
  Text,
  HStack,
  Button,
  Card,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
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

const CustomStepperHelper = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

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
              ></Box>

              {/* Step Description */}
              <Box
                style={{ cursor: "pointer" }}
                onClick={() => setActiveStep(index)}
                ml="0"
              >
                <Text
                  fontWeight={600}
                  fontSize={12}
                  color={
                    index < activeStep
                      ? "green.500" // Completed steps
                      : index === activeStep
                      ? "blue.500" // Active step
                      : index === steps.length
                      ? "green.600" // Last step upon completion
                      : "gray.600"
                  }
                >
                  {step.label}
                </Text>
                <Text
                  fontSize={16}
                  fontWeight={"bold"}
                  color={index === activeStep ? "#1d2939" : "#475467"}
                >
                  {step.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
      </HStack>

      <Card style={{ width: "100%", padding: "24px", marginTop: "32px" }}>
        {activeStep < steps.length ? (
          steps[activeStep].content
        ) : (
          <Box>All Done</Box>
        )}

        {/* Navigation Buttons */}
        <Flex mt="4" justify="flex-end">
          {activeStep < steps.length ? (
            <Button
              onClick={handleNext}
              isDisabled={activeStep > steps.length}
              rightIcon={<ChevronRightIcon />}
            >
              Save & Next
            </Button>
          ) : (
            <Button rightIcon={<ChevronRightIcon />}>Submit</Button>
          )}
        </Flex>
      </Card>
    </>
  );
};

const CustomStepper = ({ steps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <CustomStepperHelper steps={steps} />
    </ChakraProvider>
  );
};

export default CustomStepper;
