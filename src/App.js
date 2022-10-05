import * as React from 'react';
import {Routes, Route} from 'react-router-dom'
import Dashboard from "../src/components/Dashboard"
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
