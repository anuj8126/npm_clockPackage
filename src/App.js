import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
       
       <h2>Time : {new Date().toLocaleTimeString()} IST</h2>
    </div>
  );
}

export default App;
