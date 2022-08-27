const express = require ('express')
const cors = require ('cors')

const bodyParser = require ('body-parser')
const connection = require ('./db')


const app = express ()
app.use(cors())
app.use(bodyParser.json())


//Program 

app.get('/test',(req,res)=>{
    let sql = ` SELECT * FROM NoonReP `
    connection.query(sql,(err,result, fields)=>{
        if(err)throw err
       console.log(result)
        res.send(result)
  
    })
  
  })


  app.post('/noon',  (req,res,next)=> {
    console.log(req.body)
    res.send("file uploaded")
    // console.log(connection)
    const firstName =req.body.data.firstName
    const lastName= req.body.data.lastName
    
    // const ADD_QUERY =  `INSERT INTO Vessel (firstName, lastName) VALUES ('${firstName}','${lastName}')`;
    // // const Recieve = `SELECT * from Dockit`;
    // connection.query(ADD_QUERY,(err,res)=>{
    // })
    // connection.query(Recieve,(err,rows)=>{
    //   if(err)console.log(err)
    //   console.log(rows)
      
    // })
    
    // res.send("file uploaded")
})
app.listen(4000,()=>{
    console.log("Running on Port 4000")
})