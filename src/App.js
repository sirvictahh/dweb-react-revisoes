import logo from './logo.svg';
import './App.css';
import OlaDweb from './app/OlaDweb';
import Todo from './app/Todo';
import React,{ useState } from "react";



function App() {
  

  return (
    <div className='custom container'>
      <div className='row'>
        <OlaDweb />
      </div>
      
      <br />

      <Todo />
      
    </div>
  );
}

export default App;
