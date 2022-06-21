import React from 'react';
import './App.css';
import MainContainer from "./components/MainContainer";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Login } from './components/user-auth/Login';
import {SignUp} from './components/user-auth/SignUp';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<MainContainer/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
