import React, { FC } from 'react';
import TabContent from './TabContent';
import Drawer from './Drawer';

interface Props {
  isPublisherOpen: boolean;
}

const Publisher: FC<Props> = ({ isPublisherOpen }) => {
  return (
    <>
      <Drawer isOpen={isPublisherOpen}>
        <div className='drawer-title'>Title</div>
        <TabContent />
      </Drawer>
    </>
  );
};

export default Publisher;
