import React, { FC } from 'react';

interface Props {
  onChange: (index: number) => void;
  selectedIndex: number;
  children: React.ReactNodeArray;
}

const Tabs: FC<Props> = ({ onChange, children, selectedIndex }) => {
  function renderContent(children: any) {
    return React.Children.map(children, child => {
      if (!child) return null;

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
  }

  return <div className='tabs'>{renderContent(children)}</div>;
};

export default Tabs;
