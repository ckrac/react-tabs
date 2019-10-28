import React from 'react';
import PropTypes from 'prop-types';

const TabList = ({ children, onChange, selectedIndex }) => {
  const content = React.Children.map(children, (child, index) => {
    if (child.type.name === 'Tab') {
      console.log('selectedIndex', selectedIndex);
      console.log('index', index);

      return React.cloneElement(child, {
        ...child.props,
        isActive: selectedIndex === index,
        onChange: () => onChange(index)
      });
    } else {
      return child;
    }
  });

  return <ol className='tab-list'>{content}</ol>;
};

TabList.propTypes = {
  children: PropTypes.any,
  selectedIndex: PropTypes.number,
  onChange: PropTypes.func
};

export default TabList;
