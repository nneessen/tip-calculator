import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercent1, setTipPercent1] = useState(0);
  const [tipPercent2, setTipPercent2] = useState(0);

  const tip = bill * ((tipPercent1 + tipPercent2) / 2 / 100);

  function handleReset() {
    setBill("");
    setTipPercent1(0);
    setTipPercent2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage tipPercent={tipPercent1} onSelect={setTipPercent1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage tipPercent={tipPercent2} onSelect={setTipPercent2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercentage({ children, tipPercent, onSelect }) {
  return (
    <div>
      <label>{children} </label>
      <select
        value={tipPercent}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
