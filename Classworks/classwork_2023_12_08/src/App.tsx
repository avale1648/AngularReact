import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [a,setA] = useState(0);
  const [b,setB] = useState(0);
  return (
    <div className="App">
      <h1>Сложение двух чисел</h1>
      <div>
        <input type="number" value={a} onChange={e => setA(+e.target.value)} placeholder="0"></input>
        <input type="number" value={b} onChange={e => setB(+e.target.value)} placeholder="0"></input>
      </div>
      
      <p>{a + b}</p>
    </div>
  );
}

export default App;
