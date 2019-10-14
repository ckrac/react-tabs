import React from 'react';
import './App.scss';
import TabContent from './components/TabContent';

function App() {
  return (
    <div className='drawer'>
      <div className='drawer-title'>Title</div>
      <TabContent />
    </div>
  );
}

export default App;
