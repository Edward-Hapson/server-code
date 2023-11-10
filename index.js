const express = require('express')

const app = express();

app.use(express.json());
app.get('/api', (req,res)=>{
    res.json('hello, world')
})

app.listen(4000,()=>{
    console.log('server is running on port 4000')
})