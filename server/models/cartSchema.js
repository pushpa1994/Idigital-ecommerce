import mongoose from 'mongoose';

 const cartItemSchema = new mongoose.Schema({
    item: {type: mongoose.Schema.Types.ObjectId, ref: 'items'},
    quantity: {type: Number,default: 1 }

 });

 const cartSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    items:[cartItemSchema]
 })

 export default mongoose.model('carts', cartSchema);