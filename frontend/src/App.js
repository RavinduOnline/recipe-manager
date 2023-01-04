import React from 'react';
import {BrowserRouter, Router , Routes , Route} from "react-router-dom"

import Home from './components/pages/home';
import Create from './components/pages/create'
import RecipeEdit from './components/pages/edit';



function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/create" element={<Create/>}/>
              <Route path="/recipe/edit/:id" element={<RecipeEdit/>}/>
              <Route path="*" element={<></>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
