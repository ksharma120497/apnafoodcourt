import React from 'react';
import './App.css';
import MainContainer from "./components/MainContainer";
import {
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/contacts/Contact';


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<MainContainer/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
