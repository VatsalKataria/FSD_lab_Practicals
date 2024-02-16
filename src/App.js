import React from 'react';
import HelloWorld from './Prac1';
import AlertMsg from './Prac2a';
import List from './list';
import './App.css';
import CounterA from './Prac5a';
import CounterB from './Prac5b';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <AlertMsg/>
      <List/>
      <CounterA/>
      <CounterB/>
    </div>
  );
}

export default App;
