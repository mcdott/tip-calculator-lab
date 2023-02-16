import React from "react";
import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [bill, setBill] = useState(0);

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
      </form>
    </div>
  );
}

export default Calculator;
