import React, { useState } from 'react';
import './App.scss';
import Publisher from './components/Publisher';

function App() {
  const [isPublisherOpen, setIsPublisherOpen] = useState(false);

  return (
    <div className='app-container'>
      <div className='nav'>
        <div>NAV</div>
        <button onClick={() => setIsPublisherOpen(!isPublisherOpen)}>
          Publish
        </button>
      </div>
      <Publisher isPublisherOpen={isPublisherOpen} />
    </div>
  );
}

export default App;
