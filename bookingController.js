import Booking from "../models/Booking.js"
//create new booking
export const createBooking=async (req,res)=>{
    const newBooking =new Booking(req.body)
    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({success:true,message:"Your tour is booked",data:savedBooking})
    } catch (error) {
        res.status(500).json({success:true,message:"Internal server error"})
    }
}
    // get single BOOKING
export const getBooking = async(req,res)=>{
        const id=req.params.id
        try {
            const book=await Booking.findById(id)
            res.status(200).json({success:true,message:"suucessful",data:book})
        } catch (error) {
            res.status(404).json({success:false,message:"not found"})
        }
    }
// get All BOOKING
export const getAllBooking = async(req,res)=>{
    try {
        const books=await Booking.find(id)
        res.status(200).json({success:true,message:"sucessful",data:book})
    } catch (error) {
        res.status(404).json({success:false,message:"not found"})
    }
}
