import {React, useState,useEffect} from 'react'
// import { Table } from 'semantic-ui-react'
// import axios from 'axios';
// import { response } from 'express';

const Home = () => {
  const [name, setName] = useState([])
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
        console.log(data,err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      
        <ul>
          {users.map(hello=>
            <li>{hello.address.street}</li>
          )}
        </ul>
      
    </div>
  )
}