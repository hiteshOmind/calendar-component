import { Box, LinkBox, Text } from "@chakra-ui/react";
import { Select as RSelect } from "chakra-react-select";
import React from "react";

function MultiSelectComponent(props) {
//   console.log(props);
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
        // console.log("do nothing");
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
          fontSize:"12px",
          fontWeight:"500"
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
    </Box>
  );
}

export default MultiSelectComponent;