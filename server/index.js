const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require('dotenv');
const userRouter = require('./routes/authRoutes')

dotenv.config();

//localhost url
mongoose.connect('mongodb+srv://webconnect:webconnect123@cluster0.tnchb.mongodb.net/getWheels').then(()=>{
}).catch((err)=>{console.log(err)});



require('./models/otpAuth')
require('./models/user')
require('./models/vehicle')
require('./models/vehicleDeal')


app.use(express.json());
app.use(cors());

app.use('/user', userRouter);

app.get("/", (req, res)=>{
    res.send("Get Wheels services API.")
})


app.listen(process.env.PORT || 5000,()=>{
    console.log("Server Running🚀: http://localhost:5000/");
})