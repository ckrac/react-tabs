import React, { useState } from 'react';
import Tabs from './tab/Tabs';
import TabList from './tab/TabList';
import Tab from './tab/Tab';
import TabPanels from './tab/TabPanels';
import TabPanel from './tab/TabPanel';

const TabContent = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <Tabs selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <TabList>
        <Tab>Tab A</Tab>
        <Tab>Tab B</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>A</TabPanel>
        <TabPanel>
          <div className='layout-container-body'>
            <div style={{ marginBottom: '10px' }}>hey</div>
            <div style={{ marginBottom: '100px' }}>hey</div>
            <div style={{ marginBottom: '10px' }}>hey</div>
            <div style={{ marginBottom: '100px' }}>hey</div>
            <div style={{ marginBottom: '10px' }}>hey</div>
            <div style={{ marginBottom: '10px' }}>hey</div>
            <div style={{ marginBottom: '10px' }}>hey</div>
            <div style={{ marginBottom: '10px' }}>hey</div>
            <div style={{ marginBottom: '10px' }}>hey</div>
            <div style={{ marginBottom: '10px' }}>yooooooo</div>
            <div style={{ marginBottom: '10px' }}>yooooooo</div>
            <div style={{ marginBottom: '10px' }}>yooooooo</div>
          </div>

          <div className='layout-container-footer'>
            <button>Btn 1</button>
            <button>Btn 2</button>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabContent;
