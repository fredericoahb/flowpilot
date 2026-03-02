
const express = require('express')
const axios = require('axios')

const app = express()

app.get('/', async (req,res)=>{
  const api = await axios.get('http://api:3001/api/requests')
  res.send(`<h1>FlowPilot</h1><pre>${JSON.stringify(api.data,null,2)}</pre>`)
})

app.listen(3000,()=>console.log("Web running on 3000"))
