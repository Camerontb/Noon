

import {React, useState,useEffect} from 'react'

import ReactWeather from "react-open-weather-widget";
import "react-open-weather-widget/lib/css/ReactWeather.css";
import styles from "../Style/weatherStyle";
import "../Style/styles.css"
import { Table} from 'semantic-ui-react'
import { Form } from "react-router-dom";
import axios from 'axios'

import { useForm} from 'react-hook-form'


const Home = () => {
  const [apiData, setApiData] = useState({});
  const date = ''

  
  


  // API KEY AND URL
  const apiKey = '4c078ef44a149beb7efc39be6f61f99a'
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=-16.9&lon=145.7&appid=${apiKey}&units=metric`;



  // Side effect
useEffect(() => {
  console.log("hello")
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {setApiData(data);console.log(data.sys.sunset)});
  }
  
  ,[])
  

//Time Stamp COnversion 

const moment = require ('moment')
let sunR = apiData.sys?.sunset; console.log(sunR)
let sunS = apiData.sys?.sunrise; console.log(sunS)
let now= moment()
console.log(now.format())
var crtSunR = moment.unix(sunR);
var crtSunS = moment.unix(sunS);

console.log( crtSunR.format("hh:mm:ss") );

//Tidal API 
const [tideData, setTideData] = useState();

var myHeaders = new Headers();
myHeaders.append("Authorization", "c8daa0e6-4884-11ed-bce5-0242ac130002-c8daa154-4884-11ed-bce5-0242ac130002");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
useEffect(() => {

  fetch("https://api.stormglass.io/v2/tide/extremes/point?lat=60.936&lng=5.114&start=2022-10-10T10:44:05Z&end=2022-10-10T13:44:05Z",requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .then((data) => {setTideData(data);console.log(data)});

    // .catch(error => console.log('error', error));
    
  },[]);
  
//Vessel FInder API 
  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://vesselin.p.rapidapi.com/ais',
    params: {mmsi: '211873030', dist: '1'},
    headers: {
      'X-RapidAPI-Key': 'd74726e5fcmsh5e054eeee7dd9b2p125e85jsnae8a7bf3b456',
      'X-RapidAPI-Host': 'vesselin.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
// export default function Home() {
  return (
    <div>
      <div className="wrapper" style ={styles.containerAPI}>
        {/* <Form.Group> */}
        <h3>API Weather</h3>
          <Table>
            <thead>
              <tr>
                <th>Wind</th>
                <th>Direction</th>
                <th>Temp outside</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{apiData?.wind?.speed}</td>
                <td>{apiData?.wind?.deg}</td>
                <td>{apiData?.main?.temp}</td>
              </tr>
            </tbody>
            <tr>
              <th>Sunrise</th>
              <th>{crtSunS.format("hh:mm")}</th>
            </tr>
            <tr>
              
              <th>Sunset</th>
              <th>{crtSunR.format("hh:mm")}</th>
             
            </tr>
            

          </Table>
          <Table>
              <thead>
                  <tr>
                    <th>Vessel </th>
                    <th>Speed</th>
                    <th>Next Port</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>{apiData?.wind?.speed}</td>
                    <td>{apiData?.wind?.deg}</td>
                    <td>{apiData?.main?.temp}</td>
                  </tr>
              </tbody>
            

          </Table>
        {/* </Form.Group> */}
         
      </div>
      <>
    
      </>
      <div className="wrapper" style={styles.container}>
        <h3>Weather</h3>
        
        <ReactWeather
          forecast="5days"
          apikey="4c078ef44a149beb7efc39be6f61f99a"
          type="city"
          city="Cairns"
          
        />

      
     
      </div>
      <>
        
        <h3>Chek this when it resets</h3>
      </>
      
    </div>  
    

  );
}

export default Home
