import React from "react";
import './App.css';
function Form(){
    const handleSubmit = event=>{
        event.preventDefault();
        alert('You have submitted a form')
    }
    return(
        <nav class ="navbar navbar-dark bg-primary">
    <div className="wrapper">
      
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>
                   
                    <input name="name" />
                    <p>Vessel Name</p>
                    <input name="name" />
                    <p>Latitude</p>
                    <input name="name" />
                    <p>Longitude</p>
                  
                </label>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    </div>

        </nav>
    )
}

export default Form