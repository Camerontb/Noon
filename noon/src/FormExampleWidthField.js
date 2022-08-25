import React from 'react'
import { Form ,Select} from 'semantic-ui-react'
import './App.css';




function FormExampleWidthField(){
    const handleSubmit =event=>{
        event.preventDefault()
        alert("You Have Submitted a Form")
    }
    const vesselOptions =[
        {key: "t", text: "Trinity Bay", value: "Trinity Bay"},
        {key: "t", text: "Warrnender", value: "Warrnender"},
        {key: "t", text: "Malu Titan", value: "Malu Titan"},
        {key: "t", text: "Malu Trojan", value: "Malu Trojan"},





    ]
    return(
        <Form className="wrapper" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Input label='Vessel name' placeholder='Vessel Name' width={6} control={Select} options={vesselOptions}/>
                <Form.Input label='IMO Number' placeholder='IMO Number' width={4} />
                <Form.Input label='Date' placeholder='Date' width={6} type="date" />
            </Form.Group>

            <Form.Group>
                <Form.Input label="Latitude" placeholder='DD.MM.SSS' width={6} />
                <Form.Input label="Longitude" placeholder='DDD.MM.SSS' width={6} />
                <Form.Input label="Speed" placeholder='Speed Knots' width={6} />

            </Form.Group>

            
            
            <button type="submit">Submit</button>
        </Form>
    )

    
}








  


export default FormExampleWidthField;