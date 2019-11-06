import React, { useState } from 'react';
import './App.scss';
import Publisher from './components/Publisher';
import DualSlider from './components/DualSlider';
import Drawer from './components/Drawer';
import ReactColorPicker from './components/ReactColorPicker';
import {
  SketchPicker,
  ChromePicker,
  AlphaPicker,
  BlockPicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker,
  HSLColor,
  RGBColor,
  ColorResult
} from 'react-color';

function App() {
  const [isPublisherOpen, setIsPublisherOpen] = useState(false);

  const [range, setRange] = useState<number[]>([0, 10]);

  const [color, setColor] = useState<string | HSLColor | RGBColor | undefined>(
    '#fff'
  );

  function onChnageColor(color: ColorResult) {
    console.log('onChnageColor color', color.hex);
    setColor(color.hex);
  }

  return (
    <div className='app-container'>
      {/* <div className='nav'>
        <div>NAV</div>
        <button onClick={() => setIsPublisherOpen(!isPublisherOpen)}>
          Publish
        </button>
      </div> */}
      {/* <Publisher isPublisherOpen={isPublisherOpen} /> */}

      {/* <div style={{ margin: '20px' }}>{range}</div> */}
      {/* <DualSlider
        label='Label'
        width={250}
        range={range}
        onChange={setRange}
        min={0}
        max={30}
      /> */}
      <Drawer isOpen>
        <div className='py-1 px-1' style={{ background: 'white' }}>
          <ReactColorPicker />
        </div>
      </Drawer>

      {/* <AlphaPicker />
      <HuePicker /> */}

      {/* <AlphaPicker color={color} onChangeComplete={onChnageColor} /> */}
      {/* <BlockPicker /> */}
      {/* <CirclePicker /> */}
      {/* <CompactPicker /> */}
      {/* <GithubPicker /> */}
      {/* <HuePicker /> */}
      {/* <MaterialPicker /> */}
      {/* <PhotoshopPicker /> */}
      {/* <SliderPicker /> */}
      {/* <SwatchesPicker /> */}
      {/* <TwitterPicker /> */}
    </div>
  );
}

export default App;
