import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, incrementByAmount } from "../redux/reducer/counterSlice";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0)
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleReset = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }

  return (
    <main className="block">
      <p>{count}</p>
      <button className="App-link" onClick={() => dispatch(increment())}>+</button>
      <button className="App-link" onClick={() => dispatch(decrement())}>-</button>
      <br/>
      <label htmlFor="incrementAmount">
      Increment Number: 
      <input id="incrementAmount" type="number" value={incrementAmount} onChange={(e) => setIncrementAmount(!isNaN(e.target.valueAsNumber) && e.target.valueAsNumber)} />
      <button className="App-link" onClick={() => dispatch(incrementByAmount(incrementAmount))}>Increment By Amount</button>
      </label>
      <br/>
      <button className="App-link" onClick={handleReset}>Reset</button>
    </main>
  );
};

export default Counter;
