import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const JobsCategory = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
          <h2>Web dev jobs</h2>
        </TabPanel>
        <TabPanel>
          <h2>Digital Marketing</h2>
        </TabPanel>
        <TabPanel>
          <h2>Graphics Design</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobsCategory;
