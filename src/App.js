import './App.css';
import React, { useEffect, useState } from 'react';
import {Routes, Route, Link} from "react-router-dom"
import Parte1 from './components/Parte1'
import Parte2 from "./components/Parte2"

const App = () =>{
  return (
     <Routes>
       <Route path="/Parte1" element={<Parte1 />} />
       <Route path="/Parte2" element={<Parte2 />} />          
     </Routes>    
  )
}

export default App