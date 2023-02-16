import React from "react";
import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [bill, setBill] = useState(100);
  const [tip_percent, setTipPercent] = useState(15);
  const [tip_amount, setTipAmount] = useState(15);
  const [people, setPeople] = useState(1);

  return (
    <div className='Calculator'>
      <h1>Tip Calculator</h1>
      <form>
        <div className='bill'>
          <label>Bill $ </label>
          <input
            type='number'
            min={1}
            max={100000}
            step={1}
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
        <div className='tip-percent'>
          <label>Tip % </label>
          <input
            type='number'
            min={0}
            max={100}
            step={1}
            value={tip_percent}
            onChange={(e) => setTipPercent(e.target.value)}
          />
        </div>
        <div className='tip-amount'>
          <label>Tip $ </label>
          <input
            type='number'
            min={0}
            max={10000}
            step={1}
            value={tip_amount}
            onChange={(e) => {
              setTipAmount(e.target.value);
              setTipPercent(((e.target.value / bill) * 100).toFixed(0));
            }}
          />
        </div>
        <div className='people'>
          <label>Number of People: </label>
          <div className='input-group'>
            <input
              type='number'
              min={1}
              max={100}
              step={1}
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
          </div>
        </div>

        <div className='tip-per-person'>
          <h2> Tip </h2>
          {people > 1 ? <h3> per person </h3> : null}
          <p>{((bill * (tip_percent / 100)) / people).toFixed(2)}</p>
        </div>
        <div className='total-per-person'>
          <h2> Total </h2>
          {people > 1 ? <h3> per person </h3> : null}
          <p>{((bill * (1 + tip_percent / 100)) / people).toFixed(2)}</p>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
