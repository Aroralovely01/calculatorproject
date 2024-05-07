import React, {useState} from 'react';
import './App.css';

function App() {

  let[value,setValue]=useState('')

 function handle(e){
    setValue(value +e.target.innerHTML)
 }
 function equal(){
    setValue(eval(value))
 }
 function AC(){
    setValue("")
 }
 function DEL(){
    setValue(value.toString().slice(0,-1))
 }






  return (
    <div class="calculator">
    <input type="text" placeholder="0" id="inputbox" value={value}/>
    <div>
        <button  class="eqlbtn" onClick={AC}>AC</button>
        <button  class="eqlbtn" onClick={DEL}>DEL</button>
        <button  class="eqlbtn" onClick={handle}>%</button>
        <button class="oprtr" onClick={handle}>/</button>
    </div>
    <div>
        <button onClick={handle}>7</button>
        <button onClick={handle}>8</button>
        <button onClick={handle}>9</button>
        <button class="oprtr" onClick={handle}>*</button>
    </div>
    <div>
        <button onClick={handle}>4</button>
        <button onClick={handle}>5</button>
        <button onClick={handle}>6</button>
        <button  class="oprtr" onClick={handle}>-</button>
    </div>
    <div>
        <button onClick={handle}>1</button>
        <button onClick={handle}>2</button>
        <button onClick={handle}>3</button>
        <button class="oprtr" onClick={handle}>+</button>
    </div>
    <div>
        <button onClick={handle}>00</button>
        <button onClick={handle}>0</button>
        <button onClick={handle}>.</button>
        <button class="eqlbtn" onClick={equal}>=</button>
    </div>

</div>
  );
}

export default App;
