import React from "react";
import Header  from './Header';
import { Component } from "react";
import { Grid } from "semantic-ui-react";
import './App.css';


import FormExampleWidthField from "./FormExampleWidthField";



class Main extends Component{
    render(){
        return(
            <div>
               
               <Header/>
               {/* <div className="wrapper" class="ui action input"><input type="text" placeholder="Vessel name..."/><button class="ui button">Search</button></div> */}
               
               
                
                {/* <GridExampleColumnWidth/> */}
                {/* <Form/> */}
                <FormExampleWidthField/>

                
            </div>
            
        )
    }
}

export default Main 