import React, { FC } from 'react';

interface Props {
  selectedIndex?: number;
  onChange?: (index: number) => void;
  children: React.ReactNodeArray;
}

const TabList: FC<Props> = ({ children, onChange, selectedIndex }) => {
  function renderContent(children: any) {
    return React.Children.map(children, (child, index) => {
      if (!child) return null;
      if (child.type.name === 'Tab') {
        return React.cloneElement(child, {
          ...child.props,
          isActive: selectedIndex === index,
          onChange: () => (onChange ? onChange(index) : null)
        });
      } else {
        return child;
      }
    });
  }

  return <ol className='tab-list'>{renderContent(children)}</ol>;
};

export default TabList;
