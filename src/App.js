import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "./Button/button.js";

function App() {
  const [val1, setVal1] = useState(4);
  const [val2, setVal2] = useState(3);

  const buttonArr1 = [1,4,7];
  const buttonArr2 = [2,5,8]
  const buttonArr3 = [3,6,9,]
  const opArr1 = [0,'+', '-'];
  const opArr2 = ['*', '/' , '=']

  const handleAllButtonClick = (value) => {
    console.log('handleAllButtonClick value ',value)
    setVal1( value)
  }

  const AllButton1  = buttonArr1.map((num) => {
    return <Button btName={num} btFun={handleAllButtonClick} />
  } );
  const AllButton2  = buttonArr2.map((num) => {
    return <Button btName={num} btFun={handleAllButtonClick} />
  } );
  const AllButton3  = buttonArr3.map((num) => {
    return <Button btName={num} btFun={handleAllButtonClick} />
  } );
  
  const opButton1 = opArr1.map((op) => {
    console.log('op',op)
    return <Button btOp={op} btFun={handleAllButtonClick}/>
  })
 
  const opButton2 = opArr2.map((op) => {
    console.log('op',op)
    return <Button btOp={op} btFun={handleAllButtonClick} />
  })

 
  const [op, setOp] = useState(0);

  const addFun = () => {
    setOp(val1 + val2);
  };



  const subFun = () => {
    console.log("from sub func");
    setOp(val1 - val2);
  };
  const val1Input = (e) => {
    console.log(e.target.value);
    setVal1(e.target.value);
  };
  return (
    <div className="App">
      <div>
        <input value={val1} onChange={(e) => val1Input(e)} type="text" />
        <br />
        <input
          value={val2}
          type="number"
          onChange={(e) => setVal2(parseInt(e.target.value))}
        />
      </div>

      <div>
        <span>this is calculate = {op} </span>
        <br />
        <button onClick={() => addFun()}>Add</button>
        <br/>
        <button onClick={() => subFun()}>sub</button>
        <br/>
       
      <div className="num-button">
      
        
      <div> {AllButton1}</div>
      <div> {AllButton2}</div>
      <div> {AllButton3}</div>
      
      </div>
      
      <div className="op-button">
      <div>{opButton1}</div>
      <div>{opButton2}</div>
      </div>
      </div>
    </div>
  );
}

export default App;


