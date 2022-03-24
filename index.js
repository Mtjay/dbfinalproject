require('dotenv').config()
const express = require('express')
const app = express()
const oracledb = require('oracledb')
const dbConfig = require('./dbconfig.js')

app.get('/',(request,response)=>{
    response.send('<h1>yo</h1>')
})
app.get('/states',(request,response)=>{
    response.send('<h1>states</h1>')
})
app.get('/states/:state',(request,response)=>{
    const state = request.params.state
    response.send(`<h1>${state}</h1>`)
})
app.get('/crimes',(request,response)=>{
    response.send('<h1>crimes</h1>')
})
app.get('/crimes/:crime',(request,response)=>{
    const crime = request.params.crime
    response.send(`<h1>${crime}</h1>`)
})
//--------------------------------ORACLE
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const mypw = process.env.NODE_ORACLEDB_PASSWORD

async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection({ user: "myuser", password: mypw, connectionString: "localhost/orcl" });
    
    } catch (err) {
    console.error(err);
  }
}
run()
//------------------------------------------
/*
todo: async/await, validate routers' parameters, set up REST client, 
add request logger, add test env, project structure
*/


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})