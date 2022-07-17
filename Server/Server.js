const express = require ('express')
const cors = require ('cors')

const bodyParser = require ('body-parser')
const connection = require ('./db')


const app = express ()
app.use(cors())
app.use(bodyParser.json())


//Program 

app.get('/test',(req,res)=>{
    let sql = ` SELECT * FROM Vessel `
    connection.query(sql,(err,result, fields)=>{
        if(err)throw err
       console.log(result)
        res.send(result)
  
    })
  
  })


app.listen(4000,()=>{
    console.log("Running on Port 4000")
})