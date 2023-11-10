const express = require('express');
const { connectDB } = require('./utils/database');
const User = require('./models/user');
const cors = require('cors');

connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api', async(req,res)=>{
    const user = await User.find();
    res.json(user)
})

app.listen(4000,()=>{
    console.log('server is running on port 4000')
})