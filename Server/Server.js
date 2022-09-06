const express = require ('express')
const cors = require ('cors')

const bodyParser = require ('body-parser')
const connection = require ('./db')


const app = express ()
app.use(cors())
app.use(bodyParser.json())


//Program 

// app.get('/test',(req,res)=>{
//     let sql = ` SELECT * FROM NoonReP `
//     connection.query(sql,(err,result, fields)=>{
//         if(err)throw err
//        console.log(result)
//         res.send(result)
  
//     })
  
// })


  app.post('/noon',  (req,res)=> {
    console.log(req.body)
    res.send("file uploaded")
    // console.log(connection)
    const vesselName =req.body.data.VesselName
    const Port= req.body.data.Port
    const opDate= req.body.data.opDate
    const norTime= req.body.data.norTime
    const norDate= req.body.data.norDate
    const OnPortPassageTime= req.body.data.OnPortPassageTime
    const OnPortPassageDate= req.body.data.OnPortPassageDate
    const RampDownTime= req.body.data.RampDownTime
    const RampDownDate= req.body.data.RampDownDate
    const StartCargoTime= req.body.data.StartCargoTime
    const StartCargoDate= req.body.data.StartCargoDate
    const CompleteCargoTime= req.body.data.CompleteCargoTime
    const CompleteCargoDate= req.body.data.CompleteCargoDate
    const RampUpTime= req.body.data.RampUpTime
    const RampUpDate= req.body.data.RampUpDate
    const FAOPTime= req.body.data.FAOPTime
    const FAOPDate= req.body.data.FAOPDate
    const notes= req.body.data.notes



    
      const ADD_QUERY =  `INSERT INTO NoonRep (vesselName,Port,opDate,norTime,norDate,OnPortPassageTime,OnPortPassageDate,RampDownTime,RampDownDate,StartCargoTime,StartCargoDate,CompleteCargoTime,CompleteCargoDate,RampUpTime,RampUpDate,FAOPTime,FAOPDate,notes) VALUES ('${vesselName}','${Port}','${opDate}','${norTime}','${norDate}','${OnPortPassageTime}','${OnPortPassageDate}','${RampDownTime}','${RampDownDate}','${StartCargoTime}','${StartCargoDate}','${CompleteCargoTime}','${CompleteCargoDate}','${RampUpTime}','${RampUpDate}','${FAOPTime}','${FAOPDate}','${notes}')`;
        // const Recieve = `SELECT * from Dockit`;
        connection.query(ADD_QUERY,(err,res)=>{
        })
        // connection.query(recieve,(err,rows)=>{
        //   if(err)console.log(err)
        //   console.log(rows)
          
        // })
        
        res.send("file uploaded")
    })
app.listen(4000,()=>{
    console.log("Running on Port 4000")
})