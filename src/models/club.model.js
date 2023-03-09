import mongoose from "mongoose";

const clubSchema = mongoose.Schema({
    name: { type: String, maxLength: 1000 },
    code: { type: String, maxLength: 1000 },
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Groups'
    },
});

export default mongoose.model("Clubs", clubSchema);
