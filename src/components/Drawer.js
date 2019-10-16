import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Drawer = ({ children, isOpen }) => {
  const drawerClass = cn('drawer', {
    'is-open': isOpen
  });
  return <div className={drawerClass}>{children}</div>;
};

Drawer.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool
};

export default Drawer;
