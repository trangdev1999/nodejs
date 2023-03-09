import mongoose from "mongoose";

const zoneSchema = mongoose.Schema({
    name: { type: String, maxLength: 1000 },
    employeeId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employees'
        }
    ]
});

export default mongoose.model("Zones", zoneSchema);