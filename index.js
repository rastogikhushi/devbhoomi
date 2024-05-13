import  express  from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from "cookie-parser";
import tourRoute from './routes/tours.js'
import userRoute from './routes/user.js'
import authRoute from "./routes/auth.js"; 
import reviewRoute from "./routes/reviews.js"; 
import bookingRoute from "./routes/bookings.js"; 

dotenv.config()
const app=express();
const port=8000;
const corsOption={
    origin:true,
    credentials:true
}

//database connection 
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/tour-booking') //returns a promise
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})
// mongoose.set('strictQuery',true)



// middleware
app.use(express.json())
app.use(cors(corsOption))
app.use(cookieParser())
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/user',userRoute);
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/review",reviewRoute);
app.use("/api/v1/booking",bookingRoute);


app.listen(port,()=>{
    // connect();
    console.log('server listening on port',port)
})