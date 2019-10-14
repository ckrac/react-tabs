import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ onChange, children, selectedIndex }) => {
  const content = React.Children.map(children, child => {
    if (child.type.name === 'TabList') {
      return React.cloneElement(child, {
        ...child.props,
        onChange,
        selectedIndex
      });
    } else if (child.type.name === 'TabPanels') {
      return React.cloneElement(child, {
        ...child.props,
        selectedIndex
      });
    } else {
      return child;
    }
  });

  return <div className='tabs'>{content}</div>;
};

Tabs.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  children: PropTypes.any
};

export default Tabs;
