import {StrictMode} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Component } from "react";



import {Outlet, Navlink} from "react-router-dom"

import App from "./App"
import Home from "./Pag/Home";

import Cargo from "./Pag/Cargo";
import FAOP from "./Pag/FAOP";
import { Grid } from "semantic-ui-react";



class Main extends Component{
    render(){
        return(
            <StrictMode>
                <BrowserRouter>
                    <Routes>
                    
                        <Route path="/" element={<App />}>
                            <Route index element={<Home />} />

                            
                            <Route path ='/Cargo' element={<Cargo />} />
                            <Route path ='/FAOP' element={<FAOP />} />                 
                        </Route>
                    </Routes>   
                </BrowserRouter> 


            </StrictMode>
              
        )   
        
    }
}

export default Main 