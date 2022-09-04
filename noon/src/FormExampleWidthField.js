import React from 'react'
import { Form } from 'semantic-ui-react'
import './App.css';
import axios from 'axios'
import { useForm } from 'react-hook-form'



function FormExampleWidthField(){
    // const {buttonText} =this.state.false 
    
    const {handleSubmit, register} =useForm()
    const onSubmit =(data) => {
        console.log(data)
        alert(`You've lodged an expanse`)
        axios.post('http://localhost:4000/noon',{
          data         
    
        })
        
         
    }
   
    return(
        
        <Form className="wrapper" onSubmit={handleSubmit(onSubmit)} action="/stats"  method="post" >
            
           
            <Form.Group id= "details" onSubmit={handleSubmit} >
               
                <Form.Field width={6}>
                    <label>Vessel Name</label>
                    <input
                        placeholder='Enter the name of the vessel'
                        type="text"
                        {...register("VesselName")}       
                    />
                </Form.Field>
                <Form.Field width={6}>
                    <label>Port Name</label>
                    <input
                        placeholder='Enter the name of the transit port'
                        type="text"
                        {...register("Port")} 
                    />
                </Form.Field>
                <Form.Field width={6}>
                    <label>Date</label>
                    <input
                        placeholder='Enter the date'
                        type="Date"
                        {...register("Date")}
                    />
                </Form.Field>
            </Form.Group>
            
           
            
            
            <table class="ui celled table">
                <thead>
                    <tr>
                    <th>Event</th>
                    <th>Time</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Notice or Readiness</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>On passage for ramp</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>On ramp</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Start Cargo</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Complete Cargo</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Last Line (Depart Ramp)</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>FAOP</td>
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
            </table>
            <div class="field">
                <label>Notes and Comments</label>
                <textarea></textarea>
             </div>
             
    

            
            
             <button class="ui blue button">Submit</button>
            
            
           
        </Form>
           
    )

    
}








  


export default FormExampleWidthField;