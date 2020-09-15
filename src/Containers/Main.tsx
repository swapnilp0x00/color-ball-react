import React, { useState } from 'react';
import './Main.css';


const Main = () => {
  const [color, setColor] = useState('black')
  const [boxStyle, setBoxStyle] = useState({background: color});

  const onInputChange = (event: any) => {
    const {value} = event.target;
    setColor(value);
  }
  const applyChange = (event: any) => {
    setBoxStyle({background: color});
  }
  return (
    <div className="Main">
      <div className="flex">
      <div id="controls">
        <input type="text" placeholder="Enter Color" onChange={(event) => onInputChange(event)} />
        <button type="button" onClick={(event) => applyChange(event)}>Change</button>
      </div>
      <div className="margin">
      </div>
      <div id="box" style={boxStyle}>
      </div>
      </div>
    </div>
  );
}

export default Main;
