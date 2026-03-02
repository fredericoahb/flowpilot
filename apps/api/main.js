
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const app = express()
app.use(cors())
app.use(express.json())

const SECRET = "dev_secret"

app.get('/api/health', (req,res)=>{
  res.json({status:"ok"})
})

app.post('/api/login',(req,res)=>{
  const token = jwt.sign({role:"admin"}, SECRET, {expiresIn:"1h"})
  res.json({accessToken:token})
})

app.get('/api/requests',(req,res)=>{
  res.json([{id:1,title:"VPN instável",status:"OPEN"}])
})

app.listen(3001,()=>console.log("API running on 3001"))
