import React from 'react';
import PropTypes from 'prop-types';
import TabContent from './TabContent';
import Drawer from './Drawer';

const Publisher = ({ isPublisherOpen }) => {
  return (
    <>
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
