import { Box, LinkBox, Text } from "@chakra-ui/react";
import { Select as RSelect } from "chakra-react-select";
import React from "react";
import { Select } from "@chakra-ui/react";

function MultiSelectComponent(props) {
  console.log(props);
  //       ? PROPS -->
  //       colorScheme="green"
  //       isClearable={false}
  //       useBasicStyles
  //       setMultiInputValues={setMultiInputValues}
  //       isMulti
  //       options={Coloroptions}
  //       placeholder="Select"
  //       closeMenuOnSelect={false}

  const handleSelectChange = (e) => {
    if (e.length <= props.selectLength) {
      props.setMultiInputValues(e);
    }else{
        console.log("do nothing");
    }
  };

  const chakraStyles = {
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: "#D8FFEA",
      borderRadius: "14px",
    }),

    multiValueLabel: (provided, state) => ({
      ...provided,
      margin: "-8px",
    }),
    crossIcon: (provided, state) => ({
      ...provided,
      margin: "0px",
      padding: "0px",
    }),
    option: (provided, state) => ({
      ...provided,
      _hover: { backgroundColor: "#F9FAFB" },
      backgroundColor: "#fff",
      background: "none",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row-reverse",
      "span:nth-child(n)": { color: "#1DB056" },
    }),
  };

  const formatOptionLabel = ({ value, label, customAbbreviation }) => (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "fit-content",
          padding: "2px 8px",
          backgroundColor: "rgba(216, 255, 234, 1)",
          borderRadius: "14px",
        }}
      >
        {label}
      </div>
    </div>
  );

  return (
    <Box width="280px">
      <RSelect
        formatOptionLabel={formatOptionLabel}
        // menuIsOpen={true}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        selectedOptionStyle="check"
        chakraStyles={chakraStyles}
        onChange={handleSelectChange}
        value={props.multiInputValues || ""}
        {...props}
      />
      {/* <Select style={{margin:"2px 6px 2px 8px"}} placeholder="Select option">
        <option value="option1">
            <Box style={{color:"red", backgroundColor:"green"}}><Text margin="2px 6px 2px 8px">Hello</Text></Box>
        </option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select> */}
    </Box>
  );
}

export default MultiSelectComponent;
