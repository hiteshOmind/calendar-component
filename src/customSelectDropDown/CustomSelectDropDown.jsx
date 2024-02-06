import React, { useEffect, useState } from "react";
import { Select as RSelect } from "chakra-react-select";

export const CustomSelectDropDown = (props) => {
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
        backgroundColor: state.isSelected ? "#F9FAFB !important" : "#fff",
        background: "none",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        "span:nth-child(n)": { color: "#1DB056" },
      }),
    };
  
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const handleSelectChange = (e) => {
      props.setMultiInputValues(e.value);
      setSelectedIndex(e.index);
    };
  
    useEffect(() => {
      const indexItem = props?.options?.filter(
        (item) => props.selectedValue === item.value
      );
      setSelectedIndex(indexItem[0]?.index || 0);
    }, [selectedIndex]);
  
    const formatOptionLabel = ({ value, label, customAbbreviation }) => (
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "2px 0px",
            //   backgroundColor: "rgba(216, 255, 234, 1)",
            borderRadius: "14px",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {label}
        </div>
      </div>
    );
  
    return (
      <>
        <RSelect
          placeholder="Select"
          formatOptionLabel={formatOptionLabel}
          // menuIsOpen={true}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          selectedOptionStyle="check"
          chakraStyles={chakraStyles}
          onChange={handleSelectChange}
          defaultValue={[props?.multiInputValues[selectedIndex]]}
          {...props}
        />
      </>
    );
  };
  