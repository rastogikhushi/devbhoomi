import mongoose from "mongoose";
// import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    reviews: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Review",
        },
    ],

  }
);

export default mongoose.model("Hotel", hotelSchema);
