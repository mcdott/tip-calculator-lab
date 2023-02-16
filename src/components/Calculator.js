import React from "react";
import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  return (
    <div className='Calculator'>
      <h1>Tip Calculator</h1>
      <form>
        <div className='bill'>
          <label>Bill: $ </label>
          <input
            type='text'
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
        <div className='tip'>
          <label>Tip: % </label>
          <input
            type='text'
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        </div>
        <div className='people'>
          <label>People: </label>
          <input
            type='text'
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default Calculator;
