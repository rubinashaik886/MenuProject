import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignIn from './Login';
import MainPage from './MainPage';
import Guest from './Guest'


function App() {
  
  return (
  
      <Router>
        <Routes>
          
          <Route path="/Login.js" element={<SignIn/>}/>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/Guest.js" element={<Guest/>}/>
            
        </Routes>
      </Router>
  
  );
  
}

export default App;