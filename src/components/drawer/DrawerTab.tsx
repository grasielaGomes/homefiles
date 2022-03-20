import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { tabList } from "../../helpers/TabList";
import { Tab1, Tab2, Tab3 } from "./";

export const DrawerTab = () => {
  const componentsTab = [<Tab1/>, <Tab2 />, <Tab3 />]
  return (
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
        {componentsTab.map((component, index) => (
          <TabPanel p={0} key={index}>
            {component}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
