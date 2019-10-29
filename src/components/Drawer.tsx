import React, { FC } from 'react';
import cn from 'classnames';

interface Props {
  isOpen: boolean;
}

const Drawer: FC<Props> = ({ children, isOpen }) => {
  const drawerClass = cn('drawer', {
    'is-open': isOpen
  });
  return <div className={drawerClass}>{children}</div>;
};

export default Drawer;
