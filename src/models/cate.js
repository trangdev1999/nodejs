import mongoose  from "mongoose";

const cateSchema=mongoose.Schema({
    name:{type:String,maxLength:50, minLength:5,required:true},
    description:{type:String,minLength:5,required:true},


})
export default mongoose.model("Category",cateSchema);