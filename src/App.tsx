import React from 'react';
import './App.css';
import BuyerInterface from "./components/BuyerInterface";
import SellerInterface from "./components/SellerInterface";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <BuyerInterface></BuyerInterface>
        <SellerInterface></SellerInterface>
      </div>
    </div>
  );
}

export default App;
