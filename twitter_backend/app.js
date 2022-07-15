//setting up express server
const express = require('express');
const app= express();
app.use(express.json())
// requiring dotenv files
const dotenv= require('dotenv')
dotenv.config({path: './config.env'})

const mongoose = require('mongoose')
// const uservalues = app.use(require('./Routes/UserAuth'))
app.use('/api', require('./Routes/TweetsAuth'))
const DB= process.env.DATABASE // database connection
const PORT= process.env.PORT // server running at this port 5002
// connecting to mongoDB database
mongoose.connect(DB).then(()=>{
    console.log('database connection successful') 
}).catch((err) => console.log('no connection'))
// const tweetvalues = require('./Model/User/tweetsSchema')
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})