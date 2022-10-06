import * as React from 'react';
import {Routes,Route} from "react-router-dom"
import Dashboard from "../src/components/Dashboard"
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={
      <Dashboard/>}
      />
      
    <Route exact path=":id" element={<ProductDetails/>}/>
    </Routes>
  </div>
  );
}

export default App;
