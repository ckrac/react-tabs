import React, { FC } from 'react';

interface Props {
  selectedIndex?: number;
  children: React.ReactNodeArray;
}

const TabPanels: FC<Props> = ({ children, selectedIndex }) => {
  return <>{selectedIndex !== undefined && children[selectedIndex]}</>;
};

export default TabPanels;
