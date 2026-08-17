const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res)=>{
    res.send('Consolid backend is sprinting hehehe...')
})

app.listen(5000, ()=>{
    console.log('Server running for Adu');
    
})