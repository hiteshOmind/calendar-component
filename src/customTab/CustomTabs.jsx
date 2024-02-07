import { Tab, TabList, Tabs, TabPanels, TabPanel } from "@chakra-ui/react";

const CustomTab = ({ children, ...rest }) => {
    return (
      <Tab
        _selected={{
          color: "black",
          borderColor: "#23CE6B",
        }}
        padding={"8px 4px 8px 4px"}
        marginRight={"16px"}
        color={"#667085"}
        fontSize="14px"
        fontWeight={500}
        _hover={{
          bg: "white.100",
        }}
        {...rest}
      >
        {children}
      </Tab>
    );
  };
  
  const CustomTabList = ({ children, ...rest }) => {
    return (
      <TabList
        {...rest}
      >
        {children}
      </TabList>
    );
  };
  
  const CustomTabs = ({ children, ...rest }) => {
    return <Tabs {...rest}>{children}</Tabs>;
  };
  
  export { CustomTabs, CustomTabList, CustomTab, TabPanels, TabPanel };
  