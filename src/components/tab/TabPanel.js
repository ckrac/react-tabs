import React from 'react';
import PropTypes from 'prop-types';

const TabPanel = ({ children }) => {
  return <div className='tab-panel'>{children}</div>;
};

TabPanel.propTypes = {
  children: PropTypes.any
};

export default TabPanel;
