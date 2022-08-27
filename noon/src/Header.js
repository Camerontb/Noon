import React from 'react'
import { Header } from 'semantic-ui-react'
import axios from 'axios'
import './App.css';


axios.get('http://localhost:4000/test')
  .then(function (res, data) {
    // handle success
    // console.log(res.data);
    // console.log(data.Name)
    
  },[])

const HeaderExamplePage = () => (
  <div className="wrapper">
    <Header as='h1' >Sea-Swift Noon Report</Header>
    {/* <Header as='h2'>Second Header</Header>
    <Header as='h3'>Third Header</Header>
    <Header as='h4'>Fourth Header</Header>
    <Header as='h5'>Fifth Header</Header>
    <Header as='h6'>Sixth Header</Header> */}
  </div>
)

export default HeaderExamplePage