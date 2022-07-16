import React from "react";
import Header  from './Header';
import { Component } from "react";
import InputExampleInput from "./InputExampleinput";
import GridExampleColumnWidth from './VesselInfo'
import { Grid } from "semantic-ui-react";


class Main extends Component{
    render(){
        return(
            <div>
               
               <Header/>
               <div class="ui action input"><input type="text" placeholder="Vessel name..."/><button class="ui button">Search</button></div>
                <GridExampleColumnWidth/>
            </div>
            
        )
    }
}

export default Main 