import React, { useState } from 'react';
import './App.scss';
import Publisher from './components/Publisher';
import DualSlider from './components/DualSlider';

function App() {
  const [isPublisherOpen, setIsPublisherOpen] = useState(false);

  const [range, setRange] = useState<number[]>([0, 10]);

  return (
    <div className='app-container'>
      {/* <div className='nav'>
        <div>NAV</div>
        <button onClick={() => setIsPublisherOpen(!isPublisherOpen)}>
          Publish
        </button>
      </div> */}
      {/* <Publisher isPublisherOpen={isPublisherOpen} /> */}

      <div style={{ margin: '20px' }}>{range}</div>
      <DualSlider
        label='Label'
        width={250}
        range={range}
        onChange={setRange}
        min={0}
        max={30}
      />
    </div>
  );
}

export default App;
