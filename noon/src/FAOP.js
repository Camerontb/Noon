// import React from 'react'
// import { Form } from 'semantic-ui-react'
// import './App.css';
// import axios from 'axios'
// import { useForm } from 'react-hook-form'



// function FAOP(){
//     // const {buttonText} =this.state.false 
    
//     const {handleSubmit, register} =useForm()
//     const onSubmit =(data) => {
//         console.log(data)
//         // alert(`You've lodged an expanse`)
//         axios.post('http://localhost:4000/noon',{
//           data         
    
//         })
        
         
//     }
   
//     return(
        
//         <Form className="wrapper" onSubmit={handleSubmit(onSubmit)} action="/stats"  method="post" >
            
           
//             <Form.Group id= "details" onSubmit={handleSubmit} >
               
//                 <Form.Field width={6}>
//                     <label>Vessel Name</label>
//                     <input
//                         placeholder='Enter the name of the vessel'
//                         type="text"
//                         {...register("VesselName")}       
//                     />
//                 </Form.Field>
//                 <Form.Field width={6}>
//                     <label>Port Name</label>
//                     <input
//                         placeholder='Enter the name of the transit port'
//                         type="text"
//                         {...register("Port")} 
//                     />
//                 </Form.Field>
//                 <Form.Field width={6}>
//                     <label>Date</label>
//                     <input
//                         placeholder='Enter the date'
//                         type="Date"
//                         {...register("opDate")}
//                     />
//                 </Form.Field>
//             </Form.Group>
            
           
            
            
//             <table class="ui celled table">
//                 <thead>
//                     <tr>
//                     <th>Event</th>
//                     <th>Time</th>
//                     <th>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Notice or Readiness</td>
//                         <td>
//                             <input 
//                             type = "time"
//                             {...register('norTime')}
//                             />
//                         </td>
//                         <td>
//                             <input 
//                             type = "date"
//                             placeholder='hello'
//                             {...register('norDate')} 
//                             />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>On Port Passage</td>
//                         <td>
//                             <input 
//                             type = "time"
//                             {...register ('OnPortPassageTime')}
//                             />
//                         </td>
//                         <td>
//                             <input 
//                             type = "date"
//                             placeholder='hello'
//                             {...register('OnPortPassageDate')} 
//                             />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>Ramp Down</td>
//                         <td>
//                             <input 
//                             type = "time"
//                             {...register('RampDownTime')}
//                             />
//                         </td>
//                         <td>
//                             <input 
//                             type = "date"
//                             placeholder='hello'
//                             {...register('RampDownDate')} 
//                             />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>Start Cargo</td>
//                         <td>
//                             <input 
//                             type = "time"
//                             {...register("StartCargoTime")}
//                             />
//                         </td>
//                         <td>
//                             <input 
//                             type = "date"
//                             placeholder='hello'
//                             {...register('StartCargoDate')} 
//                             />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>Complete Cargo</td>
//                         <td>
//                             <input 
//                             type = "time"
//                             {...register('CompleteCargoTime')} 
//                             />
//                         </td>
//                         <td>
//                             <input 
//                             type = "date"
//                             placeholder='hello'
//                             {...register('CompleteCargoDate')} 
//                             />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>Ramp up</td>
//                         <td>
//                             <input 
//                             type = "time"
//                             {...register('RampUpTime')}
//                             />
//                         </td>
//                         <td>
//                             <input 
//                             type = "date"
//                             placeholder='hello'
//                             {...register('RampUpDate')} 
//                             />
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>'FAOP (Full away on passage)'</td>
//                         <td>
//                             <input 
//                             type = "time"
//                             {...register('FAOPTime')}
//                             />
//                         </td>
//                         <td>
//                             <input 
//                             type = "date"
//                             placeholder='hello'
//                             {...register('FAOPDate')} 
//                             />
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//             <div class="field">
//                 <label>Notes and Comments</label>
//                 <textarea {...register ('notes')}></textarea>
//              </div>
             
    

            
            
//              <button class="ui blue button">Submit</button>
            
            
           
//         </Form>
           
//     )

    
// }








  


// export default FAOP