import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    seller: {
        type: String,
        required: false
    }
})

export default mongoose.model('items',itemSchema);