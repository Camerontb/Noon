import React from 'react'
import { Form } from 'semantic-ui-react'
import axios from 'axios'
import { useForm} from 'react-hook-form'
import  {setFromDtttm} from "react-datepicker";





function NoonPos(){
    // const {buttonText} =this.state.false 
    
    // const {handleSubmit, register} =useForm()
    const portOptions = ''
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =(data) => {
        console.log(data)
        // alert(`You've lodged an expanse`)
        axios.post('http://localhost:4000/Pos',{
          data         
    
        })
        
         
    }
   
    return(
        
        <>
            {/* <Menu secondary>
                <Menu.Item
                    name='New Record'
                
                
                />
                <Menu.Item
                    name='History'
                
                
                />
                <Menu.Item
                    name='Information'
                
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                
                </Menu.Menu>
            </Menu> */}
        
        <Form className="wrapper" onSubmit={handleSubmit(onSubmit)} action="/stats"  method="post" >
                
            
                <Form.Group id= "details" onSubmit={handleSubmit} >
                
                    <Form.Field width={6}>
                        <label>Vessel Name</label>
                        <select {...register("VesselName")} >
                            <option value="Trinity Bay">Trinity</option>
                            <option value="Alabatros">Alabatros</option>
                            <option value="Warrender">Warrender</option>
                            <option value="Fourcroy">Fourcroy</option>
                            <option value="Malu Titan ">Malu Titan</option>
                            <option value="Malu trojan">Malu trojan</option>
                            <option value="Malu Chief">Malu Chief</option>
                            <option value="Malu trojan">Malu trojan</option>
                            <option value="Malu Warrior">Malu Warrior</option>




                        </select>
                                
                        
                    </Form.Field>
                    <Form.Field width={6}>
                        <label>Port Name</label>
                        <select {...register("Port")}>
                            <option value="Cairns">Cairns</option>
                            <option value="Horn island">Horn</option>
                            <option value="Thursday Island">Thursday Island</option>
                            <option value="Seisha">Seisha</option>
                            <option value="Weipa">Weipa</option>
                            <option value="Lizard Island">Lizard Island</option>


                        </select>
                            
                            
                        
                    </Form.Field>
                    <Form.Field width={6}>
                        <label>Date</label>
                        <input
                            placeholder='Enter the date'
                            type="Date"
                            onChange={date => setFromDtttm(date ? date : "")}
                            {...register("opDate")}
                        />
                    </Form.Field>
                </Form.Group>
                
            
                
                
                <table class="ui celled table">
                    <thead>
                        <tr>
                        <th>Postion</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Postion</td>
                            <td>
                                <input 
                                type = "text"
                                placeholder='Latitude 00-000.0'
                                {...register('Latitude')}
                                />
                            </td>
                            
                            <td>
                                <input 
                                type = "Text"
                                placeholder='Longitude 00-000.0'
                                {...register('norDate')}
                                
                                />
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <table class="ui celled table">
                    <thead>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>Speed</td>
                            <td>
                                <input 
                                type = "text"
                                placeholder='Daily Average Speed (Knots)'
                                {...register('AvgSpeed')}
                                />
                            </td>
                            <td>Distance Run</td>
                            <td>
                                <input 
                                type = "text"
                                placeholder='Distance Run Since Last Report'
                                {...register('AvgSpeed')}
                                />
                            </td>
                            
                            
                        </tr>
                        
                    </tbody>
                </table>
                
                <div class="field">
                    <label>Notes and Comments</label>
                    <textarea {...register ('notes')}></textarea>
                </div>
                
        

                
                
                <button class="ui blue button">Submit</button>
                <div>
                {errors.norDate && <span>This field is required</span>}

                </div>
                
                
            
            </Form>
            
        </>      
    )

    
}

export default NoonPos