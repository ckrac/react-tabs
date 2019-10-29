import React, { FC } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

interface Props {
  width?: number;
  range: number[];
  onChange: (arg: number[]) => void;
  min: number;
  max: number;
  label?: string;
}

const DualSlider: FC<Props> = ({ width, range, onChange, min, max, label }) => {
  const containerStyle = {
    ...(width && { width: `${width}px` })
  } as React.CSSProperties;

  function onInputChange(index: number, numString: string, range: number[]) {
    onChange(
      range.map((r, i) => {
        return i === index ? Number(numString) : r;
      })
    );
  }

  return (
    <div className='dual-slider-container' style={containerStyle}>
      <div className='dual-slider-input'>
        <div>{label}</div>
        <div>
          <input
            type='number'
            value={range[0]}
            onChange={e => onInputChange(0, e.target.value, range)}
          />
          <input
            type='number'
            value={range[1]}
            onChange={e => onInputChange(1, e.target.value, range)}
          />
        </div>
      </div>
      <div className='dual-slider-range'>
        <Range
          allowCross={false}
          value={range}
          onChange={onChange}
          min={min}
          max={max}
        />
      </div>
    </div>
  );
};

export default DualSlider;
