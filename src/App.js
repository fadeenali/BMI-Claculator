import "./App.css";
import React, { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeigth] = useState("");
  const [BMI, setBMI] = useState("");
  const [range, setRange] = useState("");

  const handleCalculation = () => {
    let bmi = "";
    if (!height || !weight) {
      alert("PLEASE FILL ALL DATA");
    } else {
      bmi = (weight / Math.pow(height * 0.01, 2)).toFixed(1);
      setBMI(bmi);
    }

    if (bmi < 18.5) {
      setRange("This is considered Underweight");
    } else if (bmi <= 24.9) {
      setRange("This is considered Healthy or Normal weight");
    } else {
      setRange("This is considered  Overweight");
    }

    console.log(range);
    console.log(BMI);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card_header">
            <h2>BMI Calculetor</h2>
          </div>
          <div className="card_body">
            <h2>Enter your height in Cm:</h2>
            <input
              value={height}
              htmlFor="text"
              type="number"
              placeholder="  height in Cm"
              onChange={(e) => setHeight(e.target.value)}
            />
            <h2>Enter your weight in kg:</h2>
            <input
              value={weight}
              htmlFor="text"
              type="number"
              placeholder="  weight in Kg "
              onChange={(e) => setWeigth(e.target.value)}
            />
            <button onClick={handleCalculation}>Submit</button>
          </div>
          {BMI && (
            <div className="card_footer">
              <h3>
                {" "}
                <b> your BIM is : {BMI} </b>
              </h3>
              <br />
              <h4>
                {" "}
                <i> {range} </i>{" "}
              </h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
