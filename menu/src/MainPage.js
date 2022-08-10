
import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignIn from './Login';


function MainPage() {

    const [food, setFood] = useState(items)
    return (
    <>
    <menu>
    
      <div>
        <h3 className="title">Our Menu</h3>
        
          <Button href="./Login.js" style={{position: "absolute", left: "77%", top: "30px"}} className="filter-btn">Log-In</Button>
          <Button href="./Guest.js" style={{position: "absolute", left: "83%", top: "30px" }} className="filter-btn">Continue as Guest</Button>  
       
      </div>
      
      <Divider className="underline"></Divider>
      
  
      <Categories/>
      <br></br>
      <section className="section-center">
        
        <Menu food={food}/>
        
      </section>
  
    </menu>

      
  
    
    </>
    );
    
  }
  
  export default MainPage;