import React from "react";
import { GoTag } from "react-icons/go";
import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  Button
} from "@chakra-ui/react";
import { Select as SearchSelect } from "chakra-react-select";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Options = [
  { value: "blue", label: "Blue", index: 0 },
  { value: "purple", label: "Purple", index: 1 },
  { value: "red", label: "Red", index:2 },
  { value: "orange", label: "Orange", index:3 },
  { value: "yellow", label: "Yellow", index:4 },
  { value: "green", label: "Green", index:5 },
];

const validationSchema = Yup.object().shape({
  addressLine1: Yup.string().required("Address Line 1 is required"),
  addressLine2: Yup.string().required("Address Line 2 is required"),
  zipCode: Yup.string().required("Zip Code is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  index: Yup.number().required()
});

function BusinessInfoForm() {
  const formik = useFormik({
      initialValues: {
      addressLine1: "",
      addressLine2: "",
      zipCode: "",
      city: "",
      country: "",
      index: 2,
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <Box>
      <Box>
        <Box display={"flex"} gap={5}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width="48px"
            height={"48px"}
            borderRadius={"50%"}
            bgColor={"rgba(238, 255, 246, 1)"}
          >
            <GoTag size={20} color="rgba(11, 69, 34, 1)" />
          </Box>
          <Box>
            <Text fontSize={16} fontWeight={500}>
              Business Info
            </Text>
            <Text
              fontSize={14}
              fontWeight={400}
              color={"rgba(102, 112, 133, 1)"}
            >
              Provide the necessary information for efficient account management
            </Text>
          </Box>
        </Box>
        <Box mt={"40px"} display={"flex"} flexDir={"column"} gap={"16px"}>
          <Box display={"flex"} justifyContent={"space-between"} gap={"16px"}>
            <FormControl>
              <FormLabel
                fontSize={"14px"}
                color={"rgba(102, 112, 133, 1)"}
                marginBottom={"4px"}
              >
                Address Line 1
              </FormLabel>
              <Input
                variant="outline"
                placeholder="Address line 1"
                name="addressLine1"
                value={formik.values.addressLine1}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.addressLine1 && formik.errors.addressLine1 && (
                <Text color="red">{formik.errors.addressLine1}</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel
                fontSize={"14px"}
                color={"rgba(102, 112, 133, 1)"}
                marginBottom={"4px"}
              >
                Address Line 2
              </FormLabel>
              <Input
                variant="outline"
                placeholder="Address line 2"
                name="addressLine2"
                value={formik.values.addressLine2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.addressLine2 && formik.errors.addressLine2 && (
                <Text color="red">{formik.errors.addressLine2}</Text>
              )}
            </FormControl>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} gap={"16px"}>
            <FormControl>
              <FormLabel
                fontSize={"14px"}
                color={"rgba(102, 112, 133, 1)"}
                marginBottom={"4px"}
              >
                Zip Code
              </FormLabel>
              <Input
                variant="outline"
                placeholder="Enter zipcode"
                name="zipCode"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.zipCode && formik.errors.zipCode && (
                <Text color="red">{formik.errors.zipCode}</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel
                fontSize={"14px"}
                color={"rgba(102, 112, 133, 1)"}
                marginBottom={"4px"}
              >
                City
              </FormLabel>
              <Input
                variant="outline"
                placeholder="Enter city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.city && formik.errors.city && (
                <Text color="red">{formik.errors.city}</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel
                fontSize={"14px"}
                color={"rgba(102, 112, 133, 1)"}
                marginBottom={"4px"}
              >
                Country
              </FormLabel>
              <SearchSelect
              selectedOptionStyle="check"
                name="country"
                options={Options}
                placeholder="Country"
                variant="outline"
                useBasicStyles
                defaultValue={[Options[formik.values.index]]}
                onChange={(e) => {
                  console.log(e);
                  formik.setFieldValue("country", e.value);
                  formik.setFieldTouched("country", true);
                  formik.setFieldValue("index", e.index)
                }}
              />
              {formik.touched.country && formik.errors.country && (
                <Text color="red">{formik.errors.country}</Text>
              )}
            </FormControl>
          </Box>
          <Button type="submit" onClick={formik.handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default BusinessInfoForm;