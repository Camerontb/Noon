import React from "react";
import Header  from './Header';
import { Component } from "react";
import { Grid } from "semantic-ui-react";
import './App.css';
// import react

import FormExampleWidthField from "./FormExampleWidthField";
import MenuExampleSecondary from "./Menu"
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


class Main extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                {/* <Footer /> */}

                
                {/* <Header/> */}
                {/* <MenuExampleSecondary /> */}

                {/* <div className="wrapper" class="ui action input"><input type="text" placeholder="Vessel name..."/><button class="ui button">Search</button></div> */}
                
                
                    
                    {/* <GridExampleColumnWidth/> */}
                    {/* <Form/> */}
                    <Route path ='/Menu' element= {<MenuExampleSecondary/>}/>
                   
                    <Route path ='/' element= {<FormExampleWidthField/>}/>

                </Routes>   
            </BrowserRouter>   
        )   
        
    }
}

export default Main 