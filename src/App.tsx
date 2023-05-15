import React from 'react';
import './App.css';
import {Map} from "./components/Map";


export type topCarsType = {
  manufacturer: string,
  model: string
}
const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
]


function App() {
  return (
    <div className="App">
      <Map cars={topCars} />

    </div>
  );
}

export default App;
