import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String },
    createdAt: { type: Date, default: Date.now }
});
const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String, 
    },
    website:{
        type:String 
    },
    location:{
        type:String 
    },
    logo:{
        type:String 
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    ratings: [reviewSchema], 
    avgRating: { type: Number, default: 0 }
},{timestamps:true})
export const Company = mongoose.model("Company", companySchema);