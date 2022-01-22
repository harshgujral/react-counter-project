import React, { useState } from 'react';
import Button from './component/button.js';
import Counter from './component/counter.js';

import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const incbtn = () => {
    setCount(count + 1);
  };
  const decbtn = () => {
    setCount(count - 1);
  };


 
  return (
    <div className="big">
      <div className="main">
        <Counter count={count} />
        <div className= "btn">
          <Button data="+" func={incbtn} />
          <Button data="-" func={decbtn} />
        </div>
      </div>
    </div>
  );
}
