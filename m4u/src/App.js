import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Health from './components/Health'
 import Struggle from './components/Struggle'
import Home from './components/Home';
import War from './components/War';
const App = () => {
  return (
     <BrowserRouter>
     <Routes>
    <Route index element={<Home />} />
    <Route path="rwar" element={<War/>} />
    <Route path="virus" element={<Health/>} />
    <Route path="growth-requires-struggle" element={<Struggle/>} />
    
    </Routes>
   </BrowserRouter>

    
  )
}

export default App