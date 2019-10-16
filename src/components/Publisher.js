import React from 'react';
import PropTypes from 'prop-types';
import TabContent from './TabContent';
import Drawer from './Drawer';

const Publisher = ({ isPublisherOpen }) => {
  return (
    <>
      {/* {isPublisherOpen && (
        <Drawer isOpen={isPublisherOpen}>
          <div className='drawer-title'>Title</div>
          <TabContent />
        </Drawer>
      )} */}
      <Drawer isOpen={isPublisherOpen}>
        <div className='drawer-title'>Title</div>
        <TabContent />
      </Drawer>
    </>
  );
};

Publisher.propTypes = {
  isPublisherOpen: PropTypes.bool
};

export default Publisher;
