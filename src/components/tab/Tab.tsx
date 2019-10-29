import React, { FC } from 'react';
import cn from 'classnames';

interface Props {
  isActive?: boolean;
  isDisabled?: boolean;
  onChange?: () => void;
}

const Tab: FC<Props> = ({ children, isActive, isDisabled, onChange }) => {
  const classTab = cn('tab', {
    'is-active': isActive
  });

  const handleClick = () => {
    if (isDisabled) {
      return;
    }
    if (onChange) {
      onChange();
    }
  };

  return (
    <li className={classTab} onClick={handleClick}>
      {children}
    </li>
  );
};

export default Tab;
