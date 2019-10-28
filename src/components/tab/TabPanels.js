import React from 'react';
import PropTypes from 'prop-types';

const TabPanels = ({ children, selectedIndex }) => {
  return <>{children[selectedIndex]}</>;
};

TabPanels.propTypes = {
  children: PropTypes.any,
  selectedIndex: PropTypes.number
};

export default TabPanels;
