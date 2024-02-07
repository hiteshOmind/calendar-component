import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CustomTab, CustomTabList, CustomTabs } from "../customTab/CustomTabs";

function ProfilePage() {
  const [value, setValue] = useState(0);

  const chakraStyles = {
    tab: (provided, state) => ({
      ...provided,
      border: "",
    }),
  };

  return (
    <Box>
      <Box>
        <Text fontSize={24} fontWeight={500} color={"#1D2939"}>
          Settings
        </Text>
      </Box>
      <Box mt={"16px"}>
        <CustomTabs>
          <CustomTabList>
            <CustomTab>My Profile</CustomTab>
            <CustomTab>Team</CustomTab>
            <CustomTab>Billing</CustomTab>
          </CustomTabList>

          <TabPanels mt={"24px"}>
            <TabPanel padding={0} margin={0}>
              <p>Content 1</p>
            </TabPanel>
            <TabPanel padding={0} margin={0}>
              <p>Content 2</p>
            </TabPanel>
            <TabPanel padding={0} margin={0}>
              <p>Content 3</p>
            </TabPanel>
          </TabPanels>
        </CustomTabs>
      </Box>
    </Box>
  );
}

export default ProfilePage;

