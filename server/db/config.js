import mongoose from "mongoose";

// mongoose.connect(`mongodb://127.0.0.1:27017/idigital-ecommerce`).then((res)=>{
//     console.log("db connected");
// })
mongoose.connect(`mongodb+srv://pushpasanthi1994_db_user:Push123@cluster0.kekovtt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/idigital-ecommerce`,{
useNewUrlParser: true,
useUnifiedTopology: true
}).then((res)=>{
    console.log("db connected");
})



