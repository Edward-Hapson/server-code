const mongoose = require('mongoose')
let isconnected = false;

const connectDB = async() => {
    mongoose.set('strictQuery', true)

    if(isconnected){
        console.log('database already connected')
        return;
    }

    try {
        await mongoose.connect('mongodb+srv://hapson:7iCTcZ5Xa7A2eMQ@spems.p0xp0gn.mongodb.net/',{
            dbName: 'SAPS',           
        })

        isconnected = true

        console.log('database connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectDB}