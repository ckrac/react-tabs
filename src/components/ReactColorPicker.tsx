import React, { FC, useState } from 'react';
import {
  SketchPicker,
  ChromePicker,
  AlphaPicker,
  HuePicker,
  HSLColor,
  RGBColor,
  ColorResult
} from 'react-color';
import '../styles/component/chrome-picker.scss';

const ReactColorPicker: FC = () => {
  const [color, setColor] = useState<string | HSLColor | RGBColor | undefined>(
    '#fff'
  );

  function onChnageColor(color: ColorResult) {
    console.log('onChnageColor color', color);
    setColor(color.hex);
  }

  return (
    <div style={{ boxSizing: 'border-box' }}>
      {/* <SketchPicker /> */}
      {/* <ChromePicker
        color={color}
        onChangeComplete={onChnageColor}
        styles={{
          default: {
            Hue: {
              background: 'yellow'
            },
            controls: {
              // background: 'red'
            },
            active: {
              height: '40px',
              width: '40px',
              borderRadius: '3px',
              border: '2px solid green'
            },
            picker: {
              boxSizing: 'border-box',
              border: '2px solid green',
              width: '100%'
            },
            toggles: {
              border: '2px solid green'
            }
          }
        }}
      /> */}
      {/* <ChromePicker /> */}
      {/* <SketchPicker /> */}
      <AlphaPicker />
      {/* <HuePicker /> */}
    </div>
  );
};

export default ReactColorPicker;
