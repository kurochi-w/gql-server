import mongoose from "mongoose";

const Schema = mongoose.Schema;

const memoSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    memo_no: { type: Number, required: true, unique: true },
    title: String,
    content: String
}, {
    collection: 'memo'
});

export default mongoose.model("memo", memoSchema);