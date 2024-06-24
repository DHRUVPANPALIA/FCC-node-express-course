const express = require('express')
const app = express()
const task = require('./routes/tasks');

// middleware
app.use(express.json())


// routes examples
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})



app.use('/api/v1/tasks', task)



const port = 3000

app.listen(port,() => {
    console.log(`Server is here http://localhost:${port}`)
})