import React from 'react';
import HelloWorld from './Prac1';
import AlertMsg from './Prac2a';
import List from './list';
import './App.css';
import print from './Prac3';
import Counter_a from './Prac5a';
import Counter_b from './Prac5b';

function App() {
  const innerFunction = print();
  innerFunction();
  return (
    <div className="App">
      <HelloWorld/>
      <AlertMsg/>
      <List/>
      <Counter_a/>
      <Counter_b/>
    </div>
  );
}

export default App;
