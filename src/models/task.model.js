import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    project: { type: String, required: true },
    employee: { type: String, required: true },
    priority: { type: String },
    status: { type: String, default: 'Holding' }
});

export default mongoose.model('Tasks', taskSchema);