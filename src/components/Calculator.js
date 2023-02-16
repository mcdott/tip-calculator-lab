import React from "react";
import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [bill, setBill] = useState(100);
  const [tip_percent, setTipPercent] = useState(15);
  const [people, setPeople] = useState(1);

  return (
    <div className='Calculator'>
      <h1>Tip Calculator</h1>
      <form>
        <div className='bill'>
          <label>Bill $ </label>
          <input
            type='text'
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
        <div className='tip-percent'>
          <label>Tip % </label>
          <input
            type='text'
            value={tip_percent}
            onChange={(e) => setTipPercent(e.target.value)}
          />
        </div>
        <div className='people'>
          <label>Number of People: </label>
          <input
            type='text'
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
        <div className='tip-amount'>
          <h2> Tip </h2>
          <p>{((bill * (tip_percent / 100)) / people).toFixed(2)}</p>
        </div>
        <div className='total'>
          <h2> Total </h2>
          <p>{((bill * (1 + tip_percent / 100)) / people).toFixed(2)}</p>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
