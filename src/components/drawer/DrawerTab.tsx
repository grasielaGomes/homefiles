import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { tabList } from "../../helpers/TabList";
import { Tab1 } from "./Tab1";

export const DrawerTab = () => (
  <Tabs variant="unstyled">
    <TabList px={4} bg="white">
      {tabList.map((tab) => (
        <Tab
          key={tab}
          textTransform="uppercase"
          as="b"
          fontSize="sm"
          color="blue.300"
          _focus={{ outline: "none" }}
          _selected={{ color: "blue.500", borderBottom: "3px solid" }}
        >
          {tab}
        </Tab>
      ))}
    </TabList>

    <TabPanels padding={0}>
      <TabPanel py={0} px={4}>
        <Tab1 />
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
