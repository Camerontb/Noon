import React from 'react'
import { Form ,Select} from 'semantic-ui-react'
import './App.css';
import axios from 'axios'
import { useForm } from 'react-hook-form'



function FormExampleWidthField(){
    const {handleSubmit, register} =useForm()
    const onSubmit = (data) => {
        console.log(data)
        alert(`You've lodged an expanse`)
        axios.post('http://localhost:4000/noon',{
          data
          
    
        })
        
        
    }
    const vesselOptions =[
        {key: "t", text: "Trinity Bay", value: "Trinity Bay"},
        {key: "w", text: "Warrnender", value: "Warrnender"},
        {key: "m", text: "Malu Titan", value: "Malu Titan"},
        {key: "t", text: "Malu Trojan", value: "Malu Trojan"},

    ]
    return(
        // <Form className="wrapper" onSubmit={handleSubmit}>
        <Form onSubmit={handleSubmit(onSubmit)} action="/stats"  method="post">
            <input
            id="vendor"
            control='input'
            placeholder="Name of Shop"
            name="vendor"
            
            width={2}
          />
            
            <Form.Group>
           
                <Form.Input id='Vessel Name' label='Vessel Name' placeholder='Vessel Name' width={6} control={Select} options={vesselOptions}  />
                <Form.Input label='IMO Number' placeholder='IMO Number' width={4} type="number" control="input"  />
                <Form.Input label='Date' placeholder='Date' width={6} type="date" />
            </Form.Group>
            <Form.Group >
                <Form.Field width={4}>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        type="text"
                        {...register("firstName")}
                        
                    />
                </Form.Field>
                <Form.Field width={8}>
                    <label>Last Name</label>
                    <input
                        placeholder='First Name'
                        type="text"
                        {...register("LastName")}
                        
                    />
                </Form.Field>
            </Form.Group>
            <Form.Group>
                <Form.Input label="Latitude" placeholder='DD.MM.SSS' width={6} type="number" />
                <Form.Input label="Longitude" placeholder='DDD.MM.SSS' width={6} type="number"/>
                <Form.Input label="Speed" placeholder='Speed Knots' width={6} type="number" />

            </Form.Group>

            
            
            <button type="submit">Submit</button>
        </Form>
    )

    
}








  


export default FormExampleWidthField;