import {StrictMode} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Component } from "react";




import App from "./App"
import {Outlet, Navlink} from "react-router-dom"

import Cargo from "./Cargo";
import Home from "./Home";
import FAOP from "./FAOP";
import { Grid } from "semantic-ui-react";



class Main extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                
                    <Route path ='/' element= {<App/>}/>
                        <Route path ='/home' element={<Home />} />

                        {/* <Route path='/Home' element={<Home />} /> */}
                        <Route path ='/Cargo' element={<Cargo />} />
                        <Route path ='/FAOP' element={<FAOP />} />                 

                </Routes>   
            </BrowserRouter>   
        )   
        
    }
}

export default Main 