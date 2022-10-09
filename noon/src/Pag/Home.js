// import {React, useState,useEffect} from 'react'
// import { Table } from 'semantic-ui-react'
// import { Form } from 'semantic-ui-react'
// import { useForm} from 'react-hook-form'


// const Home = () => {
//   const [apiData, setApiData] = useState({});


//   // API KEY AND URL
//   const apiKey = '4c078ef44a149beb7efc39be6f61f99a'
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=-16.9&lon=145.7&appid=${apiKey}&units=metric`;



//   // Side effect
// useEffect(() => {
//   fetch(apiUrl)
//     .then((res) => res.json())
//     .then((data) => setApiData(data));
//     console.log('you clicked')
// }, [setApiData]);



// return (
  

//   <div className="App">
//     {apiData.wind.speed}
    
//     <div className="container">
//       <div className= 'wrapper'>
      
//           <Form.Group >
//             <Table >
//                 <thead>
//                   <tr>
                    
//                     <th>Wind Speed</th>
//                     <th>Wind Direction</th>
//                     <th>Outside Temp</th>
//                     }
//                   </tr>
//                 </thead>
//               <tbody>
//                 <tr> 
//                   {setApiData}
//                       <td>{apiData.wind.speed} knots</td> 
                  
                
//                 </tr>                 
//               </tbody>
//             </Table>
//             <button >Get Data</button>
//           </Form.Group>
//       </div>
//     </div> 
//   </div>
  
// );          

          
                      



// }
// export default Home

import React from "react";
import ReactWeather from "react-open-weather-widget";
import "react-open-weather-widget/lib/css/ReactWeather.css";
import styles from "../Style/weatherStyle";
import "../Style/styles.css"




export default function Home() {
  return (
    <div className="wrapper" style={styles.container}>
      <h3>Weather</h3>
      
      <ReactWeather
        forecast="5days"
        apikey="4c078ef44a149beb7efc39be6f61f99a"
        type="city"
        city="Cairns"
        
      />
    </div>
  );
}


