import { Select } from "chakra-react-select";
import React, { useEffect, useState } from "react";

const chakraStyles = {
  option : (provided, state) => ({
    ...provided,
    _hover: { backgroundColor: "#F9FAFB", color:"black" },
    backgroundColor: state.isSelected ? "#F9FAFB !important" : "#fff",
    color:"black !important",
    background: "none",
  }),
};

function SimpleDropDown(props) {

  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleSelectChange = (e) =>{
    props.setSelectedValue(e.value);
    setSelectedIndex(e.index)
  }

  useEffect(() => {
    const indexItem = props?.options?.filter((item) => props.selectedValue === item.value )
    setSelectedIndex(indexItem[0]?.index)
  }, [selectedIndex])
  

  return (
    <div>
      <Select
        styles={{zindex:5}}
        options={props?.options}
        chakraStyles={chakraStyles}
        onChange={handleSelectChange}
        defaultValue={[props?.options[selectedIndex]]}
        useBasicStyles
        padding={"10px 14px 10px 14px"}
        placeholder="Select"
        isSearchable={false}
        {...props}
      ></Select>
    </div>
  );
}

export default SimpleDropDown;
