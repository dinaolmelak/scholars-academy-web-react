import React from "react";
import {BrowserRouter as Router,Switch,Route,Routes} from "react-router-dom";
import Navbarmenu from './Navbarmenu';
//import Schedule from "./Schedule";


import Home from './pages/Home.js';
import Calendar from "./pages/Calendar.js";

const Hero = (props) => {
    const {handleLogout} = props;
    return (
        
        <section className="hero">
            <nav className="nav">Welcome To Scholars Academy
                <div>
            <Router basename="/">
            <Navbarmenu/>
                <Routes>
                    <Route exact path="/Home" element={<Home/>}/>
                    <Route path="/Calendar" element={<Calendar/>}/>
                    
                </Routes>
                
                
                
            
            </Router>
            </div>
            
            </nav>
            

                <button  onClick={handleLogout}>Sign Out</button>  
           
            
           
        
        </section>
        
        
    )
}

export default Hero;