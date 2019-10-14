import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Tab = ({ children, isActive, isDisabled, onChange }) => {
  const classTab = cn('tab', {
    'is-active': isActive
  });

  const handleClick = () => {
    if (isDisabled) {
      return;
    }
    onChange();
  };

  return (
    <li className={classTab} onClick={handleClick}>
      {children}
    </li>
  );
};

Tab.propTypes = {
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.any
};

export default Tab;
