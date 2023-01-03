import React from 'react';
import {BrowserRouter, Router , Routes , Route} from "react-router-dom"

import Home from './components/pages/home';



function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="*" element={<></>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
