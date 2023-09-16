import React, { useState } from "react";
import "./style.css";

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "20%",
  gap: "20px",
  borderRight: "solid 20px blue",
  borderBottomColor: "aqua",
  borderLeft: "solid 20px pink",
  borderRadius: "8%",
  outline: "2px solid #f4eeee",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.3)",
  borderBottom: "solid 20px pink",
  borderTop: "solid 20px blue",
};

const style2 = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

const style3 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center", // Fix the typo here
  gap: "29px",
};

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [, setOperation] = useState("+");
  const [text, setText]=useState('');

  const handleNum1Change = (e) => {
    setNum1(Number(e.target.value));
  };

  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value));
  };

  const calculateResult = (operator) => {
    setOperation(operator); // Update the operation state based on the clicked button

    switch (operator) {
      case "+":
        setText('Success');
        setResult(num1 + num2);
        break;
      case "-":
        setText('Success');
        setResult(num1 - num2);
        break;
      case "*":
        setText('Success');
        setResult(num1 * num2);
        break;
      case "/":
        if (num2 === 0) {
          setText("Cannot divide by zero");
        } else {
          setText('Success')
          setResult(num1 / num2);
        }
        break;
      default:
        setText("Invalid operation");
    }
  };
let style4={};
  if((num2===0) && (text==="Cannot divide by zero" || text==="Invalid operation")){
     style4={
      color:'red',
    }
  }else{
    style4={
      color:'green',
    }
  }

  return (
    <div style={style}>
      <h1>React Calculator</h1>
      <div style={style2}>
        <input
          onChange={handleNum1Change}
          type="number"
          placeholder="Num1"
          value={num1} // Display the current value of num1
        />
        <input
          onChange={handleNum2Change}
          type="number"
          placeholder="Num2"
          value={num2} // Display the current value of num2
        />
      </div>
      <div style={style3}>
        <button onClick={() => calculateResult("+")}>+</button>
        <button onClick={() => calculateResult("-")}>-</button>
        <button onClick={() => calculateResult("*")}>*</button>
        <button onClick={() => calculateResult("/")}>/</button>
      </div>
      <div>
        <p style={style4}>{text}</p>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default App;










