import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { tabList } from "../../helpers/TabList";
import { Tab1, Tab2 } from "./";

export const DrawerTab = () => (
  <Tabs variant="unstyled">
    <TabList px={4} bg="white">
      {tabList.map((tab) => (
        <Tab
          key={tab}
          textTransform="uppercase"
          as="b"
          fontSize="sm"
          color="cyan.300"
          _focus={{ outline: "none" }}
          _selected={{ color: "cyan.500", borderBottom: "3px solid" }}
        >
          {tab}
        </Tab>
      ))}
    </TabList>

    <TabPanels padding={0}>
      <TabPanel p={0} >
        <Tab1 />
      </TabPanel>
      <TabPanel p={0}>
        <Tab2 />
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
