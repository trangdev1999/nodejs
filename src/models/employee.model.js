import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    zone: { type: String, required: true },
    image: { type: String, required: true },
    phone: { type: String, required: true },
    enrollDate: { type: Date, default: Date.now() },
    status: { type: String, default: 'working' },
   
});


export default mongoose.model('Employees', employeeSchema);